const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: 'ticket',: {
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
    
   
    
});

module.exports  = mongoose.model("ticket", ticketSchema);