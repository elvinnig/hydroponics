const express = require('express');
const router = express.Router();

// Model
const Batch = require('../models/Batches');

router.get('/', ( request, response ) => {
    
    // console.log('response',response)
    Batch.find()
    .then( (result) => {
        console.log( result );  
        response.send( result );
        response.end();
    });
});


router.post('/', ( request, response) => {    
    let newBatch = new Batch( request.body );
    
    newBatch.save().then( result => {
        console.log( result );
        response.send( result );
        response.end();
    });
});

router.put('/:id', ( request, response ) => {
    Batch.updateOne({ _id: request.params.id }, { $set: { ...request.body } }).then( result => {
        console.log( result ); 
        response.send( result );
        response.end(); 
    });
});

router.delete('/:id', ( request, response ) => {
    Batch.deleteOne({ _id : request.params.id }).then( result => {
        console.log( result );
        response.send( result );
        response.end();
    });
});

module.exports = router;
