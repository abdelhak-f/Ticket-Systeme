const express = require("express");
const router = express.Router();
// const {postTicket } = require("../controllers/Ticket.controller");
const Ticket = require("../models/Ticket.model");

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
    })
})

router.post("/postticket", postTicket);

module.exports = router;