const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose=require("mongoose")
const MessageModel=require("./models/portfolioModel")

dotenv.config();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
// app.get('/',(req,res)=>{
//     res.send(`<h1>Welcome to  Node Server</h1>`)
// })

mongoose.connect("mongodb://127.0.0.1:27017/Portfolio");
// app.use("/api/v1/portfolio", require("./routes/portfolioRoutes"));

const port = process.env.PORT || 8080;
app.post('/sendMessage',(req,res)=>{
      MessageModel.create(req.body)
      .then(messages=> res.json(messages))
      .catch(err=>res.json(err))
})

//listen
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
