'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Conditions',
      [
        {
          name: 'очень новая',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'новая',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'один раз пользовался',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'старая',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'очень старая',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'старейшина',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Conditions', null, {});
  },
};
