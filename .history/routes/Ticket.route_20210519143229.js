const express = require("express");
const router = express.Router();
const {postTicket } = require("../controllers/Client.controller");



router.post("/postclient", postTicket);

router.post('/reply/:id', replyContact);
router.post('/singlecontact/:id', singleContact);
// contactRoutes.post('/search', findContact);

module.exports = router;