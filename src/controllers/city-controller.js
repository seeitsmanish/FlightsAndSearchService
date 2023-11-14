const CityService = require('../services/city-service');
// const { CityService } =  require('../servies/index');
const {StatusCodes} = require('http-status-codes');
const cityService = new CityService();
/*
* POST
* data -> req.body
*/


const create = async (req, res) => {
    try{
        const obj = {
            name : req.body.name
        }
        const city = await cityService.create(req.body);
        return res.status(StatusCodes.CREATED).json({
            data : city,
            success : true,
            message : 'Successfully created a city',
            err : {}
        });
    }catch(error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data : {},
            succcess : false,
            message : error.message,
            err : error.explanation
        });
    }
}

const searchCities = async (req,res) => {

    try{
        const query = req.query.name;
        const cities = await cityService.searchCities(query);
        return res.status(StatusCodes.OK).json({
            success : true,
            data: (cities.length == 0) ? [] : cities,
            message: "Successfully fetched cities with given query",
            err : {}
        });
    }catch(error) {
        console.log(error);
        return res.status(error.statusCode || 500).json({
            data : {},
            succcess : false,
            message : error.message,
            err : error.explanation
        });
    }

}

// DELETE -> /city/:id
const destroy = async (req, res) => {
    try{
        const response = await cityService.destroy(req.params.id);
        return res.status(StatusCodes.OK).json({
            data : response,
            success : true,
            message : 'Successfully deleted a city',
            err : {}
        });
    }catch(error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data : {},
            succcess : false,
            message : error.message,
            err : error.explanation
        });
    }
}

// GET -> /city/:id
const get = async (req, res) => {
    try{
        const response = await cityService.get(req.params.id);
        return res.status(StatusCodes.OK).json({
            data : response,
            success : true,
            message : 'Successfully fetched a city',
            err : {}
        });
    }catch(error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data : {},
            succcess : false,
            message : error.message,
            err : error.explanation
        });   
    }
}


// Patch -> /city/:id -> req.body
const update = async (req, res) => {
    try{
        const response = await cityService.update(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            data : response,
            success : true,
            message : 'Successfully updated the city',
            err : {}
        });        
    }catch(error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data : {},
            succcess : false,
            message : error.message,
            err : error.explanation
        });
    }
}

const getAll = async (req,res) => {
    try{
        const cities = await cityService.getAll(req.query);
        return res.status(StatusCodes.OK).json({
            data : cities,
            success : true,
            message : "Successfully fetched the cities",
            err : {}
        });
    }catch(error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data : {},
            succcess : false,
            message : error.message,
            err : error.explanation
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll,
    searchCities
}
