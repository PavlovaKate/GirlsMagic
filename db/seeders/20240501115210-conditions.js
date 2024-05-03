"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Conditions",
      [
        {
          name: "старая",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "новая",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "суперновая",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "одинразпользовался",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "оченьстарая",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "сильноновая",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "старейшина",
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
