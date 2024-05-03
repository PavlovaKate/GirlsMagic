"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ User, Condition }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(Condition, { foreignKey: "conditionId" });
    }
  }
  Card.init(
      {
          name: {
              allowNull: false,
              type: DataTypes.TEXT
          },
          discription: {
              allowNull: false,
              type: DataTypes.TEXT
          },
          price: {
              allowNull: false,
              type: DataTypes.TEXT
          },
          image: {
              type: DataTypes.TEXT
          },
          conditionId: {
              type: DataTypes.INTEGER,
              references: {
                  model: 'Users',
                  key: 'id'
              },
              onDelete: 'Cascade',
              onUpdate: 'Cascade'
          },
          userId: {
              allowNull: false,
              type: DataTypes.INTEGER,
              references: {
                  model: 'Users',
                  key: 'id'
              },
              onDelete: 'Cascade',
              onUpdate: 'Cascade'
          }
      },
      {
          sequelize,
          modelName: 'Card'
      }
  );
  return Card;
};
