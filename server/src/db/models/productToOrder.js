"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductToOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, Product }) {
      // define association here
      ProductToOrder.belongsTo(Order, { foreignKey: "orderId" });
      ProductToOrder.belongsTo(Product, { foreignKey: "productId" });
    }
  }
  ProductToOrder.init(
    {
      // orderId: DataTypes.INTEGER,
      // productId: DataTypes.INTEGER,
      quantity: {
        // allowNull: false,
        type: DataTypes.INTEGER,
        // validate: {
        //   notEmpty: true,
        //   notNull: true,
        // },
      },
    },
    {
      sequelize,
      modelName: "ProductToOrder",
      underscored: true,
      tableName: "products_to_rders",
    }
  );
  return ProductToOrder;
};
