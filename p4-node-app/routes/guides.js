const express = require('express');
const router = express.Router();

// Model
const Guide = require('../models/Guide');

router.get('/', ( request, response ) => {
    // db.guides.find()
    Guide.find().then( result => {
        console.log( result );
        response.send( result );
    });
});

router.post('/', ( request, response ) => {
    
    let newGuide = new Guide( request.body );
    
    newGuide.save().then( result => {
        console.log( result );
    });
});

router.put('/:id', ( request, response ) => {
    Guide.updateOne({ _id: request.params.id }, { $set: { ...request.body } }).then( result => {
        console.log( result );  
    });
});

router.delete('/:id', ( request, response ) => {
    Guide.deleteOne({ _id : request.params.id }).then( result => {
        console.log( result );
    });
});

module.exports = router;
