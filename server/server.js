const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const MessageModel = require("./models/portfolioModel");
const path = require("path");

dotenv.config();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
//static files
// app.use(express.static(path.join(__dirname, "../client/dist")));

mongoose.connect("mongodb://127.0.0.1:27017/Portfolio");
const port = process.env.PORT || 8080;
app.post("/sendMessage", (req, res) => {
  MessageModel.create(req.body)
    .then((messages) => res.json(messages))
    .catch((err) => res.json(err));
});

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/dist/index.html"));
// });
//listen
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
