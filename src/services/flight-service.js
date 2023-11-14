const {FlightRepository, AirplaneRepository, AirportRepository, CityRepository} = require("../repository/index");
const {compareTime, getAirDistanceBetweenCities} = require("../utils/helper");
const {StatusCodes} = require("http-status-codes");
const {ClientError, AppError} = require("../utils/errors/index");
const {Company} = require('../models/index');
const { format } = require('date-fns');
const { uuid } = require('uuidv4');
const moment = require('moment');



class FlightService {
    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
        this.airportRepository = new AirportRepository();
        this.cityRepository = new CityRepository();
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

      

    async createFlights( departureAirportId, arrivalAirportId, departureDate, travellers, distance){

        let companies = null;
        try {
            companies = await Company.findAll();
        } catch (error) {
            console.log(error);
            console.log("Something went wrong while fetching companies data!");
        }

        let airplanes = null;
        try {
            airplanes = await this.airplaneRepository.getAll();
        } catch (error) {
            console.log(error);
            console.log("Something went wrong while fetching airplanes in flight service!");
        }

        let noOfAirplanes = airplanes.length;
        let noOfCompanies = companies.length;
        
        for(let companyIndex = 0; companyIndex < noOfCompanies; companyIndex++) {

            const flightData = {};

            /**
             * FlightNumber -> diff
             * airplaneId -> diff
             * departureAirportId -> same
             * arrivalAirportId -> same 
             * arrivalTime -> diff
             * departureTime -> diff
             * price -> diff
             * boardingGate -> not yet decided
             * totalSeats -> diff
             * companyName -> same
             * companyLogoUrl ->same 
             */

            



            // departureAirportId
            flightData.departureAirportId = departureAirportId; 

            // arrivalAirportId
            flightData.arrivalAirportId = arrivalAirportId;

            // companyName
            const company = companies[companyIndex].dataValues;
            flightData.companyName = company.name;

            // companyLogoUrl
            flightData.companyLogoUrl = company.logoURL;


            const timeObject = this.getTimeIntervals(new Date(departureDate));

            for(const interval of Object.keys(timeObject)){

                // flightNumber
                flightData.flightNumber = this.generateUniqueFlightId();

                // airplaneId
                let airplaneIndex = Math.floor(Math.random() * noOfAirplanes); 
                const airplane = airplanes[airplaneIndex].dataValues;
                flightData.airplaneId = airplane.id; 
                
                //totalSeats
                flightData.totalSeats = airplane.capacity;

                // price
                // Generate a variablePrice between 500 and 3000 (inclusive)
                const variablePrice = Math.floor(Math.random() * (3000 - 500 + 1) + 500);
                flightData.price = distance * 4 + variablePrice;

                //boardingGate
                flightData.boardingGate = null;

                // departureTime & arrivalTime
                /**
                 * So I will do the following steps:-
                 * I first generated departure time randomly in 4 slots:-
                 *      -> morningInterval = [6, 10];
                 *      -> dayInterval = [10, 16];
                 *      -> eveningInterval = [16, 20];
                 *      -> nightInterval = [20, 23];
                 * then i will calculate the distance between the cities.
                 * and then i will calculate the time to reach destination by distance/speed of airplane
                 * and then i will add some variable time/delay to arrival Time so as to make it look real....
                 */
                flightData.departureTime = timeObject[interval];
                const departureTime = moment(flightData.departureTime);
                var travelTimeInSeconds = (distance/airplane.speed) * 60 * 60;
                var variableDelaySeconds = Math.random() * 3 * 60 * 60;
                const arrivalTime = departureTime.clone().add(travelTimeInSeconds, 'seconds').add(variableDelaySeconds, 'seconds');
                flightData.arrivalTime = arrivalTime.format('YYYY-MM-DD HH:mm:ss');;
                try {
                    const flight = await this.create(flightData);
                    console.log("Created Flight!!");
                    // console.log(flight);
                } catch (error) {
                    console.log(error);
                    console.log("Something went wrong during flight creation in flight service!!");
                }
            }

        }
    }

    async searchFlights(query) {

        const departureCityId = query.departureCityId;
        const arrivalCityId = query.arrivalCityId;
        const departureDate = query.departureDate;
        const returnDate = query.returnDate;
        const travellers = query.travellers;


        const departureAirportObject = await this.airportRepository.getAirportByCityId(departureCityId);
        const arrivalAirportObject = await this.airportRepository.getAirportByCityId(arrivalCityId);

        if(departureAirportObject && departureAirportObject.dataValues) {
            var departureAirportId = departureAirportObject.dataValues.id;
        }

        if(arrivalAirportObject && arrivalAirportObject.dataValues) {
            var arrivalAirportId = arrivalAirportObject.dataValues.id;
        }





        let departureFlights = null
        try {
            departureFlights = await this.flightRepository.searchFlights(
                departureAirportId,
                arrivalAirportId,
                departureDate,
                travellers,
            )

        } catch (error) {
            console.log(error);
            console.log("Something went wrong in fligth service while searching for departure flights");
            
        }

        try {

            // Means there are no flights
            if(Object.keys(departureFlights).length === 0) {
                console.log("Sorry!, No flights found!!!");

                let departureCity = await this.cityRepository.get(departureCityId);
                let arrivalCity = await this.cityRepository.get(arrivalCityId);

                
                if(departureCity && departureCity.dataValues) departureCity = departureCity.dataValues.name;
                if(arrivalCity && arrivalCity.dataValues) arrivalCity = arrivalCity.dataValues.name;

                console.log("Stuck here!!");

                const distance = await getAirDistanceBetweenCities(departureCity, arrivalCity);

                console.log("Starting creation!!!!");
                await this.createFlights(
                    departureAirportId,
                    arrivalAirportId,
                    departureDate,
                    travellers,
                    distance
                );


                departureFlights = await this.flightRepository.searchFlights(
                    departureAirportId,
                    arrivalAirportId,
                    departureDate,
                    travellers,
                )
            }
        } catch (error) {
            console.log(error);
            console.log("Something went wrong while creating departure flights in flight service!");
        }

        let returnFlights = null;
        console.log()
        if(returnDate) {

            try {
                returnFlights = await this.flightRepository.searchFlights(
                    arrivalAirportId,
                    departureAirportId,
                    returnDate,
                    travellers,
                )
    
            } catch (error) {
                console.log(error);
                console.log("Something went wrong in fligth service while searching for return flights");
                
            }

            try {

                // Means there are no flights
                if(Object.keys(returnFlights).length === 0) {
                    console.log("Sorry!, No flights found!!!");
    
                    let departureCity = await this.cityRepository.get(departureCityId);
                    let arrivalCity = await this.cityRepository.get(arrivalCityId);
    
                    
                    if(departureCity && departureCity.dataValues) departureCity = departureCity.dataValues.name;
                    if(arrivalCity && arrivalCity.dataValues) arrivalCity = arrivalCity.dataValues.name;
    
                    console.log("Stuck here!!");
    
                    const distance = await getAirDistanceBetweenCities(departureCity, arrivalCity);
    
                    console.log("Starting creation!!!!");
                    await this.createFlights(
                        arrivalAirportId,
                        departureAirportId,
                        returnDate,
                        travellers,
                        distance
                    );
    
    
                    returnFlights = await this.flightRepository.searchFlights(
                        arrivalAirportId,
                        departureAirportId,
                        returnDate,
                        travellers,
                    )
                }
            } catch (error) {
                console.log(error);
                console.log("Something went wrong while creating return flights in flight service!");
            }

        }

        const flightObject = {
            departureFlights: departureFlights,
            returnFlights : returnFlights
        }


        return flightObject;
        
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
            const result = await this.flightRepository.getAll(filter);
            return result;
        } catch (error) {
            console.log("Something went wrong in flight service");
            throw {error};
        }
    }



    generateRandomTime(interval) {
  
        const [startHour, endHour] = interval;
        const randomHour = startHour + Math.floor(Math.random() * (endHour - startHour + 1));
        const randomMinutes = Math.floor(Math.random() * 60);
    
        const formattedHour = String(randomHour).padStart(2, '0');
        const formattedMinutes = String(randomMinutes).padStart(2, '0');
    
        return `${formattedHour}:${formattedMinutes}`;
    }

    getTimeIntervals(departureDate){
      
      // Example usage
      const date = format(departureDate, 'yyyy-MM-dd');
      const morningInterval = [6, 10];
      const dayInterval = [10, 16];
      const eveningInterval = [16, 20];
      const nightInterval = [20, 23];
      
      const morningTime = this.generateRandomTime(morningInterval);
      const dayTime = this.generateRandomTime(dayInterval);
      const eveningTime = this.generateRandomTime(eveningInterval);
      const nightTime = this.generateRandomTime(nightInterval);
      
      const morningDate = new Date(`${date}T${morningTime}:00`);
      const dayDate = new Date(`${date}T${dayTime}:00`);
      const eveningDate = new Date(`${date}T${eveningTime}:00`);
      const nightDate = new Date(`${date}T${nightTime}:00`);
    
    
      const timeObject = {
        morning: format(morningDate, 'yyyy-MM-dd HH:mm:ss'),
        day: format(dayDate, 'yyyy-MM-dd HH:mm:ss'),
        evening: format(eveningDate, 'yyyy-MM-dd HH:mm:ss'),
        night: format(nightDate, 'yyyy-MM-dd HH:mm:ss')
      }
      

      return timeObject;
    }

    generateUniqueFlightId() {
        const flightId = uuid();
        return flightId.toUpperCase();
    }
      

}

module.exports = FlightService;