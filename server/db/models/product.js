'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ProductToOrders,ProductInfo,Category,Order}) {
      // define association here
      // Product.hasMany(ProductToOrders,{foreignKey:'productId'});
      Product.hasMany(ProductInfo,{foreignKey:'productId'});
      Product.belongsTo(Category,{foreignKey:'categoryId'});
      Product.belongsToMany(Order, {
        through: 'products_to_rders',
        foreignKey: 'productId'
      });

    }
  }
  Product.init({
    name:{
      allowNull: false,
      type: DataTypes.STRING(128),
      validate: {
        isAlpha: true,
        notEmpty: true,
        notNull: true,
        len: [1, 128],
      },
    },
    price:{
      allowNull: false,
      type: DataTypes.NUMBER,
      validate: {
        notEmpty: true,
        notNull: true,
      },
    },
    quantity: {
      allowNull: false,
      type: DataTypes.NUMBER,
      validate: {
        notEmpty: true,
        notNull: true,
      },
    },
    // categoryId: DataTypes.INTEGER,
    brand:{
      allowNull: false,
      type: DataTypes.STRING(128),
      validate: {
        isAlpha: true,
        notEmpty: true,
        notNull: true,
        len: [1, 128],
      },
    },
    img:{
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        notNull: true,
      },
    },
  }, {
    sequelize,
    modelName: 'Product',
    underscored: true,
    tableName: 'products',
  });
  return Product;
};