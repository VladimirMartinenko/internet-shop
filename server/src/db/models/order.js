'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,Buyer,ProductToOrders,Product}) {
      // define association here
      Order.belongsTo(User,{foreignKey:'userId'});
      Order.belongsTo(Buyer,{foreignKey:'buyerId'});
      // Order.hasMany(ProductToOrders,{foreignKey:'orderId'});
      Order.belongsToMany(Product, {
        through: 'products_to_rders',
        foreignKey: 'orderId'
      });

    }
  }
  Order.init({
    sum: {
      type: DataTypes.NUMBER,
    },
   
  }, {
    sequelize,
    modelName: 'Order',
    underscored: true,
    tableName: 'orders',
  });
  return Order;
};