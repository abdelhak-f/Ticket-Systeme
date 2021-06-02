const express = require("express");
const router = express.Router();
const Employer = require("../models/Employer.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.route("/postemployer").post((req, res) =>{
    // const name = req.body.name;
    // const email = req.body.email;
    // const type = req.body.type
  
    // const newEmployer = new Employer({
    //     name,
    //     email,
    //     type
    // });
    // newEmployer.save();
    let { name, email, password, type } = req.body;
    Employer.findOne({email: email})
   .then(user=>{
      if(user){
         return res.status(422).json({ errors: [{ user: "email already exists" }] });
      }else {
         const user = new User({
           name: name,
           email: email,
           password: password,
         });
         bcrypt.genSalt(10, function(err, salt) { bcrypt.hash(password, salt, function(err, hash) {
         if (err) throw err;
         user.password = hash;
         user.save()
             .then(response => {
                res.status(200).json({
                  success: true,
                  result: response
                })
             })
             .catch(err => {
               res.status(500).json({
                  errors: [{ error: err }]
               });
            });
         });
      });
     }
  }).catch(err =>{
      res.status(500).json({
        errors: [{ error: 'Something went wrong' }]
      });

 })
})



module.exports = router;