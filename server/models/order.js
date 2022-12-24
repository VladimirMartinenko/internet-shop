'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,Buyer,ProductToOrders}) {
      // define association here
      Order.belongsTo(User,{foreignKey:'userId'});
      Order.belongsTo(Buyer,{foreignKey:'buyerId'});
      Order.hasMany(ProductToOrders,{foreignKey:'orderId'});

    }
  }
  Order.init({}, {
    sequelize,
    modelName: 'Order',
    underscored: true,
    tableName: 'orders',
  });
  return Order;
};