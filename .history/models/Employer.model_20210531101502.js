const mongoose = require('mongoose');

const employerSchema = new mongoose.Schema({
    name:  {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        // required: true,
        unique: true,
        match: [/^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/,
    "please provide a valid email"
]
    },

    password: {
        type: String,
        required: true
     }
    type : {
        type: String,
        // required: true, 
    },
    
   
    
});

module.exports  = mongoose.model("employer", employerSchema);