const {AirplaneService} = require('../services/index')

const airplaneService = new AirplaneService();

const create = async (req,res) => {
    try {
        // destructuring the request object
        const airplane = {
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        }
        const result = await airplaneService.create(airplane);
        return res.status(201).json({
            data : result,
            success : true,
            message : "Successfully created airplane",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            succcess : false,
            message : "Not able to create the airplane",
            err : error
        });
    }
}

const destroy = async (req,res) => {
    try {
        const result = await airplaneService.destroy(req.params.id);
        return res.status(200).json({
            data : result,
            success : true,
            message : "Successfully deleted the airplane",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            succcess : false,
            message : "Not able to delete the airplane",
            err : error
        });
    }
}

const update = async (req,res) => {
    try {
        const result = await airplaneService.update(req.params.id);
        return res.status(201).json({
            data : result,
            success : true,
            message : "Successfullt updated the airplane",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            succcess : false,
            message : "Not able to update the airplane",
            err : error
        });
    }
}

const get = async (req,res) => {
    try {
        const response = await airplaneService.get(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Successfully fetched the airplane",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fetch the airplane",
            err : error
        });
    }
}

const getAll = async (req,res) => {
    try {
        const response = await airplaneService.getAll();
        return res.status(200).json({
            data : response,
            success : true,
            message : "Successfully fetched all the airplane",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fetch the airplane",
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
