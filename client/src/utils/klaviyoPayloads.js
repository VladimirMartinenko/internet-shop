import CONSTANTS from "../constants";
import { catalogSku } from "./productSizes";

function siteOrigin() {
  if (typeof window === "undefined") {
    return "";
  }
  return window.location.origin;
}

function absoluteUrl(pathOrUrl) {
  if (!pathOrUrl) {
    return "";
  }
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }
  const origin = siteOrigin();
  return pathOrUrl.startsWith("/") ? `${origin}${pathOrUrl}` : `${origin}/${pathOrUrl}`;
}

export function productImageUrl(img) {
  if (!img) {
    return absoluteUrl(CONSTANTS.PRODUCT_IMAGE_PATH);
  }
  if (/^https?:\/\//i.test(img)) {
    return img;
  }

  const file = String(img)
    .replace(/^\/images\//, "")
    .replace(/^\//, "");
  const encoded = encodeURIComponent(file);
  const base = CONSTANTS.HTTP_SERVER_URL_images || "/images/";

  if (/^https?:\/\//i.test(base)) {
    return `${base.replace(/\/?$/, "/")}${encoded}`;
  }

  const imagesPath = base.startsWith("/") ? base : `/${base}`;
  return `${siteOrigin()}${imagesPath.replace(/\/?$/, "/")}${encoded}`;
}

export function productImageUrls(product) {
  if (!product) {
    return [productImageUrl()];
  }
  const urls = [product.img, product.img2]
    .filter(Boolean)
    .map((img) => productImageUrl(img));
  return urls.length ? urls : [productImageUrl()];
}

export function productPageUrl(id) {
  return `${siteOrigin()}/product/${id}`;
}

export function cartWithAddedItem(items, product) {
  const current = items || [];
  const key = product.cartKey || (product.size ? `${product.id}::${product.size}` : String(product.id));
  const existing = current.find((item) => {
    const itemKey = item.cartKey || (item.size ? `${item.id}::${item.size}` : String(item.id));
    return itemKey === key;
  });
  if (existing) {
    return current.map((item) => {
      const itemKey = item.cartKey || (item.size ? `${item.id}::${item.size}` : String(item.id));
      return itemKey === key ? { ...item, count: item.count + 1 } : item;
    });
  }
  return [...current, { ...product, cartKey: key, count: 1 }];
}

export function mapCartItem(item) {
  const quantity = Number(item.count || item.quantity || 1);
  const price = Number(item.price) || 0;
  const size = item.size || undefined;
  const sku = catalogSku(item.id, size);
  return {
    ProductID: sku,
    SKU: sku,
    value: price * quantity,
  };
}

export function productViewedProfileEntry(product) {
  return {
    product_id: String(product.id),
    timestamp: new Date().toISOString(),
  };
}

export function categoryViewedProfileEntry(category) {
  return {
    category_id: String(category.id),
    timestamp: new Date().toISOString(),
  };
}

export function viewedProductPayload(product) {
  return {
    ProductID: String(product.id),
    $event_id: `viewed-product:${product.id}:${Date.now()}`,
  };
}

export function viewedItemPayload(product) {
  return {
    ItemId: String(product.id),
  };
}

export function viewedCategoryPayload(category) {
  return {
    CategoryID: String(category.id),
    $event_id: `viewed-category:${category.id}:${Date.now()}`,
  };
}

export function addedToCartPayload(addedProduct, items) {
  const cartItems = items.map(mapCartItem);
  const added = mapCartItem(addedProduct);
  const value = cartItems.reduce((sum, item) => sum + item.value, 0);
  return {
    $value: value,
    AddedItemProductID: added.ProductID,
    AddedItemSKU: added.SKU,
    CheckoutURL: `${siteOrigin()}/basket`,
    Items: cartItems.map(({ ProductID, SKU }) => ({ ProductID, SKU })),
    $event_id: `added-to-cart:${added.ProductID}:${Date.now()}`,
  };
}

export function cartSignature(items) {
  return (items || [])
    .map((item) => {
      const key =
        item.cartKey ||
        (item.size ? `${item.id}::${item.size}` : String(item.id));
      return `${key}:${Number(item.count || item.quantity || 0)}`;
    })
    .sort()
    .join("|");
}

export function shoppingCartProfile(items) {
  return {
    timestamp: new Date().toISOString(),
    products: (items || []).map((item) => ({ sku: mapCartItem(item).SKU })),
  };
}

export function updatedCartPayload(items) {
  const cartItems = (items || []).map(mapCartItem);
  const value = cartItems.reduce((sum, item) => sum + item.value, 0);
  return {
    $value: value,
    CheckoutURL: `${siteOrigin()}/basket`,
    Items: cartItems.map(({ ProductID, SKU }) => ({ ProductID, SKU })),
    CartEmpty: cartItems.length === 0,
    $event_id: `updated-cart:${cartSignature(items)}:${Date.now()}`,
  };
}

export function startedCheckoutPayload(items, totalSumm) {
  const cartItems = (items || []).map(mapCartItem);
  return {
    $event_id: `${cartItems.map((item) => item.ProductID).join("-")}_${Date.now()}`,
    $value: Number(totalSumm) || cartItems.reduce((sum, item) => sum + item.value, 0),
    CheckoutURL: `${siteOrigin()}/basket`,
    Items: cartItems.map(({ ProductID, SKU }) => ({ ProductID, SKU })),
  };
}
