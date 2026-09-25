import CONSTANTS from "../constants";

function siteOrigin() {
  if (typeof window === "undefined") {
    return "";
  }
  return window.location.origin;
}

export function productImageUrl(img) {
  if (!img) {
    return `${siteOrigin()}${CONSTANTS.PRODUCT_IMAGE_PATH}`;
  }
  return `${CONSTANTS.HTTP_SERVER_URL_images}${img}`;
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
  const existing = current.find((item) => item.id === product.id);
  if (existing) {
    return current.map((item) =>
      item.id === product.id ? { ...item, count: item.count + 1 } : item
    );
  }
  return [...current, { ...product, count: 1 }];
}

export function mapCartItem(item) {
  const quantity = Number(item.count || item.quantity || 1);
  const price = Number(item.price) || 0;
  const images = productImageUrls(item);
  return {
    ProductID: String(item.id),
    SKU: String(item.id),
    ProductName: item.name,
    Quantity: quantity,
    ItemPrice: price,
    RowTotal: price * quantity,
    ProductURL: productPageUrl(item.id),
    ImageURL: images[0],
    ImageURL2: images[1],
    Images: images,
    ProductCategories: item.brand ? [item.brand] : [],
  };
}

export function viewedProductPayload(product) {
  const images = productImageUrls(product);
  return {
    ProductName: product.name,
    ProductID: String(product.id),
    SKU: String(product.id),
    Categories: product.brand ? [product.brand] : [],
    ImageURL: images[0],
    ImageURL2: images[1],
    Images: images,
    URL: productPageUrl(product.id),
    Brand: product.brand,
    Price: Number(product.price) || 0,
    $event_id: `viewed-product:${product.id}:${Date.now()}`,
    $value: Number(product.price) || 0,
  };
}

export function viewedItemPayload(product) {
  const images = productImageUrls(product);
  return {
    Title: product.name,
    ItemId: String(product.id),
    Categories: product.brand ? [product.brand] : [],
    ImageUrl: images[0],
    ImageUrl2: images[1],
    Images: images,
    Url: productPageUrl(product.id),
    Metadata: {
      Brand: product.brand,
      Price: Number(product.price) || 0,
    },
  };
}

export function viewedCategoryPayload(category) {
  return {
    CategoryName: category.name,
    CategoryID: String(category.id),
    URL: `${siteOrigin()}/shop/${category.id}`,
    $event_id: `viewed-category:${category.id}:${Date.now()}`,
  };
}

export function addedToCartPayload(addedProduct, items) {
  const cartItems = items.map(mapCartItem);
  const added = mapCartItem(addedProduct);
  const value = cartItems.reduce((sum, item) => sum + item.RowTotal, 0);
  return {
    $value: value,
    AddedItemProductName: added.ProductName,
    AddedItemProductID: added.ProductID,
    AddedItemSKU: added.SKU,
    AddedItemCategories: added.ProductCategories,
    AddedItemImageURL: added.ImageURL,
    AddedItemImageURL2: added.ImageURL2,
    AddedItemImages: added.Images,
    AddedItemURL: added.ProductURL,
    AddedItemPrice: added.ItemPrice,
    AddedItemQuantity: added.Quantity,
    ItemNames: cartItems.map((item) => item.ProductName),
    CheckoutURL: `${siteOrigin()}/basket`,
    Items: cartItems,
    $event_id: `added-to-cart:${added.ProductID}:${Date.now()}`,
  };
}

export function startedCheckoutPayload(items, totalSumm) {
  const cartItems = (items || []).map(mapCartItem);
  return {
    $event_id: `${cartItems.map((item) => item.ProductID).join("-")}_${Date.now()}`,
    $value: Number(totalSumm) || cartItems.reduce((sum, item) => sum + item.RowTotal, 0),
    ItemNames: cartItems.map((item) => item.ProductName),
    CheckoutURL: `${siteOrigin()}/basket`,
    Categories: [
      ...new Set(cartItems.flatMap((item) => item.ProductCategories)),
    ],
    Items: cartItems,
  };
}
