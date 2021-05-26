const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    lname : {
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
    phone : {
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