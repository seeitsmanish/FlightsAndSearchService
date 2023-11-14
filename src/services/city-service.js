const {CityRepository} = require("../repository/index");
const CrudService = require("./crud-service");
class CityService extends CrudService {

    
    constructor() {
        const cityRepository = new CityRepository();
        super(cityRepository);
    }

    async searchCities(query) {
        const cityRepository = new CityRepository();
        try {
            const result =  (query === '') ? [] : await cityRepository.searchCities(query);
            return result;
        } catch (error) {
            console.log("Something went wrong in flight service");
            throw {error};
        }
    }
}

module.exports = CityService;
