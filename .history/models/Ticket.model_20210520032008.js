const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    type : {
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
        required: true,
    },
    date : {
        type: Date,
      
    }
    
});
 

module.exports  = mongoose.model("ticket", ticketSchema);