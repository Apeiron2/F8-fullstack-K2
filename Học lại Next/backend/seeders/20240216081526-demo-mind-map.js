"use strict";
const crypto = require("crypto");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const initialState = {
      nodes: [
        {
          id: "1",
          data: { label: "Hello" },
          position: { x: 0, y: 0 },
          type: "custom",
        },
        {
          id: "2",
          data: { label: "Hello 2 " },
          position: { x: 100, y: 100 },
          type: "custom",
        },
        {
          id: "3",
          data: { label: "Hello 3" },
          position: { x: 0, y: 200 },
          type: "custom",
        },
        {
          id: "4",
          data: { label: "New Node" },
          position: { x: 200, y: 200 },
          type: "custom",
        },
      ],
      edges: [{ id: "1-2", source: "1", target: "2", type: "custom" }],
    };
    const id = crypto.randomBytes(16).toString("hex");
    await queryInterface.bulkInsert(
      "mindmaps",
      [
        {
          id,
          user_id: 1,
          data: JSON.stringify(initialState),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("mindmaps", null, {});
  },
};
