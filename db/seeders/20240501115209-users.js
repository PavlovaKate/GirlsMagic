'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John Doe',
          email: 'JD@lala.ru',
          password: '123',
          city: 'Санкт-Петербург',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mary Jane',
          email: 'MJ@lala.ru',
          password: '123',
          city: 'Екатеринбург',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mary',
          email: 'MJ@la.ru',
          password: '123',
          city: 'Самара',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mary',
          email: 'MJпр@la.ru',
          password: '123',
          city: 'Калуга',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mary',
          email: 'M11@la.ru',
          password: '123',
          city: 'Новосибирск',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mary',
          email: 'M11@la.ru',
          password: '123',
          city: 'Новосибирск',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mary',
          email: 'M113333@la.ru',
          password: '123',
          city: 'Ухта',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
