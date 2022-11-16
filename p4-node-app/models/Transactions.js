const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
   tourists: Object,
   locations: Object,
   guides: Object,

    // tourists: 
    //     { type: mongoose.Schema.Types.ObjectId , ref: 'Tourist' },
    // locations: 
    //     { type: mongoose.Schema.Types.ObjectId , ref: 'Location' },
    // guides: 
    //     { type: mongoose.Schema.Types.ObjectId , ref: 'Guide' }
    
});

module.exports = mongoose.model('Transaction', TransactionSchema);