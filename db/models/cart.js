'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, OrderLine }) {
      this.hasMany(OrderLine, { foreignKey: 'cartId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Cart.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
      },
      status: {
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Cart',
    }
  );
  return Cart;
};
