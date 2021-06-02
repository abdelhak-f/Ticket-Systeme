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
         return res.status(422).json({ errors: [{ newEmployer: "email already exists" }] });
      }else {
         const newEmployer = new Employer({
           name: name,
           email: email,
           password: password,
           type: type
         });
         bcrypt.genSalt(10, function(err, salt) { bcrypt.hash(password, salt, function(err, hash) {
         if (err) throw err;
         newEmployer.password = hash;
         newEmployer.save()
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

exports.signin = (req, res) => {
    let { email, password } = req.body;
    Employer.findOne({ email: email }).then(employer => {
      if (!employer) {
        return res.status(404).json({
          errors: [{ user: "not found" }],
        });
      } else {
         bcrypt.compare(password, user.password).then(isMatch => {
            if (!isMatch) {
             return res.status(400).json({ errors: [{ password:
"incorrect" }] 
             });
            }
    }
}



module.exports = router;