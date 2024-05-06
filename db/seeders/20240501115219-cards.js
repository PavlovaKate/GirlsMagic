'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Cards',
      [
        {
          name: 'Мать драконов',
          discription: 'Сила заботы и любви к ближнему',
          price: '30',
          image: 'img/princessAlena.jpg',
          conditionId: 2,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Маг 9000 уровня',
          discription:
            'Мальчик, который выжил. Умеет разговаривать со змеями, превосходно в одиночку борется c врагом',
          price: '100',
          image: 'img/andrey.jpg',
          conditionId: 6,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Дима',
          discription: 'Сила в знании',
          price: '15',
          image: 'img/dima.jpg',
          conditionId: 5,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Илья Муромец',
          discription: 'Сильный мудрый богатырь, настоящий лидер',
          price: '30',
          image: 'img/iliya.jpg',
          conditionId: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Иван Премудрый ',
          discription: 'Сила в мудрости',
          price: '80',
          image: 'img/ivanBig.jpg',
          conditionId: 6,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Иван Царевич',
          discription: 'Красивый, ловкий, сообразительный',
          price: '30',
          image: 'img/maloy.jpg',
          conditionId: 3,
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Цыган',
          discription: 'Владеет черной магией, умеет воровать сердца',
          price: '15',
          image: 'img/mikki.jpg',
          conditionId: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Эльфийская королева',
          discription:
            'Держит подданых в ежевых руковицах, обладает головокружительным очарованием',
          price: '45',
          image: 'img/nastya.jpg',
          conditionId: 2,
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Очарованные странники',
          discription: 'Искатели, созидатели и мыслители. Знают все сорта чая',
          price: '50',
          image: 'img/yura&vova.jpg',
          conditionId: 3,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Миньон Стюард',
          discription:
            'Предан хозяину, усердно работает над поставленной задачей',
          price: '15',
          image: 'img/nikita.jpg',
          conditionId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Хагрид',
          discription: 'Добрый волшебник, любит домашних животных',
          price: '15',
          image: 'img/paga.jpg',
          conditionId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Двое из ларца',
          discription: 'Бесприкословно выполняют желания',
          price: '30',
          image: 'img/dvoeizlarca.jpg',
          conditionId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
