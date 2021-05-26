const express = require("express");
const router = express.Router();
// const {postTicket } = require("../controllers/Ticket.controller");
const Ticket = require("../models/Ticket.model");

router.route("/postticket").post((req, res) =>{
    const title = req.body.title;
    const type = req.body.type;
    const urgence = req.body.title;
    const description = req.body.title;
    const etat = req.body.title;
    const date = req.body.title
})

router.post("/postticket", postTicket);

module.exports = router;