const mongoose = require('mongoose');

const TouristSchema = new mongoose.Schema({
  
    firstName: String,
    lastName:  String,
    email:     String,
    password:  String,
    contactNumber:  String,
    sex:            String,
    address:        String,
    profilePicture: String,
    birthDate:      Date,
    transactions: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Transaction'}
    ]
   
});

module.exports = mongoose.model('Tourist', TouristSchema);