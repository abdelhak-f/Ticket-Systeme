const express = require("express");
const router = express.Router();
const Ticket = require("../models/Employee.model");

router.route("/postemployer").post((req, res) =>{
    const name = req.body.name;
    const email = req.body.email;
    const type = req.body.type;
  
    const newEmployee = new Employee({
        name,
        email,
        type
    });
    newEmployee.save();
})


module.exports = router;