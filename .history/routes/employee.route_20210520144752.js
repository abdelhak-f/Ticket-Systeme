const express = require("express");
const router = express.Router();
// const {postTicket } = require("../controllers/Ticket.controller");
const Ticket = require("../models/Ticket.model");

router.route("/postticket").post((req, res) =>{
    const name = req.body.name;
    const type = req.body.type;
    const email = req.body.email;
    const description = req.body.description;
    const etat = req.body.etat;
    const date = req.body.date;
    const newTicket = new Ticket({
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