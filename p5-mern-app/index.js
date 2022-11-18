const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const server  = express();
const port = 8080;

// Middlewares
server.use( morgan('dev') );
server.use( cors() );
server.use( bodyParser.json() );
server.use( helmet() );


// Routes
const PlantRoute = require('./routes/plants');
const UserRoute = require('./routes/users');
const StatusRoute = require('./routes/statuses');
const BatchRoute = require('./routes/batches');
const AuthRouter = require('./routes/auth');

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/hydroponicsdb');

//Middlewares
server.use( morgan('dev') );
server.use( cors() );
server.use( bodyParser.json() );
server.use( helmet() );

server.get('/', (request, response)=> {
    response.send(`Test Express server!`);
});

server.use('/api/v1/auth', AuthRouter );
server.use( '/api/v1/plants', PlantRoute );
server.use( '/api/v1/users', UserRoute );
server.use( '/api/v1/statuses', StatusRoute );
server.use( '/api/v1/Batches', BatchRoute);

server.listen( 
    port,
    () => {
        console.log(`Express server running on port ${port}`);
    }
);