"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Permission.belongsToMany(models.Role, {
        through: "roles_permissions",
        foreignKey: "permission_id",
        as: "roles",
        onDelete: "CASCADE",
      });
      Permission.belongsToMany(models.User, {
        through: "users_permissions",
        foreignKey: "permission_id",
        as: "users",
        onDelete: "CASCADE",
      });
    }
  }
  Permission.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      value: DataTypes.STRING(100),
    },
    {
      sequelize,
      modelName: "Permission",
      tableName: "permissions",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Permission;
};
