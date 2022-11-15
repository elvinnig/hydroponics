const mongoose = require('mongoose');

const GuideSchema = new mongoose.Schema({
    img:  String,
    name:      String,
    address: String,
    contact: Number,
    description: String,
    rating:    Number,
    // transactions: [
    //     {type: mongoose.Schema.Types.ObjectId, ref: 'Transaction'}
    // ]
});

module.exports = mongoose.model('Guide', GuideSchema);