const {Flight, Airport} = require("../models/index");
const {Op} = require('sequelize');
const {ValidationError} = require('../utils/errors/index');
class FlightRepository{

    #createFilter(data) {
        let filter = {};
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        let priceFilter = [];
        if(data.minPrice) {
            priceFilterFilter.push({price : {[Op.gte] : data.minPrice}});
        }
        if(data.maxPrice) {
            priceFilter.push({price : {[Op.lte] : data.maxPrice}});
        }
        Object.assign(filter, {[Op.and] : princeFilter});

        return filter;
    }

    async create(data) {
        try {
            const result = await Flight.create(data);
            return result;
        } catch (error) {
            console.log(error);
            console.log("Something went wrong in flight repository");
            // throw new ValidationError(error);
        }
    }

    async destroy(flightId) {
        try {
            const result = await Flight.destroy({
                where : {
                    id : flightId
                }
            });
            return result;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async update(flightId, data) {
        try {
          await Flight.update(data, {
            where : {
                id : flightId
            }
          });
          const result = await Flight.findByPk(flightId);
          return result;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }


    async searchFlights(departureAirportId, arrivalAirportId, departureDate, travellers) {



        try {

            const flights = await Flight.findAll({
                where: {
                    departureAirportId: {
                        [Op.eq]: departureAirportId
                    },

                    arrivalAirportId: {
                        [Op.eq]: arrivalAirportId
                    },
                    departureTime: {
                        [Op.gte]: new Date(departureDate),
                        [Op.lt]: new Date(new Date(departureDate).setDate(new Date(departureDate).getDate() + 1)),
                      },
                    totalSeats: {
                        [Op.gte]: travellers || 1
                    }
                }
            })
            return flights;

        } catch (error) {
            console.log(error);
            console.log("Something went wrong in repo layer of flights");
        }
    }

    async get(flightId) {
        try {
            const result = await Flight.findByPk(flightId);
            return result;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async getAll(filter) {
        try {
            // What if there is no filter
            if(filter == null) {
                const flights = await Flight.findAll();
                return flights;
            }
            const filterObject = this.#createFilter(filter);
            const flight = await Flight.findAll({
                where : filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports = FlightRepository;