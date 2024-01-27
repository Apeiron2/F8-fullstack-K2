"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const permissions = [
      { value: "Xem" },
      { value: "Thêm" },
      { value: "Sửa" },
      { value: "Xóa" },
    ];
    await queryInterface.bulkInsert("permissions", permissions, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("permissions", null, {});
  },
};
