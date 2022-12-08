const PORT = process.env.PORT || 5000;

// Express Setup
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors") //allow our axios request 

const app = express()
app.use(cors())
app.use(bodyParser.json())

// Express route definition
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));



