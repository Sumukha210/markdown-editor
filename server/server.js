const express = require("express");
const PORT = process.env.port || 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(
    `mongodb+srv://<${process.env.USERNAME}>:<${process.env.PASSWORD}>@cluster0.xjptn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Example app listening at http://localhost:${PORT}`);
    })
  )
  .catch(err => console.log("SOMETHING WENT WRONG!!FAILED TO CONNECT", err));
