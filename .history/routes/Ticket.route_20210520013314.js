const express = require("express");
const router = express.Router();
// const {postTicket } = require("../controllers/Ticket.controller");
const Ticket = require("../models/Ticket.model");

router.route("/postticket").post

router.post("/postticket", postTicket);

module.exports = router;