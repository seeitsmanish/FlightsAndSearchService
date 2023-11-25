const express = require('express');
const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');
const AirplaneController = require('../../controllers/airplane-controller');
const FlightController = require("../../controllers/flight-controller");
const router = express.Router();
const {FlightandSearchRequestValidator} = require('../../middlewares/index');
// for cities
router.post(
    '/cities',
    FlightandSearchRequestValidator.validateCreation,
    CityController.create
);
router.delete('/cities/:id', CityController.destroy);
router.patch('/cities/:id', CityController.update);
router.get('/cities/:id',CityController.get);
router.get('/cities', CityController.getAll);
router.get('/searchCities/', CityController.searchCities);


// for airports
router.post(
    '/airports',
    FlightandSearchRequestValidator.validateCreation,
    AirportController.create
);
router.delete('/airports/:id', AirportController.destroy);
router.patch('/airports/:id', AirportController.update);
router.get('/airports/:id',AirportController.get);
router.get('/airports', AirportController.getAll);


// for airplanes
router.post(
    '/airplanes', 
    FlightandSearchRequestValidator.validateCreation,
    AirplaneController.create
);
router.delete('/airplanes/:id', AirplaneController.destroy);
router.patch('/airplanes/:id', AirplaneController.update);
router.get('/airplanes/:id',AirplaneController.get);
router.get('/airplanes', AirplaneController.getAll);

// for flightd
router.post(
    '/flights',
    FlightandSearchRequestValidator.validateCreation,
    FlightController.create
);
router.delete('/flights/:id', FlightController.destroy);
router.patch('/flights/:id', FlightController.update);
router.get('/flights/:id',FlightController.get);
router.get('/flights', FlightController.getAll);
router.get('/searchflights', 
    FlightandSearchRequestValidator.validSearchForFlights,
    FlightController.searchFlights
);


module.exports = router;

