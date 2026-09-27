function parseSizes(raw) {
  if (!raw) {
    return [];
  }
  let value = raw;
  if (typeof raw === "string") {
    try {
      value = JSON.parse(raw);
    } catch (error) {
      return [];
    }
  }
  if (!Array.isArray(value)) {
    return [];
  }
  return value
    .map((row) => ({
      name: String(row.name || row.size || "").trim(),
      quantity: Number(row.quantity || 0),
    }))
    .filter((row) => row.name);
}

function totalQuantity(sizes, fallback) {
  if (sizes.length) {
    return sizes.reduce((sum, row) => sum + Number(row.quantity || 0), 0);
  }
  return Number(fallback || 0);
}

function hasSizes(product) {
  return parseSizes(product && product.sizes).length > 0;
}

function catalogSku(productId, size) {
  if (productId == null || productId === "") {
    return "";
  }
  const sizeName = size != null ? String(size).trim() : "";
  return sizeName ? `${productId}-${sizeName}` : String(productId);
}

module.exports = {
  parseSizes,
  totalQuantity,
  hasSizes,
  catalogSku,
};
