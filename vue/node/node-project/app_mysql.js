const express = require("express");

require("dotenv").config({path : "./mysql/.env"});

const app = express();
const port = 3000;

const cors = require('cors') 
app.use(cors());

app.use(express.urlencoded({ extended : false }));
app.use(express.json());


app.get("/", (req, res) => {
  res.send("hello");
})

app.use("/customer", require("./routers/customer"))
app.use("/board", require("./routers/board"))
app.use("/comment", require("./routers/comment"))

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})