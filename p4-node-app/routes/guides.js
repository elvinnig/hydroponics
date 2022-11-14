const express = require('express');
const router = express.Router();

// Model
const Guide = require('../models/Guides');

router.get('/', ( request, response ) => {
    // db.guides.find()
    // console.log('response',response)
    Guide.find()
    .then( (result) => {
        console.log( result );  
        response.send( result );
        response.end();
    });
});


router.post('/', ( request, response) => {    
    let newGuide = new Guide( request.body );
    
    newGuide.save().then( result => {
        console.log( result );
        response.send( result );
        response.end();
    });
});

router.put('/:id', ( request, response ) => {
    Guide.updateOne({ _id: request.params.id }, { $set: { ...request.body } }).then( result => {
        console.log( result ); 
        response.send( result );
        response.end(); 
    });
});

router.delete('/:id', ( request, response ) => {
    Guide.deleteOne({ _id : request.params.id }).then( result => {
        console.log( result );
        response.send( result );
        response.end();
    });
});

module.exports = router;
