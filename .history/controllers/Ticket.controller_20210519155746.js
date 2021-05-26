const Ticket = require("../models/Ticket.model");


// Post te client to mongodb
exports.postTicket = async (req, res) => {
    const ticket = new ticket({
      // créer des nouveaux ticket
  
      title: req.body.title,
      type: req.body.type,
      urgence: req.body.urgence,
      description: req.body.description,
      etat: req.body.etat,
      date: req.body.date,
    });
    try {
      const newTicket = await ticket.save();
      res.status(201).json(newTicket);
    } catch (error) {
      res.status(400).json({ massage: error.message });
    }
    
  };