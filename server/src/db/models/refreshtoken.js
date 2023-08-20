"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RefreshToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      RefreshToken.belongsTo(User, { foreignKey: "userId" });
    }
  }
  RefreshToken.init(
    {
      token: { type: DataTypes.TEXT, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "RefreshToken",
      underscored: true,
      tableName: "refresh_tokens",
    }
  );
  return RefreshToken;
};
