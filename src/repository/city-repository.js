const CrudRepository = require("./crud-repository");
const {City} = require("../models/index");
const {Op} = require('sequelize');

class CityRepository extends CrudRepository{

    constructor() {
        super(City);
    }

    async searchCities(query){

        try{
            const cities = await City.findAll({
                where: {
                  name: {
                    [Op.like]: `%${query}%`, 
                  },
                },
              })

            return cities;
        }catch(error) {
            console.log(error);
            console.log("Something went wrong city repo query function")
        }
    }
}

module.exports = CityRepository;
