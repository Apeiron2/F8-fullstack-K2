"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("permissions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(),
      },
      value: {
        allowNull: false,
        type: Sequelize.STRING(),
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
    await queryInterface.dropTable("permissions");
  },
};