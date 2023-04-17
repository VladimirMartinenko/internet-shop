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
    static associate({Product,Section}) {
      // define association here
      Category.hasMany(Product,{foreignKey:'categoryId'});
      Category.belongsTo(Section,{foreignKey:'sectionId'});
    }
  }
  Category.init({
   name:{ allowNull: false,
    type: DataTypes.STRING(128),
    validate: {
      notEmpty: true,
      notNull: true,
      len: [1, 128],
    },},
    sectionId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Category',
    underscored: true,
    tableName: 'categorys',
  });
  return Category;
};