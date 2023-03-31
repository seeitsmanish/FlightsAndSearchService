const {AirplaneService} = require('../services/index')
const {StatusCodes} = require('http-status-codes');
const airplaneService = new AirplaneService();

const create = async (req,res) => {
    try {
        // destructuring the request object
        const airplane = {
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        }
        const result = await airplaneService.create(airplane);
        return res.status(StatusCodes.CREATED).json({
            data : result,
            success : true,
            message : "Successfully created airplane",
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

const destroy = async (req,res) => {
    try {
        const result = await airplaneService.destroy(req.params.id);
        return res.status(StatusCodes.OK).json({
            data : result,
            success : true,
            message : "Successfully deleted the airplane",
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
        const result = await airplaneService.update(req.params.id);
        return res.status(StatusCodes.OK).json({
            data : result,
            success : true,
            message : "Successfullt updated the airplane",
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
        const response = await airplaneService.get(req.params.id);
        return res.status(StatusCodes.OK).json({
            data : response,
            success : true,
            message : "Successfully fetched the airplane",
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
        const response = await airplaneService.getAll();
        return res.status(StatusCodes.OK).json({
            data : response,
            success : true,
            message : "Successfully fetched all  the airplane",
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
