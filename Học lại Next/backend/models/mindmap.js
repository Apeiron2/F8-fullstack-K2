"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Mindmap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mindmap.belongsTo(models.User, {
        as: "user",
        foreignKey: "user_id",
      });
    }
  }
  Mindmap.init(
    {
      id: {
        type: DataTypes.STRING(),
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER(),
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(),
        allowNull: false,
        defaultValue: "Mindmap no name",
      },
      description: {
        type: DataTypes.STRING(),
        allowNull: false,
        defaultValue: "No description",
      },
      data: {
        type: DataTypes.JSONB(),
      },
      private: {
        type: DataTypes.BOOLEAN(),
      },
    },
    {
      sequelize,
      modelName: "Mindmap",
      tableName: "mindmaps",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Mindmap;
};
