"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Conditions",
      [
        {
          name: "ideal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "excellent",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "very good",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "good",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "fair",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "poor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "bad",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Conditions", null, {});
  },
};
