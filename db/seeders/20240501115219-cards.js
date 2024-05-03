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
                    conditionId: 1,
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Маг 100 уровня.Мальчик, который выжил',
                    discription: 'Умеет разговаривать со змеями, превосходно в одиночку борется c врагом',
                    price: '29',
                    image: 'img/andrey.jpg',
                    conditionId: 4,
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Дима',
                    discription: 'Сила в знании',
                    price: '15',
                    image: 'img/dima.jpg',
                    conditionId: 4,
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Илья Муромец',
                    discription: 'Сильный мудрый богатырь, настоящий лидер',
                    price: '30',
                    image: 'img/iliya.jpg',
                    conditionId: 4,
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Иван Премудрый ',
                    discription: 'Сила в мудрости',
                    price: '30',
                    image: 'img/ivanBig.jpg',
                    conditionId: 4,
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Иван Царевич',
                    discription: 'Красивый,ловкий,сообразительный',
                    price: '30',
                    image: 'img/maloy.jpg',
                    conditionId: 4,
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Цыган',
                    discription: 'Владеет черной магией, умеет воровать сердца',
                    price: '15',
                    image: 'img/mikki.jpg',
                    conditionId: 4,
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Эльфийская королева',
                    discription:'Держит подданых в ежевых руковицах, обладает головокружительным очарованием',
                    price: '30',
                    image: 'img/nastya.jpg',
                    conditionId: 4,
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Очарованные странники',
                    discription: 'Искатели, созидатели и мыслители.Знают все сорта чая',
                    price: '25',
                    image: 'img/yura&vova.jpg',
                    conditionId: 4,
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Миньон Стюард',
                    discription:
                        'Предан хозяину, усердно работает над поставленной задачей',
                    price: '15',
                    image: 'img/nikita.jpg',
                    conditionId: 4,
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Хагрид',
                    discription: 'Добрый волшебник, любит домашних животных',
                    price: '15',
                    image: 'img/paga.jpg',
                    conditionId: 4,
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Двое из ларца',
                    discription: 'Бесприкословно выполняют желания',
                    price: '15',
                    image: 'img/dvoeizlarca.jpg',
                    conditionId: 4,
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Cards', null, {});
    }
};
