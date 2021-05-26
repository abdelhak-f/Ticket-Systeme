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
    
    
    
});
 

module.exports  = mongoose.model("ticket", ticketSchema);