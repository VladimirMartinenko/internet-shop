"use strict";
const { Model } = require("sequelize");
const { ADMIN, USER } = require("../../constants");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, RefreshToken }) {
      // define association here
      User.hasMany(Order, { foreignkey: "userId" });
      User.hasMany(RefreshToken, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      firstName: {
        field: "first_name",
        allowNull: false,
        type: DataTypes.STRING(128),
        validate: {
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
      phone: {
        allowNull: false,
        type: DataTypes.STRING(256),
        validate: {
          notEmpty: true,
          isAlphanumeric: true,
          notNull: true,
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(256),
        validate: {
          notEmpty: true,
          isAlphanumeric: true,
          notNull: true,
        },
      },
      role: {
        allowNull: false,
        type: DataTypes.ENUM("user", "admin"),
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      underscored: true,
      tableName: "users",
    }
  );
  return User;
};
