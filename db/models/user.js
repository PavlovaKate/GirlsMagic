'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Card, Cart }) {
      this.hasMany(Card, { foreignKey: 'userId' });
      this.hasOne(Cart, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      city: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
