"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shorten extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Shorten.belongsTo(models.User, {
        foreignKey: "user_id",
      });
    }
  }
  Shorten.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: DataTypes.NUMBER(),
      hash: DataTypes.STRING(20),
      original: DataTypes.STRING(),
      password: DataTypes.STRING(),
      clicked: DataTypes.NUMBER(),
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Shorten",
      tableName: "shortens",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Shorten;
};
