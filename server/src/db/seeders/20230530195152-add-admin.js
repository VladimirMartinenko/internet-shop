"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          first_name: "Anton",
          last_name: "Betin",
          email:"docbetin@gmail.com",
          phone:"380679136173",
          password:"302023",
          role: 'admin',
          created_at:new Date(),
          updated_at:new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users',{email:"docbetin@gmail.com"}, {});
     
  },
};
