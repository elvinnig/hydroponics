const mongoose = require('mongoose');

const BatchSchema = new mongoose.Schema({
   
    profit: Number,
    dateHarvested: { type: Date, default: Date.now },
    author: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
 
    plants: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Plant'}
    ]
});

module.exports = mongoose.model('Batch', BatchSchema);