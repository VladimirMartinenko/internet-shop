const createError = require("http-errors");
const { Product , ProductInfo } = require("../db/models");

module.exports.createProduct = async (req, res, next) => {
  try {
    let {file: {filename},body:{name,price,quantity,categoryId,brand,info} }=req;
    console.log(req);
    const product = await Product.create({name,price,quantity,brand,categoryId,img:filename});
    console.log(info);
    if (info) {
      info = JSON.parse(info);
      console.log(info);
      info.forEach(i =>
        ProductInfo.create({
          title: i.title,
          description: i.description,
          productId: product.id
        }))
    }
    res.send({ data: product });
  } catch (error) {
    next(error);
  }
};

module.exports.findProductByCategory = async (req, res, next) => {
  try {
    const {
      query: { limit, page,categoryId },
    } = req;
    
   console.log(req.query);
    
    // page= 0;
    // // offset= 0;
    // console.log(page);

    // limit : limit ? limit:9;
    // limit = Number(limit); 
    let offset = page * limit - limit
    // console.log(categoryId,limit);
    let products;
    // products = await Product.findAll({limit,offset});
    if (!categoryId) {
      // products = await Product.findAll({limit,offset});
      products = await Product.findAll();
      if (!products) {
        const err = createError(404, "товари не знайдені");
        return next(err);
      }
      }
    if (categoryId) {
      // console.log(categoryId,limit,offset);
      // products = await Product.findAll({where:{categoryId},limit,offset});
      products = await Product.findAll({where:{categoryId}});
    console.log(products);
    if (!products,products.length == 0) {
      const err = createError(404, "товари не знайдені");
      return next(err);
    };
    }
    
    // if (!products) {
    //   const err = createError(404, "cant find product");
    //   return next(err);
    // }
    res.send({ data:products, limit, offset });
  } catch (error) {
    next(error);
  }
};
module.exports.findAllProduct = async (req, res, next) => {
  try {
    const {
      query: { limit, page },
    } = req;
    
   console.log(req.query);
    
    // page= 0;
    // // offset= 0;
    // console.log(page);

    // limit : limit ? limit:9;
    // limit = Number(limit); 
    let offset = page * limit - limit
    // console.log(categoryId,limit);
    let products;
    // products = await Product.findAll({limit,offset});
   
      // products = await Product.findAll({limit,offset});
      products = await Product.findAll();
      if (!products) {
        const err = createError(404, "товари не знайдені");
        return next(err);
      }
      
    
    
    // if (!products) {
    //   const err = createError(404, "cant find product");
    //   return next(err);
    // }
    res.send({ data:products, limit, offset });
  } catch (error) {
    next(error);
  }
};

module.exports.findProductbyId = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const product = await Product.findOne({where:{id},
    include:[{model: ProductInfo}]});
    if (!product) {
      const err = createError(404, "товар не знайден");
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
     body
    } = req;
    // console.log(body);

// let updateProducts = new Object();
// for (let key in body){
//   // if(body[key]!==body[info]){
//     updateProducts[key] =body[key]
//   // }
 
// }
// console.log(updateProducts);

    const [rowsUpdatet, [updateProduct]] = await Product.update(body,{
      where: { id },
      returning: true,
    });
    if (rowsUpdatet != 1) {
      const err = createError(404, "cant update product");
      return next(err);
    }
    if (body.info) {
      info = JSON.parse(body.info);
      console.log(info);
      info.forEach(i=>
        ProductInfo.update(i,{
          where:{id:i.id},
          returning:true
        }))
    }
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

    res.send({ data: { id } });
  } catch (error) {
    next(error);
  }
};