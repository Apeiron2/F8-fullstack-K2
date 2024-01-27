"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users_permissions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(),
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER(),
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      permission_id: {
        allowNull: false,
        type: Sequelize.INTEGER(),
        references: {
          model: "permissions",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE(),
        defaultValue: Date.now(),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE(),
        defaultValue: Date.now(),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users_permissions");
  },
};
