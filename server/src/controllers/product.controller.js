const createError = require("http-errors");
const { Product, ProductInfo } = require("../db/models");
const klaviyo = require("../services/klaviyo.service");
const { parseSizes, totalQuantity } = require("../utils/sizes");

function uploadedName(files, field) {
  return files && files[field] && files[field][0] && files[field][0].filename;
}

module.exports.createProduct = async (req, res, next) => {
  try {
    let {
      body: { name, price, quantity, categoryId, brand, info, sizes },
    } = req;
    const img = uploadedName(req.files, "img");
    const img2 = uploadedName(req.files, "img2");
    if (!img) {
      const err = createError(400, "product image is required");
      return next(err);
    }
    const parsedSizes = parseSizes(sizes);
    const stock = parsedSizes.length
      ? totalQuantity(parsedSizes)
      : quantity;
    const product = await Product.create({
      name,
      price,
      quantity: stock,
      brand,
      categoryId,
      img,
      img2: img2 || null,
      sizes: parsedSizes,
    });
    console.log(info);
    if (info) {
      info = JSON.parse(info);
      console.log(info);
      await Promise.all(
        info.map((i) =>
          ProductInfo.create({
            title: i.title,
            description: i.description,
            productId: product.id,
          })
        )
      );
    }
    klaviyo.syncProductToCatalog(product.id);
    res.send({ data: product });
  } catch (error) {
    next(error);
  }
};

module.exports.findProductByCategory = async (req, res, next) => {
  try {
    const {
      query: { limit, page, categoryId },
    } = req;
    let offset = page * limit - limit;
    let products;
    if (!categoryId) {
      products = await Product.findAll();
      if (!products) {
        const err = createError(404, "products not found");
        return next(err);
      }
    }
    if (categoryId) {
      products = await Product.findAll({ where: { categoryId } });
      console.log(products);
      if ((!products, products.length == 0)) {
        const err = createError(404, "products not found");
        return next(err);
      }
    }
    res.send({ data: products, limit, offset });
  } catch (error) {
    next(error);
  }
};
module.exports.findAllProduct = async (req, res, next) => {
  try {
    const {
      query: { limit, page },
    } = req;
    let offset = page * limit - limit;
    let products;
    products = await Product.findAll();
    if (!products) {
      const err = createError(404, "products not found");
      return next(err);
    }
    res.send({ data: products, limit, offset });
  } catch (error) {
    next(error);
  }
};

module.exports.findProductbyId = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const product = await Product.findOne({
      where: { id },
      include: [{ model: ProductInfo }],
    });
    if (!product) {
      const err = createError(404, "product not found");
      return next(err);
    }
    res.send({ data: product });
  } catch (error) {
    next(error);
  }
};
module.exports.updateProduct = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const img = uploadedName(req.files, "img");
    const img2 = uploadedName(req.files, "img2");
    const parsedSizes = parseSizes(body.sizes);
    const payload = {
      name: body.name,
      price: body.price,
      quantity: parsedSizes.length
        ? totalQuantity(parsedSizes)
        : body.quantity,
      categoryId: body.categoryId,
      brand: body.brand,
      sizes: parsedSizes,
    };
    if (img) {
      payload.img = img;
    }
    if (img2) {
      payload.img2 = img2;
    }
    const [rowsUpdatet, [updateProduct]] = await Product.update(payload, {
      where: { id },
      returning: true,
    });
    if (rowsUpdatet != 1) {
      const err = createError(404, "cant update product");
      return next(err);
    }
    if (body.info) {
      info = JSON.parse(body.info);
      info.forEach((i) =>
        ProductInfo.update(i, {
          where: { id: i.id },
          returning: true,
        })
      );
    }
    klaviyo.syncProductToCatalog(id);
    res.send({ data: updateProduct });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteProduct = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const deleteRows = await Product.destroy({ where: { id } });
    if (deleteRows != 1) {
      const err = createError(404, "cant delete product");
      return next(err);
    }
    klaviyo.deleteProductFromCatalog(id);
    res.send({ data: { id } });
  } catch (error) {
    next(error);
  }
};
