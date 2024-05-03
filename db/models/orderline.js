'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderLine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Card, Cart }) {
      this.belongsTo(Card, { foreignKey: 'cardId' });
      this.belongsTo(Cart, { foreignKey: 'cartId' });
    }
  }
  OrderLine.init(
    {
      cardId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Cards',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
      cartId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Carts',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
    },
    {
      sequelize,
      modelName: 'OrderLine',
    }
  );
  return OrderLine;
};
