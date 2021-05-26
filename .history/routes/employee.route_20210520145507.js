const express = require("express");
const router = express.Router();
const Ticket = require("../models/Employee.model");

router.route("/postemployee").post((req, res) =>{
    const name = req.body.name;
    const email = req.body.email;
    const type = req.body.type;
  
    const newEmployee = new Employee({
        name,
        email,
        type,
    });
    newEmployee.save();
})

// router.post("/postticket", postTicket);

module.exports = router;