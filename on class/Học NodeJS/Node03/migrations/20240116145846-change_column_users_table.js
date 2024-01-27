"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn("users", "name", {
      type: Sequelize.STRING(50),
      allowNull: true,
    });
    await queryInterface.renameColumn("users", "name", "full_name");
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.renameColumn("users", "full_name", "name");
    await queryInterface.changeColumn("users", "name", {
      type: Sequelize.STRING(50),
      allowNull: false,
    });
  },
};
