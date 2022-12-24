'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init({
    allowNull: false,
    type: DataTypes.STRING(128),
    validate: {
      isAlpha: true,
      notEmpty: true,
      notNull: true,
      len: [1, 128],
    },
  }, {
    sequelize,
    modelName: 'Category',
    underscored: true,
    tableName: 'categorys',
  });
  return Category;
};