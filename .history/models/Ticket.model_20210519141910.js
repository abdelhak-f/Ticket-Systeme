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
        type: Number,
        required: true,
        unique: true
    },
    message : {
        type: String,
        required: true,
    },
    //date: {timestamps : true}
});
 

module.exports  = mongoose.model("client", ticketSchema);