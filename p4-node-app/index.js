const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const server  = express();
const port = 8080;

// Modules
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes
const GuideRoute = require('./routes/guides');
const TouristRoute = require('./routes/tourists');
const TransactionRoute = require('./routes/transactions');
const LocationRoute = require('./routes/locations');

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/tourguideDB');

//Middlewares
server.use( morgan('dev') );

server.use( cors() );
server.use( bodyParser.json() );

server.get('/', (request, response)=> {
    response.send(`Test Express server!`);
});

server.use( '/api/v1/guides', GuideRoute );
server.use( '/api/v1/tourists', TouristRoute );
server.use( '/api/v1/transactions', TransactionRoute );
server.use( '/api/v1/locations', LocationRoute);

server.listen( 
    port,
    () => {
        console.log(`Express server running on port ${port}`);
    }
);