const express = require('express');
const mongoose = require('mongoose');
const server  = express();
const port = 8080;

// Modules
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes
const TaskRoute = require('./routes/guides');

// Database connection
mongoose.connect('mongodb://localhost:27017/tourguides');

server.use( cors() );
server.use( bodyParser.json() );

server.get('/', (request, response)=> {
    response.send(`Test Express server!`);
});

server.use( '/api/v1/guides', TaskRoute );

server.listen( 
    port,
    () => {
        console.log(`Express server running on port ${port}`);
    }
);