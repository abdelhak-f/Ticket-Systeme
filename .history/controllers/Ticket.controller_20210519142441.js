const Ticket = require("../models/Client.model");


// Post te client to mongodb
exports.postClient = async (req, res) => {
    const client = new Client({
      // créer des nouveaux clients
  
      title: req.body.title,
      type: req.body.type,
      urgence: req.body.urgence,
      description: req.body.phone,
      message: req.body.message,
    });
    try {
      const newClient = await client.save();
      res.status(201).json(newClient);
    } catch (error) {
      res.status(400).json({ massage: error.message });
    }
  };