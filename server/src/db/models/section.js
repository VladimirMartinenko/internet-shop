"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category }) {
      // define association here
      Section.hasMany(Category, { foreignKey: "sectionId" });
    }
  }
  Section.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING(128),
        validate: {
          notEmpty: true,
          notNull: true,
          len: [1, 128],
        },
      },
    },
    {
      sequelize,
      modelName: "Section",
      underscored: true,
      tableName: "sections",
    }
  );
  return Section;
};
