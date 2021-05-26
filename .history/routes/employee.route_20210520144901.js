const express = require("express");
const router = express.Router();
// const {postTicket } = require("../controllers/Ticket.controller");
const Ticket = require("../models/Ticket.model");

router.route("/postemployee").post((req, res) =>{
    const name = req.body.name;
    const email = req.body.email;
    const type = req.body.type;
  
    const newEmployee = new Ticket({
        title,
        type,
        urgence,
        description,
        etat,
        date
    });
    newTicket.save();
})

// router.post("/postticket", postTicket);

module.exports = router;