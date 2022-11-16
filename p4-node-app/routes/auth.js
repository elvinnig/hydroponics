const express = require('express');
const router = express.Router();

// Model
const Tourist = require('../models/Tourists');

// BCrypt
const bcrypt = require('bcrypt');


router.post('/register', async ( request, response ) => { 
    const hashedPassword = await bcrypt.hash( request.body.password, 10 );
    const newTourist = new Tourist({
        ...request.body,
        password: hashedPassword
    });

    newTourist.save().then( result => {
        response.send({ status: "Tourist has been created" });
    })

});

router.post('/login', ( request, response ) => {
    Tourist.findOne({ email: request.body.email }).then( result => {
        bcrypt.compare( request.body.password, result.password, ( err, match ) => {
            if( match ){
                // Authenticated, valid email and password
                response.send({ 
                    status: "Valid credentials", 
                    id: result._id
                });
            }else{
                response.send({
                    status: "Invalid credentials"
                })
            }    
        });
    });
});


module.exports = router;