const ClientError = require('../utils/errors/client-error');
const {ValidationError} = require('../utils/errors/index');

class CrudRepository{

    constructor(model) {
        this.model = model;
    }

    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw new ValidationError(error);
        }
    }

    async destroy(userId) {
        try {
            const result = await this.model.destroy({
                where: {
                    id: userId
                }
            });
            return result;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }


    async get(modelId){
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw error;
        }
    }

    async getAll(){
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw error
        }
    }

    async update(modelId, data) {
        try {
            await this.model.update(data,{
                where : {
                    id : modelId
                }
            });
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw error;
        }
    }
}

module.exports = CrudRepository;