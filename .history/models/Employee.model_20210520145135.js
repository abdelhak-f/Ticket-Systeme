const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/,
    "please provide a valid email"
]
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