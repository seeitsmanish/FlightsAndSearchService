const { response } = require("express");
const {FlightService} = require("../services/index");

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
        
        return res.status(201).json({
            data : result,
            success : true,
            message : "Successfully created Flight",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create Flight",
            err : error
        });
    }
}

const destroy = async (req,res) => {
    try {
        const result = await flightService.destroy(req.params.id);
        return res.status(200).json({
            data : result,
            success : true,
            message : "Succesfully deleted flight",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to delete the flight",
            err : error
        });
    }
}

const get = async (req,res) => {
    try {
        const result = await flightService.get(req.params.id);
        return res.status(200).json({
            data : result,
            success : true,
            message : "Succesfully fetched the flight",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fetch the flight",
            err : error
        });
    }
}

const getAll = async (req,res) => {
    try {
        const result = await flightService.get(req.query);
        return res.status(200).json({
            data : result,
            success : true,
            message : "Succesfully fetched the flights",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fetch the flights",
            err : error
        });
    }
}

const update  = async (req,res) => {
    try {
        const result = await flightService.update(req.params.id, req.body);
        return res.status(200).json({
            data : response,
            message: true,
            error : {},
            message : "Succesfully updated the flight"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            message : "Not able to update the flight",
            success : false,
            err : error
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