const express = require("express");
const router = express.Router();
const {postTicket } = require("../controllers/Ticket.controller");



router.post("/postticket", postTicket);

module.exports = router;