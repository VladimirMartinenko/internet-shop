'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(12,2),
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      categoryId: {
        field: 'category_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'categorys',
          },
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      brand: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      img: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};