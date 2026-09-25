"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'ALTER TABLE products ADD COLUMN IF NOT EXISTS img_2 VARCHAR;'
    );
  },

  async down(queryInterface) {
    await queryInterface.removeColumn("products", "img_2");
  },
};
