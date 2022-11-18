const express = require('express');
const router = express.Router();

// Model
const Statuses = require('../models/Statuses');

router.get('/', ( request, response ) => {
   
    // console.log('response',response)
    Statuses.find()
    .then( (result) => {
        console.log( result );  
        response.send( result );
        response.end();
    });
});


router.post('/', ( request, response) => {    
    let newStatuses = new Statuses( request.body );
    
    newStatuses.save().then( result => {
        console.log( result );
        response.send( result );
        response.end();
    });
});

router.put('/:id', ( request, response ) => {
    Statuses.updateOne({ _id: request.params.id }, { $set: { ...request.body } }).then( result => {
        console.log( result ); 
        response.send( result );
        response.end(); 
    });
});

router.delete('/:id', ( request, response ) => {
    Statuses.deleteOne({ _id : request.params.id }).then( result => {
        console.log( result );
        response.send( result );
        response.end();
    });
});

module.exports = router;
