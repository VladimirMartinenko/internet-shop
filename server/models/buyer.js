'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buyer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Order}) {
      // define association here
      Buyer.hasMany(Order,{foreignkey:'buyerId'});
    }
  }
  Buyer.init({
    firstName: {
      field: "first_name",
      allowNull: false,
      type: DataTypes.STRING(128),
      validate: {
        isAlpha: true,
        notEmpty: true,
        notNull: true,
        len: [1, 128],
      },
    },
    lastName: {
      field: "last_name",
      allowNull: false,
      type: DataTypes.STRING(128),
      validate: {
        isAlpha: true,
        notEmpty: true,
        notNull: true,
        len: [1, 128],
      },
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
      validate: {
        isEmail: true,
        notNull: true,
        notEmpty: true,
      },
    },
    phone:{
      allowNull: false,
      type: DataTypes.STRING(256),
      validate: {
        notEmpty: true,
        isAlphanumeric: true,
        notNull: true,
      },
    },
  }, {
    sequelize,
    modelName: 'Buyer',
    underscored: true,
    tableName: 'buyers',
  });
  return Buyer;
};