const mongoose = require('mongoose');

const TouristSchema = new mongoose.Schema({
  
    name:      String,
    address:   String,
    contact:   Number,
    transactions: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Transaction'}
    ]
});

module.exports = mongoose.model('Tourist', TouristSchema);