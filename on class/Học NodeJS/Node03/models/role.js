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
      // User.hasOne(models.Phone, {
      //   foreignKey: "user_id",
      //   as: "phone",
      // });
      // User.hasMany(models.Post, {
      //   foreignKey: "user_id",
      //   as: "posts",
      // });
      // User.belongsToMany(models.Course, {
      //   foreignKey: "user_id",
      //   through: "users_courses",
      // });
      Role.belongsToMany(models.Permission, {
        foreignKey: "role_id",
        through: "roles_permissions",
      });
      Role.belongsToMany(models.User, {
        foreignKey: "role_id",
        through: "users_roles",
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
      name: DataTypes.STRING(30),
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
