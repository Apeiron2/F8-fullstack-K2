"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Black_list_token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Black_list_token.init(
    {
      id: {
        type: DataTypes.INTEGER(),
        autoIncrement: true,
        primaryKey: true,
      },
      token: {
        type: DataTypes.STRING(),
      },
      expired: {
        type: DataTypes.DATE(),
      },
    },
    {
      sequelize,
      modelName: "Black_list_token",
      tableName: "black_list_tokens",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Black_list_token;
};
