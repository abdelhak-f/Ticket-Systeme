const express = require("express");
const router = express.Router();
const {postTicket } = require("../controllers/Ticket.controller");



router.post("/postclient", postTicket);



module.exports = router;