const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    contactNumber: String,
    address: String,
    batches: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Batch'}
    ]
   
});

module.exports = mongoose.model('User', UserSchema);