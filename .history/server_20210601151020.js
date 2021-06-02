require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser')
const ticketRouter = require("./routes/Ticket.route");
const employerRouter = require("./routes/employer.route");
app.use(cors({
  origin: ''
}));
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
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use("/", ticketRouter);
app.use("/", employerRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app listen in port ${PORT}`);
});