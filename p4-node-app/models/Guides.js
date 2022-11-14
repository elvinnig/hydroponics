const mongoose = require('mongoose');

const GuideSchema = new mongoose.Schema({
    location:  String,
    name:      String,
    rating:    Number,
    img:     String
});

module.exports = mongoose.model('Guide', GuideSchema);