const https = require("https");
const { toE164 } = require("../utils/phone");

const KLAVIYO_HOST = "a.klaviyo.com";

function getApiKey() {
  return process.env.KLAVIYO_PRIVATE_API_KEY;
}

function getRevision() {
  return process.env.KLAVIYO_REVISION || "2026-01-15";
}

function getListId() {
  return process.env.KLAVIYO_LIST_ID;
}

function isConfigured() {
  return Boolean(getApiKey());
}

function request({ method, pathname, body }) {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn("Klaviyo skipped: KLAVIYO_PRIVATE_API_KEY is not set");
    return Promise.resolve({ skipped: true });
  }

  const payload = body ? JSON.stringify(body) : null;

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: KLAVIYO_HOST,
        path: pathname,
        method,
        headers: {
          Authorization: `Klaviyo-API-Key ${apiKey}`,
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          revision: getRevision(),
          ...(payload ? { "Content-Length": Buffer.byteLength(payload) } : {}),
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          const ok = res.statusCode >= 200 && res.statusCode < 300;
          if (!ok) {
            const error = new Error(
              `Klaviyo ${method} ${pathname} failed: ${res.statusCode} ${data}`
            );
            error.statusCode = res.statusCode;
            error.body = data;
            reject(error);
            return;
          }
          resolve({ statusCode: res.statusCode, data });
        });
      }
    );

    req.on("error", reject);
    if (payload) {
      req.write(payload);
    }
    req.end();
  });
}

function safeRequest(options) {
  return request(options).catch((error) => {
    console.error(error.message);
    return { ok: false, error: error.message };
  });
}

function buildProfileAttributes({
  email,
  phone,
  firstName,
  lastName,
  kx,
  anonymousId,
}) {
  const attributes = {};
  if (email) {
    attributes.email = email;
  }
  const phoneNumber = toE164(phone);
  if (phoneNumber) {
    attributes.phone_number = phoneNumber;
  }
  if (firstName) {
    attributes.first_name = firstName;
  }
  if (lastName) {
    attributes.last_name = lastName;
  }
  if (kx) {
    attributes._kx = kx;
  }
  if (anonymousId) {
    attributes.anonymous_id = String(anonymousId);
  }
  return attributes;
}

async function upsertProfile({
  email,
  phone,
  firstName,
  lastName,
  kx,
  properties,
}) {
  const attributes = buildProfileAttributes({
    email,
    phone,
    firstName,
    lastName,
    kx,
  });
  if (!attributes.email && !attributes.phone_number && !attributes._kx) {
    return { skipped: true, reason: "no identifier" };
  }

  attributes.locale = "uk-UA";
  if (properties && Object.keys(properties).length) {
    attributes.properties = properties;
  }

  return safeRequest({
    method: "POST",
    pathname: "/api/profile-import",
    body: {
      data: {
        type: "profile",
        attributes,
      },
    },
  });
}

async function subscribeProfile({ email, phone, listId }) {
  const list = listId || getListId();
  if (!list) {
    console.warn("Klaviyo subscribe skipped: KLAVIYO_LIST_ID is not set");
    return { skipped: true, reason: "no list" };
  }

  const profileAttributes = {};
  if (email) {
    profileAttributes.email = email;
  }
  const phoneNumber = toE164(phone);
  if (phoneNumber) {
    profileAttributes.phone_number = phoneNumber;
  }
  if (!profileAttributes.email && !profileAttributes.phone_number) {
    return { skipped: true, reason: "no identifier" };
  }

  profileAttributes.subscriptions = {
    email: {
      marketing: {
        consent: "SUBSCRIBED",
      },
    },
  };

  return safeRequest({
    method: "POST",
    pathname: "/api/profile-subscription-bulk-create-jobs",
    body: {
      data: {
        type: "profile-subscription-bulk-create-job",
        attributes: {
          custom_source: "Checkout form",
          profiles: {
            data: [
              {
                type: "profile",
                attributes: profileAttributes,
              },
            ],
          },
        },
        relationships: {
          list: {
            data: {
              type: "list",
              id: list,
            },
          },
        },
      },
    },
  });
}

async function createEvent({
  metric,
  email,
  phone,
  firstName,
  lastName,
  kx,
  anonymousId,
  properties = {},
  value,
  valueCurrency = "UAH",
  uniqueId,
  time,
}) {
  if (!metric) {
    throw new Error("Klaviyo event requires a metric name");
  }

  const profileAttributes = buildProfileAttributes({
    email,
    phone,
    firstName,
    lastName,
    kx,
    anonymousId,
  });
  if (
    !profileAttributes.email &&
    !profileAttributes.phone_number &&
    !profileAttributes._kx &&
    !profileAttributes.anonymous_id
  ) {
    return { skipped: true, reason: "no identifier" };
  }

  const attributes = {
    properties,
    metric: {
      data: {
        type: "metric",
        attributes: { name: metric },
      },
    },
    profile: {
      data: {
        type: "profile",
        attributes: profileAttributes,
      },
    },
  };

  if (value !== undefined && value !== null) {
    attributes.value = Number(value);
    attributes.value_currency = valueCurrency;
  }
  if (uniqueId) {
    attributes.unique_id = String(uniqueId);
  }
  if (time) {
    attributes.time = time;
  }

  return safeRequest({
    method: "POST",
    pathname: "/api/events/",
    body: {
      data: {
        type: "event",
        attributes,
      },
    },
  });
}

function catalogId(externalId) {
  return `$custom:::$default:::${externalId}`;
}

function productDescription(product) {
  const infos = product.ProductInfos || [];
  const text = infos
    .filter((info) => info.title || info.description)
    .map((info) => [info.title, info.description].filter(Boolean).join(": "))
    .join(". ");
  return text || product.name || " ";
}

async function ensureCatalogCategory(category) {
  if (!category || !category.id) {
    return null;
  }
  const externalId = `category-${category.id}`;
  const created = await request({
    method: "POST",
    pathname: "/api/catalog-categories",
    body: {
      data: {
        type: "catalog-category",
        attributes: {
          external_id: externalId,
          name: category.name || externalId,
          integration_type: "$custom",
          catalog_type: "$default",
        },
      },
    },
  }).catch((error) => {
    if (error.statusCode === 409) {
      return { conflict: true };
    }
    throw error;
  });
  return created ? catalogId(externalId) : null;
}

function catalogItemAttributes(product, { includeExternalId } = {}) {
  const {
    productPublicUrl,
    productImagePublicUrls,
  } = require("../utils/klaviyoPayloads");
  const images = productImagePublicUrls(product);
  const attributes = {
    title: product.name,
    description: productDescription(product),
    url: productPublicUrl(product.id),
    price: Number(product.price) || 0,
    published: Number(product.quantity) > 0,
    integration_type: "$custom",
    catalog_type: "$default",
    custom_metadata: {
      brand: product.brand || "",
      quantity: String(product.quantity ?? ""),
    },
  };
  if (includeExternalId) {
    attributes.external_id = String(product.id);
  }
  if (images.length) {
    attributes.image_full_url = images[0];
    attributes.image_thumbnail_url = images[0];
    attributes.images = images;
  }
  return attributes;
}

function catalogVariantAttributes(product, { includeExternalId } = {}) {
  const {
    productPublicUrl,
    productImagePublicUrls,
  } = require("../utils/klaviyoPayloads");
  const images = productImagePublicUrls(product);
  const attributes = {
    title: product.name,
    description: productDescription(product),
    sku: String(product.id),
    inventory_policy: 1,
    inventory_quantity: Number(product.quantity) || 0,
    price: Number(product.price) || 0,
    url: productPublicUrl(product.id),
    published: Number(product.quantity) > 0,
    integration_type: "$custom",
    catalog_type: "$default",
  };
  if (includeExternalId) {
    attributes.external_id = `${product.id}-default`;
  }
  if (images.length) {
    attributes.image_full_url = images[0];
    attributes.image_thumbnail_url = images[0];
    attributes.images = images;
  }
  return attributes;
}

async function upsertCatalogItem(product, categoryCompoundId) {
  const itemId = catalogId(String(product.id));
  const relationships = categoryCompoundId
    ? {
        categories: {
          data: [{ type: "catalog-category", id: categoryCompoundId }],
        },
      }
    : undefined;
  const created = await request({
    method: "POST",
    pathname: "/api/catalog-items",
    body: {
      data: {
        type: "catalog-item",
        attributes: catalogItemAttributes(product, { includeExternalId: true }),
        ...(relationships ? { relationships } : {}),
      },
    },
  }).catch((error) => {
    if (error.statusCode === 409) {
      return null;
    }
    throw error;
  });
  if (created) {
    return created;
  }
  return request({
    method: "PATCH",
    pathname: `/api/catalog-items/${itemId}`,
    body: {
      data: {
        type: "catalog-item",
        id: itemId,
        attributes: catalogItemAttributes(product),
        ...(relationships ? { relationships } : {}),
      },
    },
  });
}

async function upsertCatalogVariant(product) {
  const itemId = catalogId(String(product.id));
  const variantId = catalogId(`${product.id}-default`);
  const created = await request({
    method: "POST",
    pathname: "/api/catalog-variants",
    body: {
      data: {
        type: "catalog-variant",
        attributes: catalogVariantAttributes(product, {
          includeExternalId: true,
        }),
        relationships: {
          item: {
            data: {
              type: "catalog-item",
              id: itemId,
            },
          },
        },
      },
    },
  }).catch((error) => {
    if (error.statusCode === 409) {
      return null;
    }
    throw error;
  });
  if (created) {
    return created;
  }
  return request({
    method: "PATCH",
    pathname: `/api/catalog-variants/${variantId}`,
    body: {
      data: {
        type: "catalog-variant",
        id: variantId,
        attributes: catalogVariantAttributes(product),
      },
    },
  });
}

async function syncProductToCatalog(productId) {
  if (!isConfigured()) {
    return { skipped: true, reason: "no api key" };
  }
  try {
    const { Product, ProductInfo, Category } = require("../db/models");
    const product = await Product.findByPk(productId, {
      include: [{ model: ProductInfo }, { model: Category }],
    });
    if (!product) {
      return { skipped: true, reason: "product not found" };
    }
    const categoryId = await ensureCatalogCategory(product.Category);
    await upsertCatalogItem(product, categoryId);
    await upsertCatalogVariant(product);
    return { ok: true };
  } catch (error) {
    console.error(error.message);
    return { ok: false, error: error.message };
  }
}

async function deleteProductFromCatalog(productId) {
  if (!isConfigured() || !productId) {
    return { skipped: true };
  }
  const variantId = catalogId(`${productId}-default`);
  const itemId = catalogId(String(productId));
  await request({
    method: "DELETE",
    pathname: `/api/catalog-variants/${variantId}`,
  }).catch((error) => {
    if (error.statusCode !== 404) {
      console.error(error.message);
    }
  });
  await request({
    method: "DELETE",
    pathname: `/api/catalog-items/${itemId}`,
  }).catch((error) => {
    if (error.statusCode !== 404) {
      console.error(error.message);
    }
  });
  return { ok: true };
}

module.exports = {
  isConfigured,
  createEvent,
  upsertProfile,
  subscribeProfile,
  syncProductToCatalog,
  deleteProductFromCatalog,
};
