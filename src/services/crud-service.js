const {StatusCodes} = require('http-status-codes');
const {ClientError} = require('../utils/errors/index');
class CrudService {

    constructor(repository) {
        this.repository = repository;
    }

    async create(data) {
        try {
           const result = await this.repository.create(data);
           return result; 
        } catch (error) {
            if(error.name == 'SequelizeValidationError'){
                throw error;
            }
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async destroy(modelId) {
        try {
            const result = await this.repository.destroy(modelId);
            if(!result) {
                throw new ClientError(
                    'AttributeNotFound',
                    'Not able to delete the Attribute with given id',
                    'No Attribute found with given id',
                    StatusCodes.BAD_REQUEST
                );
            }
            return result;
        } catch (error) {
            if(error.name == 'AttributeNotFound' ) {
                throw error;
            }
            console.log("Something went wrong in crud service");
            throw {error};
        }
    }

    async update(modelId, data) {
        try {
            const result = await this.repository.update(modelId, data);
            if(!result) {
                throw new ClientError(
                    'AttributeNotFound',
                    'Not able to update the Attribute with given id',
                    'No Attribute found with given id',
                    StatusCodes.BAD_REQUEST
                );
            }
            return result;
        } catch (error) {
            if(error.name == 'AttributeNotFound' ) {
                throw error;
            }
            console.log("Something went wrong in crud service");
            throw {error};
        }
    }

    async get(modelId) {
        try {
            const result = await this.repository.get(modelId);
            if(!result) {
                throw new ClientError(
                    'AttributeNotFound',
                    'Not able to fetch the Attribute with given id',
                    'No Attribute found with given id',
                    StatusCodes.BAD_REQUEST
                );
            }
            return result;
        } catch (error) {
            if(error.name == 'AttributeNotFound') {
                throw error;
            }
            console.log("Something went wrong in crud service");
            throw {error};
        }
    }

    async getAll() {
        try {
            const result = await this.repository.getAll();
            return result;
        } catch (error) {
            console.log("Something went wrong in crud service");
            throw {error};
        }
    }

}

module.exports = CrudService;