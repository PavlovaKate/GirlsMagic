"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Condition extends Model {
    static associate({ Card }) {
      this.hasMany(Card, { foreignKey: "conditionId" });
    }
  }
  Condition.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Condition",
    }
  );
  return Condition;
};
