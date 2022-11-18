const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
   crop: Array,
   count: Number,
   image: Array,
    statuses: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Status'}
    ],

});

module.exports = mongoose.model('Plant', PlantSchema);