'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes',[
      {
        "modelNumber": "Boeing 737",
        "capacity": 180,
        "speed": 829,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "modelNumber": "Airbus A320",
        "capacity": 190,
        "speed": 846,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "modelNumber": "Boeing 777",
        "capacity": 430,
        "speed": 926,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "modelNumber": "Airbus A330",
        "capacity": 345,
        "speed": 885,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "modelNumber": "Boeing 787",
        "capacity": 286,
        "speed": 952,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "modelNumber": "Airbus A380",
        "capacity": 704,
        "speed": 902,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "modelNumber": "Boeing 747",
        "capacity": 563,
        "speed": 917,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "modelNumber": "Embraer E190",
        "capacity": 105,
        "speed": 872,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "modelNumber": "Bombardier CRJ-900",
        "capacity": 83,
        "speed": 872,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "modelNumber": "ATR 72",
        "capacity": 74,
        "speed": 444,
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
