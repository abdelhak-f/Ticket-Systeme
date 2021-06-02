const express = require("express");
const router = express.Router();
const Employer = require("../models/Employer.model");

// router.route("/postemployer").post((req, res) =>{
//     const name = req.body.name;
//     const email = req.body.email;
//     const type = req.body.type
  
//     const newEmployer = new Employer({
//         name,
//         email,
//         type
//     });
//     newEmployer.save();
// })

exports.register = ( (req, res) => {
    // Form validation
  
    const { errors, isValid } = validateRegisterInput(req.body);
  
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          // add every thing in body
          ...req.body
        });
  
        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });


module.exports = router;