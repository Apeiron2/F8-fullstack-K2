"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("categories", {
      id: {
        type: Sequelize.INTEGER(),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(),
      },
      status: { type: Sequelize.BOOLEAN(), defaultValue: false },
      created_at: { type: Sequelize.DATE() },
      updated_at: { type: Sequelize.DATE() },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("categories");
  },
};
