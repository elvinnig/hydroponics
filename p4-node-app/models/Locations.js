const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
   // location
    name:      String
  
    // transactions: [
    //     {type: mongoose.Schema.Types.ObjectId, ref: 'Transaction'}
    // ]
});

module.exports = mongoose.model('Location', LocationSchema);