"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(
      `ALTER TABLE products ADD COLUMN IF NOT EXISTS sizes JSONB NOT NULL DEFAULT '[]'::jsonb;`
    );
    await queryInterface.sequelize.query(
      `ALTER TABLE products_to_rders ADD COLUMN IF NOT EXISTS size VARCHAR(32);`
    );
  },

  async down(queryInterface) {
    await queryInterface.removeColumn("products", "sizes");
    await queryInterface.removeColumn("products_to_rders", "size");
  },
};
