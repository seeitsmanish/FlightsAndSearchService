const CityService = require('../services/city-service');
// const { CityService } =  require('../servies/index');

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
        return res.status(201).json({
            data : city,
            success : true,
            message : 'Successfully created a city',
            err : {}
        });
    }catch(error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            succcess : false,
            message : "Not able to create a city",
            err : error
        });
    }
}

// DELETE -> /city/:id
const destroy = async (req, res) => {
    try{
        const response = await cityService.delete(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully deleted a city',
            err : {}
        });
    }catch(error) {
        console.log(error);
        return res.status(500).json( {
            data : {},
            success : false,
            message : 'Not able to delete the city',
            err : error
        });
    }
}

// GET -> /city/:id
const get = async (req, res) => {
    try{
        const response = await cityService.get(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully fetched a city',
            err : {}
        });
    }catch(error) {
        console.log(error);
        return res.status(500).json( {
            data : {},
            success : false,
            message : 'Not able to fetch the city',
            err : error
        });    
    }
}


// Patch -> /city/:id -> req.body
const update = async (req, res) => {
    try{
        const response = await cityService.update(req.params.id, req.body);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully updated the city',
            err : {}
        });        
    }catch(error) {
        console.log(error);
        return res.status(500).json( {
            data : {},
            success : false,
            message : 'Not able to update the city',
            err : error
        });
    }
}

const getAll = async (req,res) => {
    try{
        const cities = await cityService.getAll(req.query);
        return res.status(200).json({
            data : cities,
            success : true,
            message : "Successfully fetched the cities",
            err : {}
        });
    }catch(error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message  : "Not able to fetch the cities",
            err : error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}