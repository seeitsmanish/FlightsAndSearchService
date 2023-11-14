'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Companies', [
      {
        name: 'Indigo',
        logoUrl: 'https://i.ibb.co/bNSHck6/indigo-logo.png',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Air India',
        logoUrl: 'https://i.ibb.co/R7zr7MP/Air-India-logo.png',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Air Asia',
        logoUrl: 'https://i.ibb.co/3YhGztD/Air-Asia-Logo.png',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'SpiceJet',
        logoUrl: 'https://i.ibb.co/prB6xVq/spicejet-logo.png',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Vistara',
        logoUrl: 'https://i.ibb.co/LpzFd9k/vistara-logo.png',
        createdAt: new Date(),
        updatedAt: new Date(), 
      }
  ], {});
    
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

