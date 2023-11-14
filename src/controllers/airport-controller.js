const {AirportService} = require('../services/index')
const {StatusCodes} = require('http-status-codes');

const airportService = new AirportService();

const create = async (req,res) => {
    try {
        const result = await airportService.create(req.body);
        return res.status(StatusCodes.CREATED).json({
            data : result,
            success : true,
            message : "Successfully created airport",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode || 500).json({
            data : {},
            succcess : false,
            message : error.message,
            err : error.explanation
        });
    }
}

const destroy = async (req,res) => {
    try {
        const result = await airportService.destroy(req.params.id);
        return res.status(StatusCodes.OK).json({
            data : result,
            success : true,
            message : "Successfully deleted the airport",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data : {},
            succcess : false,
            message : error.message,
            err : error.explanation
        });
    }
}

const update = async (req,res) => {
    try {
        const result = await airportService.update(req.params.id);
        return res.status(StatusCodes.OK).json({
            data : result,
            success : true,
            message : "Successfully updated the city",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data : {},
            succcess : false,
            message : error.message,
            err : error.explanation
        });
    }
}

const get = async (req,res) => {
    try {
        const response = await airportService.get(req.params.id);
        return res.status(StatusCodes.OK).json({
            data : response,
            success : true,
            message : "Successfully fetched the airport",
            error : {}
        });
    } catch (error) {
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
    try {
        const response = await airportService.getAll();
        return res.status(StatusCodes.OK).json({
            data : response,
            success : true,
            message : "Successfully fetched all the airports",
            error : {}
        });
    } catch (error) {
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
    update,
    get,
    getAll
}
