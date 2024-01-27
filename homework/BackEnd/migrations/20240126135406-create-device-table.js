"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("devices", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(),
      },
      user_id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
      },
      last_activity: {
        type: Sequelize.DATE(),
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
    await queryInterface.dropTable("devices");
  },
};
