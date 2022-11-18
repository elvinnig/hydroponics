const express = require('express');
const router = express.Router();

// Model
const Plant = require('../models/Plants');

router.get('/', ( request, response ) => {
    // db.plants.find()
    // console.log('response',response)
    Plant.find()
    .then( (result) => {
        console.log( result );  
        response.send( result );
        response.end();
    });
});


router.post('/', ( request, response) => {    
    let newPlant = new Plant( request.body );
    
    newPlant.save().then( result => {
        console.log( result );
        response.send( result );
        response.end();
    });
});

router.put('/:id', ( request, response ) => {
    Plant.updateOne({ _id: request.params.id }, { $set: { ...request.body } }).then( result => {
        console.log( result ); 
        response.send( result );
        response.end(); 
    });
});

router.delete('/:id', ( request, response ) => {
    Plant.deleteOne({ _id : request.params.id }).then( result => {
        console.log( result );
        response.send( result );
        response.end();
    });
});

module.exports = router;
