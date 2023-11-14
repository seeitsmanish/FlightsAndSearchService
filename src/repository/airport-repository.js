const CrudRepository = require('./crud-repository');
const { Airport } = require('../models/index');
const {Op} = require('sequelize');
class AirportRepository extends CrudRepository {

    constructor() {
       super(Airport);
    }

    async getAirportByCityId(cityId) {

        try {
            const airport = await Airport.findOne({
                where: {
                    cityId: {
                        [Op.eq] : cityId
                    }
                }
            });

            return airport;
        } catch (error) {
            console.log(error);
            console.log("Something went wrong during fetching airport via cityId in Airport Repo!");
        }
    }


}

module.exports = AirportRepository;