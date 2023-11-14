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

    await queryInterface.bulkInsert('Airports', [
      {
        name: "Agatti Island Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Agatti Island' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Ahmedabad Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Ahmedabad' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Aizawl Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Aizawl' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Akola Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Akola' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Along Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Along' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Amausi Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Lucknow' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Amritsar Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Ludhiana' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Bagdogra Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Bagdogra' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Bajpe Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Mangalore' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Bakula Rimpoche Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Leh' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Balurghat Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Balurghat' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Bamrauli Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Allahabad' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Barapani Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Shillong' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Bareli Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Bareli' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Bellary Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Bellary' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Bengaluru International Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Bangalore' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Bhatinda Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Bhatinda' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Bhavnagar Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Bhavnagar' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Bhopal Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Bhopal' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Bhubaneswar Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Bhubaneswar' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Bikaner Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Bikaner' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Bilaspur Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Bilaspur' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Birsa Munda International Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Ranchi' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Borjhar Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Guwahati' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Car Nicobar Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Car Nicobar' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Chandigarh Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Chandigarh' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Chennai International Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Chennai' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Chhatrapati Shivaji International Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Mumbai' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Chikkalthana Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Aurangabad' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Cochin International Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Kochi' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Cooch Behar Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Cooch Behar' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Cuddapah Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Cuddapah' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Dabok Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Udaipur' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Dabolim Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Goa' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Daman Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Daman' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Daparizo Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Daparizo' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Darjeeling Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Darjeeling' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Dehra Dun Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Dehra Dun' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Deparizo Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Deparizo' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Devi Ahilyabai Holkar Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Indore' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Dhanbad Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Dhanbad' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Dibrugarh Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Dibrugarh' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Dimapur Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Dimapur' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Diu Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Diu' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Gaggal Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Dharamsala' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Gandhinagar Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Nasik' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Gaya Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Gaya' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Gorakhpur Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Gorakhpur' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Govardhanpur Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Jamnagar' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Guna Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Guna' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Gwalior Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Gwalior' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Hissar Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Hissar' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Hubli Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Hubli' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Hyderabad International Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Hyderabad' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Indira Gandhi International Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'New Delhi' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Jabalpur Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Jabalpur' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Jagdalpur Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Jagdalpur' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Jaisalmer Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Jaisalmer' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Jeypore Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Jeypore' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Jodhpur Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Jodhpur' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Kailashahar Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Kailashahar' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Kamalpur Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Kamalpur' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Kandla Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Kandla' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Kanpur Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Kanpur' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Keshod Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Keshod' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Khajuraho Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Khajuraho' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Kheria Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Agra' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Khowai Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Khowai' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Kolhapur Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Kolhapur' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Kota Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Kota' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Kozhikode Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Kozhikode' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Kullu Manali Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Bhuntar Kullu.' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Kumbhirgram Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Silchar' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Lilabari Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Lilabari' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Lohegaon Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Pune' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Madurai Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Madurai' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Malda Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Malda' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Mohanbari Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Mohanbari' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Municipal Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Imphal' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Muzaffarnagar Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Muzaffarnagar' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Muzaffarpur Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Muzaffarpur' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Mysore Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Mysore' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Nanded Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Nanded' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Netaji Subhash Chandra Bose International Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Kolkata' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Neyveli Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Neyveli' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Osmanabad Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Osmanabad' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Pantnagar Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Pantnagar' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Pasighat Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Pasighat' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Pathankot Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Pathankot' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Patna Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Patna' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Peelamedu Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Coimbatore' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Pondicherry Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Pondicherry' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Porbandar Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Porbandar' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Port Blair Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Port Blair' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Puttaparthi Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Puttaparthi' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Raipur Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Raipur' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Raja Sansi Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Amritsar' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Rajahmundry Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Rajahmundry' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Rajkot Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Rajkot' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Rajouri Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Rajouri' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Ramagundam Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Ramagundam' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Ratnagiri Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Ratnagiri' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Rewa Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Rewa' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Rourkela Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Rourkela' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Rowriah Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Jorhat' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Rudra Mata Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Bhuj' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Rupsi Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Rupsi' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Salem Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Salem' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Salonibari Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Tezpur' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Sambre Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Belgaum' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Sanganeer Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Jaipur' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Satna Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Satna' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Satwari Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Jammu' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Sholapur Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Sholapur' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Simla Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Simla' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Singerbhil Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Agartala' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Sonari Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Jamshedpur' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Sonegaon Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Nagpur' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Srinagar Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Srinagar' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Surat Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Surat' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Tezu Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Tezu' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Thanjavur Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Thanjavur' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Thiruvananthapuram International Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Trivandrum' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Tirupati Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Tirupati' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Trichy Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Trichy' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Tuticorin Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Tuticorin' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Vadodara Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Vadodara' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Varanasi Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Varanasi' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Vijayawada Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Vijayawada' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Vishakhapatnam Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Vishakhapatnam' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Warangal Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Warangal' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Zero Airport",
        address: null,
        cityId: (await queryInterface.sequelize.query(
              'SELECT id FROM cities WHERE name LIKE :cityName',
              {
                replacements: { cityName: 'Zero' },
                type: Sequelize.QueryTypes.SELECT,
              }
            ))[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
    ], {})
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
