"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: "userId" });
    }
  }
  Card.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      condition: {
        type: DataTypes.TEXT,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "Cascade",
        onUpdate: "Cascade",
      },
    },
    {
      sequelize,
      modelName: "Card",
    }
  );
  return Card;
};
