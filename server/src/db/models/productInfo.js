"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      // define association here
      ProductInfo.belongsTo(Product, { foreignKey: "productId" });
    }
  }
  ProductInfo.init(
    {
      // productId: DataTypes.INTEGER,
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
    },
    {
      sequelize,
      modelName: "ProductInfo",
      underscored: true,
      tableName: "product_info",
    }
  );
  return ProductInfo;
};
