"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John Doe",
          email: "JD@lala.ru",
          password: "123",
          city: "Moscow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mary Jane",
          email: "MJ@lala.ru",
          password: "123",
          city: "St.P",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
