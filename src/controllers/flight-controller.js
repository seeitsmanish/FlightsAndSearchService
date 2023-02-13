const { response } = require("express");
const {FlightService} = require("../services/index");
const {StatusCodes} = require('http-status-codes');
const flightService =  new FlightService();

const create = async (req,res) => {
    try {
        const result = await flightService.create({
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price,
            boardingGate : req.body.boardingGate,
            Company : req.body.Company
        })
        
        return res.status(StatusCodes.CREATED).json({
            data : result,
            success : true,
            message : "Successfully created Flight",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data : {},
            success : false,
            message : error.message,
            err : error.explanation
        });
    }
}

const destroy = async (req,res) => {
    try {
        const result = await flightService.destroy(req.params.id);
        return res.status(StatusCodes.OK).json({
            data : result,
            success : true,
            message : "Succesfully deleted flight",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data : {},
            success : false,
            message : error.message,
            err : error.explanation
        });
    }
}

const get = async (req,res) => {
    try {
        const result = await flightService.get(req.params.id);
        return res.status(StatusCodes.OK).json({
            data : result,
            success : true,
            message : "Succesfully fetched the flight",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data : {},
            success : false,
            message : error.message,
            err : error.explanation
        });
    }
}

const getAll = async (req,res) => {
    try {
        const result = await flightService.get(req.query);
        return res.status(StatusCodes.OK).json({
            data : result,
            success : true,
            message : "Succesfully fetched the flights",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data : {},
            success : false,
            message : error.message,
            err : error.explanation
        });
    }
}

const update  = async (req,res) => {
    try {
        const result = await flightService.update(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            data : response,
            message: true,
            error : {},
            message : "Succesfully updated the flight"
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data : {},
            success : false,
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
    getAll,
}