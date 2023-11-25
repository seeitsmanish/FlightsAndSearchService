const {StatusCodes} = require('http-status-codes');
const {Flight,Airplane,Airport,City} = require('../models/index');
const {compareTime} =  require('../utils/helper');

const requiredModel = {
    '/flights' : Flight,
    '/airplanes' : Airplane,
    '/airports' : Airport,
    '/cities' : City
};

const validateCreation = (req,res,next) => {

    const model = requiredModel[req.route.path];
    let missingAttributes = [];

    const modelAttributes = model.rawAttributes;    // for getting all the attributes of model class
    const attributesName = Object.keys(modelAttributes);
    for(let attributeIndex = 0; attributeIndex < attributesName.length; attributeIndex++) {
        if(attributesName[attributeIndex] == 'id' || attributesName[attributeIndex] == 'createdAt' || 
            attributesName[attributeIndex] == 'updatedAt'){
            continue;
        }
        if(modelAttributes[attributesName[attributeIndex]].allowNull == false && !req.body[attributesName[attributeIndex]]) {
            missingAttributes.push(attributesName[attributeIndex]);
        }
    }

    if(missingAttributes.length > 0) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            success : false,
            data : {},
            message : `Not able to create ${model.name}`,
            explanation : `[${missingAttributes}] Parameter(s) is / are not found in the request body`
        })
    }
    
    next();
}

const validSearchForFlights = (req,res,next) =>{
    const params = req.query;

    let errorExplanation = "";

    if(!params.departureCityId) {
        errorExplanation += 'departure city, ';
    }

    if(!params.arrivalCityId) {
        errorExplanation += 'arrival city, ';
    }

    if(params.departureDate && params.returnDate) {
        if(!compareTime(params.returnDate, params.departureDate)) {
            errorExplanation += ' departure date should be less than rerturn date, ';
        }
    }
    else if(!params.departureDate) {
        errorExplanation += 'departure date, ';
    }

    if(!params.travellers) {
        errorExplanation += 'number of travellers, ';
    }


    if(errorExplanation.length > 0) {
        return res.status(StatusCodes.BAD_REQUEST || 500).json({
            success: false,
            data:{},
            message: `${errorExplanation} is/are required`,
            err: 'Attribute not found/ Not valid',
        })
    }

    next();
}
module.exports = {
    validateCreation,
    validSearchForFlights
}