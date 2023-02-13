const {Flight} = require("../models/index");
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
            console.log("Something went wrong in crud repository");
            throw new ValidationError(error);
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