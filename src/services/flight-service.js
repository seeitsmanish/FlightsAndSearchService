const {FlightRepository, AirplaneRepository} = require("../repository/index");
const {compareTime} = require("../utils/helper");

class FlightService {
    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async create(data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error : "Arrival Time of the flight can't be less than departure time"};
            }
            const airplane = await this.airplaneRepository.get(data.airplaneId);
            data.totalSeats = airplane.capacity;
            const result = this.flightRepository.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    async destroy(flightId) {
        try {
            const result = await this.flightRepository.destroy(flightId);
            return result;
        } catch (error) {
            console.log("Something went wrong in flight service");
            throw {error};
        }
    }

    async update(flightId, data) {
        try {
            const result = await this.flightRepository.update(flightId, data);
            return result;
        } catch (error) {
            console.log("Something went wrong in flight service");
            throw {error};
        }
    }

    async get(flightId) {
        try {
            const result = await this.flightRepository.get(flightId);
            return result;
        } catch (error) {
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