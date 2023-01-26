require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const mongoString =
  "mongodb+srv://matsuryuji:ryujiarcade123@cluster0.tyspzej.mongodb.net/test";
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();
app.use(cors());
app.use(express.json());

const routes = require("./routes/routes");

app.use("/", routes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server Started at ${8080}`);
});
