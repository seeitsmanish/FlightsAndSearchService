const {AirportService} = require('../services/index')

const airportService = new AirportService();

const create = async (req,res) => {
    try {
        const result = await airportService.create(req.body);
        return res.status(201).json({
            data : result,
            success : true,
            message : "Successfully created airport",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            succcess : false,
            message : "Not able to create the airport",
            err : error
        });
    }
}

const destroy = async (req,res) => {
    try {
        const result = await airportService.destroy(req.params.id);
        return res.status(200).json({
            data : result,
            success : true,
            message : "Successfully deleted the airport",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            succcess : false,
            message : "Not able to delete the airport",
            err : error
        });
    }
}

const update = async (req,res) => {
    try {
        const result = await airportService.update(req.params.id);
        return res.status(201).json({
            data : result,
            success : true,
            message : "Successfullt updated the city",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            succcess : false,
            message : "Not able to update the city",
            err : error
        });
    }
}

const get = async (req,res) => {
    try {
        const response = await airportService.get(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Successfully fetched the airport",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fetch the airport",
            err : error
        });
    }
}

const getAll = async (req,res) => {
    try {
        const response = await airportService.getAll();
        return res.status(200).json({
            data : response,
            success : true,
            message : "Successfully fetched all the airports",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fetch the airports",
            err : error
        });
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
}
