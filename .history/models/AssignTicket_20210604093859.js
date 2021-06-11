const mongoose = require('mongoose');

const assignSchema = new mongoose.Schema({
    date : {
        type: String,
        required: true,
    },
    idTech : {
        type: String,
        required: true, 
    },
    
    idTick: {
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