const express = require('express');
const bodyParser = require("body-parser");
const CityRepository = require('./repository/city-repository');
const {Flights, Airport, City, Airplane, Company} = require('./models/index');
const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');  
const db = require('./models/index');
const cors = require('cors');

const setupAndStartServer = async () => {
    // create the express object
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        // const companies = await Company.findAll();
        // const airplanes = await Airplane.findAll();
        // console.log(airplanes);
        if(process.env.SYNC_DB){
             db.sequelize.sync({alter : true});
        }
        
    });
}


setupAndStartServer();
