const { catalogSku } = require("./sizes");

function storeBaseUrl() {
  return (
    process.env.STORE_BASE_URL ||
    (process.env.NODE_ENV === "production"
      ? "https://829470-vds-teslabest87.gmhost.pp.ua"
      : "http://localhost:3000")
  ).replace(/\/$/, "");
}

function storeImagesUrl() {
  const fromEnv = process.env.STORE_IMAGES_URL;
  if (fromEnv) {
    return fromEnv.endsWith("/") ? fromEnv : `${fromEnv}/`;
  }
  if (process.env.NODE_ENV === "production") {
    return `${storeBaseUrl()}/images/`;
  }
  return "http://localhost:5000/images/";
}

function productPublicUrl(id) {
  return `${storeBaseUrl()}/product/${id}`;
}

function productImagePublicUrl(img) {
  if (!img) {
    return undefined;
  }
  return `${storeImagesUrl()}${encodeURIComponent(img)}`;
}

function productImagePublicUrls(product) {
  if (!product) {
    return [];
  }
  return [product.img, product.img2]
    .filter(Boolean)
    .map((img) => productImagePublicUrl(img))
    .filter(Boolean);
}

function mapLine(line) {
  const product = line.Product || {};
  const quantity = Number(line.quantity || 1);
  const price = Number(product.price) || 0;
  const size = line.size || undefined;
  const sku = catalogSku(product.id, size);
  return {
    ProductID: sku,
    SKU: sku,
    Size: size,
    Quantity: quantity,
    RowTotal: price * quantity,
  };
}

function placedOrderProperties(order, lines) {
  const items = lines.map(mapLine);
  return {
    OrderId: String(order.id),
    Items: items.map(({ ProductID, SKU }) => ({
      ProductID,
      SKU,
    })),
  };
}

function orderedProductProperties(order, line) {
  const item = mapLine(line);
  return {
    OrderId: String(order.id),
    ProductID: item.ProductID,
    SKU: item.SKU,
  };
}

module.exports = {
  mapLine,
  placedOrderProperties,
  orderedProductProperties,
  productPublicUrl,
  productImagePublicUrl,
  productImagePublicUrls,
};
