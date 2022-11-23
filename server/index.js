const keys = require("./keys")

// Express Setup
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(bodyParser.json())

// Postgres client setup

const { Pool } = require("pg")
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
})

// Command 
// pgClient.on("connect", (client) => {
//     client.query("CREATE TABLE IF NOT EXIST Value")
// })

// Express route definition
app.get("/", (req, res) => {
    res.send("Hello World")
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

