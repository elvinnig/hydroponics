const mongoose = require('mongoose');

const GuideSchema = new mongoose.Schema({
    name:   String,
    status: String
});

module.exports = mongoose.model('Guide', GuideSchema);