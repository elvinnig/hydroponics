const mongoose = require('mongoose');

const GuideSchema = new mongoose.Schema({
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
    ],

});

module.exports = mongoose.model('Guide', GuideSchema);