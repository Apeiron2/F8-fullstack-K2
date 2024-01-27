"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Device.belongsToMany(models.User, {
      //   foreignKey: "user_id",
      // });
    }
  }
  Device.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: DataTypes.INTEGER,
      device: DataTypes.STRING(100),
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Device",
      tableName: "devices",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Device;
};
