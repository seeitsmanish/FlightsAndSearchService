'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Cities', [
      {
        name : "Agatti Island",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Ahmedabad",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Aizawl",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Akola",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Along",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Lucknow",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Ludhiana",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Bagdogra",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Mangalore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Leh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Balurghat",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Allahabad",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Shillong",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Bareli",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Bellary",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Bangalore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Bhatinda",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Bhavnagar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Bhopal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Bhubaneswar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Bikaner",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Bilaspur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Ranchi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Guwahati",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Car Nicobar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Chandigarh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Chennai",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Mumbai",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Aurangabad",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Kochi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Cooch Behar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Cuddapah",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Udaipur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Goa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Daman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Daparizo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Darjeeling",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Dehra Dun",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Deparizo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Indore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Dhanbad",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Dibrugarh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Dimapur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Diu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Dharamsala",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Nasik",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Gaya",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Gorakhpur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Jamnagar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Guna",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Gwalior",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Hissar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Hubli",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Hyderabad",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "New Delhi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Jabalpur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Jagdalpur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Jaisalmer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Jeypore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Jodhpur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Kailashahar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Kamalpur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Kandla",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Kanpur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Keshod",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Khajuraho",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Agra",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Khowai",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Kolhapur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Kota",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Kozhikode",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Bhuntar Kullu.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Silchar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Lilabari",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Pune",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Madurai",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Malda",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Mohanbari",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Imphal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Muzaffarnagar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Muzaffarpur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Mysore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Nanded",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Kolkata",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Neyveli",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Osmanabad",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Pantnagar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Pasighat",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Pathankot",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Patna",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Coimbatore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Pondicherry",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Porbandar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Port Blair",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Puttaparthi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Raipur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Amritsar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Rajahmundry",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Rajkot",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Rajouri",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Ramagundam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Ratnagiri",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Rewa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Rourkela",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Jorhat",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Bhuj",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Rupsi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Salem",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Tezpur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Belgaum",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Jaipur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Satna",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Jammu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Sholapur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Simla",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Agartala",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Jamshedpur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Nagpur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Srinagar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Surat",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Tezu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Thanjavur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Trivandrum",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Tirupati",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Trichy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Tuticorin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Vadodara",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Varanasi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Vijayawada",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Vishakhapatnam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Warangal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : "Zero",
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
