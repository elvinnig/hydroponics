const mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({
   
   status: String,
   dateCreated: { type: Date, default: Date.now }
   
    
});

module.exports = mongoose.model('Status', StatusSchema);