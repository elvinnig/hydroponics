const express = require('express');
const router = express.Router();

// Model
const Location = require('../models/Locations');

router.get('/', ( request, response ) => {
    
    // console.log('response',response)
    Location.find()
    .then( (result) => {
        console.log( result );  
        response.send( result );
        response.end();
    });
});


router.post('/', ( request, response) => {    
    let newLocation = new Location( request.body );
    
    newLocation.save().then( result => {
        console.log( result );
        response.send( result );
        response.end();
    });
});

router.put('/:id', ( request, response ) => {
    Location.updateOne({ _id: request.params.id }, { $set: { ...request.body } }).then( result => {
        console.log( result ); 
        response.send( result );
        response.end(); 
    });
});

router.delete('/:id', ( request, response ) => {
    Location.deleteOne({ _id : request.params.id }).then( result => {
        console.log( result );
        response.send( result );
        response.end();
    });
});

module.exports = router;
