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

function mapLine(line) {
  const product = line.Product || {};
  const quantity = Number(line.quantity || 1);
  const price = Number(product.price) || 0;
  const categoryName = product.Category && product.Category.name;
  return {
    ProductID: String(product.id),
    SKU: String(product.id),
    ProductName: product.name,
    Quantity: quantity,
    ItemPrice: price,
    RowTotal: price * quantity,
    ProductURL: `${storeBaseUrl()}/product/${product.id}`,
    ImageURL: product.img ? `${storeImagesUrl()}${product.img}` : undefined,
    Categories: categoryName ? [categoryName] : product.brand ? [product.brand] : [],
    Brand: product.brand,
  };
}

function placedOrderProperties(order, lines) {
  const items = lines.map(mapLine);
  const categories = [...new Set(items.flatMap((item) => item.Categories))];
  const brands = [...new Set(items.map((item) => item.Brand).filter(Boolean))];
  return {
    OrderId: String(order.id),
    Categories: categories,
    ItemNames: items.map((item) => item.ProductName),
    Brands: brands,
    Items: items,
  };
}

function orderedProductProperties(order, line) {
  const item = mapLine(line);
  return {
    OrderId: String(order.id),
    ProductID: item.ProductID,
    SKU: item.SKU,
    ProductName: item.ProductName,
    Quantity: item.Quantity,
    ProductURL: item.ProductURL,
    ImageURL: item.ImageURL,
    Categories: item.Categories,
    ProductBrand: item.Brand,
  };
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

module.exports = {
  mapLine,
  placedOrderProperties,
  orderedProductProperties,
  productPublicUrl,
  productImagePublicUrl,
};
