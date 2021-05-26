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
   router.route("/Removeticket").post((req,res)=>{   
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
   router.put("/Updateticket/:id", async (req,res)=>{ 
    const id = req.body._id ;
    const ticket = await Ticket.findById(id);
    ticket.title:  req.body.title, 
    ticket.type: req.body.type, 
    ticket.urgence: req.body.urgence,
    ticket.description:req.body.description, 
    ticket.etat:req.body.etat, 
         date:req.body.date , 
     
     

     try {
         await Ticket.findByIdAndUpdate(id,data,(err,updatedData)=>{
             if(!err) res.send(`Updated ticket`)
             else console.log(err)
         })
     } catch (error) {
         console.log(error)
     }

 }
) 

module.exports = router;