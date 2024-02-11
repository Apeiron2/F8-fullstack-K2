"use strict";
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const users = [];
    for (let index = 0; index < 20; index++) {
      const salt = bcrypt.genSaltSync(10);
      const user = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync("123456", salt),
        status: faker.datatype.boolean(),
      };
      users.push(user);
    }
    await queryInterface.bulkInsert("users", users);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
