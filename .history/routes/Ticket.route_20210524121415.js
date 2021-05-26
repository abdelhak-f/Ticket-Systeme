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
    const id = req.params.id ;  
    const data = await Ticket.findById(id)
         data.title =  req.body.title, 
         data.type =  req.body.type, 
         data.urgence =  req.body.urgence,
         data.description =  req.body.description, 
         data.etat =  req.body.etat, 
         data.date =  req.body.date ,
         const result = await data.save();
         res.send(result);

        try {
            await Ticket.findByIdAndUpdate(id,data,(err,updatedData)=>{
                if(!err) res.send(`Updated data`)
                else console.log(err)
            })
        } catch (error) {
            console.log(error)
        }

    }
) 

module.exports = router;