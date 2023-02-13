const {FlightRepository, AirplaneRepository} = require("../repository/index");
const {compareTime} = require("../utils/helper");
const {StatusCodes} = require("http-status-codes");
const {ClientError, AppError} = require("../utils/errors/index");


class FlightService {
    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async create(data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)){
               throw new ClientError(
                'InvalidDataError',
                'Not able to create Flight',
                'Arrival time of Flight can not be less than Departure time',
                StatusCodes.BAD_REQUEST
               );
            }
            const airplane = await this.airplaneRepository.get(data.airplaneId);
            if(!airplane) {
                throw new ClientError(
                    'AttributeNotFound',
                    'Not able to create flight',
                    'No record found of airplane with given airplaneId',
                    StatusCodes.BAD_REQUEST
                );
            }
            data.totalSeats = airplane.capacity;
            const result = this.flightRepository.create(data);
            return result;
        } catch (error) {
            const customErrors = ['AttributeNotFound', 'InvalidDataError', 'SequelizeValidationError'];
            if(customErrors.includes(error.name)) {
                throw error;
            }
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async destroy(flightId) {
        try {
            const result = await this.flightRepository.destroy(flightId);
            if(!result) {
                throw new ClientError(
                    'AttributeNotFound',
                    'Not able to delete the Attribute with given id',
                    'No Attribute found with given id',
                    StatusCodes.BAD_REQUEST
                );
            }
            return result;
        } catch (error) {
            if(error.name == 'AttributeNotFound' ) {
                throw error;
            }
            console.log("Something went wrong in crud service");
            throw {error};
        }
    }

    async update(flightId, data) {
        try {
            const result = await this.flightRepository.update(flightId, data);
            if(!result) {
                throw new ClientError(
                    'AttributeNotFound',
                    'Not able to update the Attribute with given id',
                    'No Attribute found with given id',
                    StatusCodes.BAD_REQUEST
                );
            }
            return result;
        } catch (error) {
            if(error.name == 'AttributeNotFound' ) {
                throw error;
            }
            console.log("Something went wrong in flight service");
            throw {error};
        }
    }

    async get(flightId) {
        try {
            const result = await this.flightRepository.get(flightId);
            if(!result ) {
                throw new ClientError(
                    'AttributeNotFound',
                    'Not able to fetch the Attribute with given id',
                    'No Attribute found with given id',
                    StatusCodes.BAD_REQUEST
                );
            }
            return result;
        } catch (error) {
            if(error.name == 'AttributeNotFound') {
                throw error;
            }
            console.log("Something went wrong in flight service");
            throw {error};
        }
    }

    async getAll(filter) {
        try {
            const result = await this.flightRepository.getAll();
            return result;
        } catch (error) {
            console.log("Something went wrong in flight service");
            throw {error};
        }
    }

}

module.exports = FlightService;