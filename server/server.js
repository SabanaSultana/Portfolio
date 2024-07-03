const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
// app.get('/',(req,res)=>{
//     res.send(`<h1>Welcome to  Node Server</h1>`)
// })

app.use("api/v1/portfolio", require("./routes/portfolioRoutes"));

const port = process.env.PORT || 8080;

//listen
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
