const express = require('express');
const mongoose = require('mongoose');
const server  = express();
const port = 8080;

// Modules
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes
const GuideRoute = require('./routes/guides');

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/tourguides');

server.use( cors() );
server.use( bodyParser.json() );

server.get('/', (request, response)=> {
    response.send(`Test Express server!`);
});

server.use( '/api/v1/guides', GuideRoute );

server.listen( 
    port,
    () => {
        console.log(`Express server running on port ${port}`);
    }
);