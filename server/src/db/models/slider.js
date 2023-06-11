"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Slider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      // define association here
      Slider.belongsTo(Product, { foreignKey: "productId" });
    }
  }
  Slider.init(
    {
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Slider",
      underscored: true,
      tableName: "sliders",
    }
  );
  return Slider;
};
