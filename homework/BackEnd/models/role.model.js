"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Role.belongsToMany(models.Permission, {
        through: "roles_permissions",
        foreignKey: "role_id",
        as: "permissions",
        onDelete: "CASCADE",
      });
      Role.belongsToMany(models.User, {
        through: "users_roles",
        foreignKey: "role_id",
        as: "users",
        onDelete: "CASCADE",
      });
    }
  }
  Role.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Role",
      tableName: "roles",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Role;
};
