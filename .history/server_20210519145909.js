require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const ticketRouter = require("./routes/Ticket.route");
app.use(cors());
// connecter a la base de donnée
mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log(err.message);

  });

app.use(express.json());

// app.use("/", ticketRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app listen in port ${PORT}`);
});