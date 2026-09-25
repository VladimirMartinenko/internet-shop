export function parseSizes(product) {
  const raw = Array.isArray(product)
    ? product
    : product && product.sizes
  if (!raw) {
    return []
  }
  let value = raw
  if (typeof raw === 'string') {
    try {
      value = JSON.parse(raw)
    } catch (error) {
      return []
    }
  }
  if (!Array.isArray(value)) {
    return []
  }
  return value
    .map(row => ({
      name: String(row.name || row.size || '').trim(),
      quantity: Number(row.quantity || 0)
    }))
    .filter(row => row.name)
}

export function productHasSizes(product) {
  return parseSizes(product).length > 0
}

export function availableStock(product, size) {
  const sizes = parseSizes(product)
  if (sizes.length) {
    const row = sizes.find(row => row.name === size)
    return row ? Number(row.quantity) : 0
  }
  return Number(product && product.quantity) || 0
}

export function cartKey(product, size) {
  const id = product && product.id
  if (!id) {
    return ''
  }
  return size ? `${id}::${size}` : String(id)
}

export function lineCartKey(item) {
  if (item && item.cartKey) {
    return item.cartKey
  }
  return cartKey(item, item && item.size)
}

export const CLOTHING_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
export const SHOE_SIZES = ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
