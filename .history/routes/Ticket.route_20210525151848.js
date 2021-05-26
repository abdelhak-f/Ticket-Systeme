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
                   res.json("error request");  
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
     
   //get single ticket by id
   router.route("/getticket/:id").get(function(req, res){   
    Ticket.findById(req.params.id,(err, data)=> {  
               if(err){  
                   return Error(err);  
               }  
               else{             
                   res.json(data);  
                   }  
           })  
   })  
     
     
   // Update data from database  
   router.route("/Updateticket/:id").put((req,res, next)=>{  
        //  const id = req.params.id ;  
        //  const data = Ticket.findByIdAndUpdate(id)
         Ticket.findByIdAndUpdate(req.params.id, {
            $set: req.body
          }, (error, data) => {
            if (error) {
              return next(error);
              console.log(error)
            } else {
              res.json(data)
              console.log('Ticket updated successfully !')
            }
          })
    }) 

    // Delete Ticket
router.route('/delete-student/:id').delete((req, res, next) => {
    studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  

module.exports = router;