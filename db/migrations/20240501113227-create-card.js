"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cards', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            allowNull: false,
            type: Sequelize.TEXT
        },
        discription: {
            allowNull: false,
            type: Sequelize.TEXT
        },
        price: {
            allowNull: false,
            type: Sequelize.TEXT
        },
        image: {
            type: Sequelize.TEXT
        },
        conditionId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Conditions',
                key: 'id'
            },
            onDelete: 'Cascade',
            onUpdate: 'Cascade'
        },
        userId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            },
            onDelete: 'Cascade',
            onUpdate: 'Cascade'
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Cards");
  },
};
