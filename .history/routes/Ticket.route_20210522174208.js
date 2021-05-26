const express = require("express");
const router = express.Router();
// const {postTicket } = require("../controllers/Ticket.controller");
const Ticket = require("../models/Ticket.model");


//insert ticket to database
router.route("/postticket").post((req, res) =>{
    const title = req.body.title;
    const type = req.body.type;
    const urgence = req.body.urgence;
    const description = req.body.description;
    const etat = req.body.etat;
    const date = req.body.date;
    const newTicket = new Ticket({
        title,
        type,
        urgence,
        description,
        etat,
        date,
    });
    newTicket.save();
})

// get data from database  
router.route("/getticket").get(function(req, res){   
    Ticket.find({},function(err, data){  
               if(err){  
                   res.send(err);  
               }  
               else{             
                   res.send(data);  
                   }  
           });  
   })  
     
     
   // Delete data from database  
   router.route("/Removedata").post((req,res)=>{   
    Ticket.remove({ _id: req.body.id }, function(err) {  
               if(err){  
                   res.send(err);  
               }  
               else{    
                      res.send({data:"Record has been Deleted..!!"});             
                  }  
           });  
   })  
     
     
   // Update data from database  
   router.route("/Updatedata").post((req,res)=>{   
    Ticket.findByIdAndUpdate(req.body.id, { title:  req.body.title, type: req.body.type, urgence: req.body.urgence,description:req.body.description },   
   function(err) {  
    if (err) {  
    res.send(err);  
    return;  
    }  
    res.send({data:"Record has been Updated..!!"});  
    });  
   })    

module.exports = router;