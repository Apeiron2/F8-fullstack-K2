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
    for (let index = 0; index < 10; index++) {
      const salt = bcrypt.genSaltSync(20);
      users.push({
        full_name: faker.person.fullName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync("123456", salt),
        status: faker.datatype.boolean(),
        created_at: new Date(),
        updated_at: new Date(),
        phone: faker.phone.number(),
        address: faker.location.streetAddress(),
      });
    }

    await queryInterface.bulkInsert("users", users, {});
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
