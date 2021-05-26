const Ticket = require("../models/Ticket.model");


// Post Ticket to mongodb
exports.postTicket =  (req, res) => {
    const ticket = new Ticket({
      // créer des nouveaux ticket
  
      title: req.body.title,
      type: req.body.type,
      urgence: req.body.urgence,
      description: req.body.description,
      etat: req.body.etat,
      date: req.body.date,
    });
    // Save a ticket in the MongoDB
    customer.save().then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json({
          message: "Fail!",
          error: err.message
        });
    });

  };