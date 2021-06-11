const mongoose = require('mongoose');

const assignSchema = new mongoose.Schema({
    date : {
        type: String,
        required: true,
    },
    id : {
        type: String,
        required: true, 
    },
    
    urgence: {
        type: String,
        required: true,

    },
    description : {
        type: String,
        required: true,
    },
    etat : {
        type: String,
        // required: true,
    },
    date : {
        type: Date, 
    }
    
});

module.exports  = mongoose.model("assign", assignSchema);