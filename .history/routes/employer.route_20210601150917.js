const express = require("express");
const router = express.Router();
const Employer = require("../models/Employer.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.route("/postemployer").post((req, res) =>{

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

router.route("/signin").post( async (req, res) => {
//     let { email, password } = req.body;
//     Employer.findOne({ email: email }).then(employer => {
//       if (!employer) {
//         return res.status(404).json({
//           errors: [{ employer: "not found" }],
//         });
//       } else {
//          bcrypt.compare(password, employer.password).then(isMatch => {
//             if (!isMatch) {
//              return res.status(400).json({ errors: [{ password:
//         "incorrect" }] 
//              });
//             }
//         res.status(200).json('loged in');
//     })
//    }
//  })
const {email, password}= req.body;
const user = await Employer.findOne({email: email});
if(!user) return res.status(400).json('email or password incorrect');
const match = await bcrypt.compare(password, user.password);
if(!match) return res.status(400).json('email or password incorrect');
const token = jwt.sign({id: user._id, role: user.type}, process.env.SECRET, { expiresIn: 60 * 60 * 24})
console.log('token', token)
return res.status(cookie('token', token).json({isauth: true, role: user.type});


})




module.exports = router;