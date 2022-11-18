const express = require('express');
const router = express.Router();

// Model
const User = require('../models/Users');


router.get('/', ( request, response ) => {
   
    // console.log('response',response)
    User.find()
    .then( (result) => {
        console.log( result );  
        response.send( result );
        response.end();
    });
});

/* Get a specific user */
router.get('/:id', ( request, response ) => {
    User.findOne(
        { _id: request.params.id },
        { 
            password: 0
        })
    .then( (result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.send( result );
        }
    });
});



// router.post('/', ( request, response) => {    
//     let newUser = new User( request.body );
    
//     newUser.save().then( result => {
//         console.log( result );
//         response.send( result );
//         response.end();
//     });
// });

/* Get all posts of a specific user */
router.get('/:id/batchs', ( request, response ) => {
    User
    .find(
        { _id: request.params.id },
        { 
            posts: 1
        })
    .populate('batchs', '-author -__v')
    .exec( (error, result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.send( result );
        }
    });
});




// Update a user
router.put('/:id', ( request, response ) => {
    const userId = request.params.id;
    User.updateOne(
        { _id: userId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.send({ status: "User has been updated" });
        }
    });
});

// Add post to user posts
router.put('/:userId/posts/:postId', ( request, response ) => {
    User.updateOne(
        { _id: request.params.userId }, 
        { $push: { posts: request.params.postId }}
    ).then( result => {
        if( result.modifiedCount === 1 ){
            response.send({ status: "Post has been added to user" });
        }
    });
});

// Delete a user
router.delete('/:id', ( request, response ) => {
    User.deleteOne(
        { _id: request.params.id }
    )
    .then( result => {
        if( result.deletedCount === 1 ){
            response.send({
                status: "User has been deleted"
            });
        }
    });
});



// router.put('/:id', ( request, response ) => {
//     User.updateOne({ _id: request.params.id }, { $set: { ...request.body } }).then( result => {
//         console.log( result ); 
//         response.send( result );
//         response.end(); 
//     });
// });

// router.delete('/:id', ( request, response ) => {
//     User.deleteOne({ _id : request.params.id }).then( result => {
//         console.log( result );
//         response.send( result );
//         response.end();
//     });
// });

module.exports = router;
