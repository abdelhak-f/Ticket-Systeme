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
})



module.exports = router;