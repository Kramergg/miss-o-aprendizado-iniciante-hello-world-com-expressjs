const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// EndPoint: /oi
app.get("/oi", (req, res)=> {
    res.send("Olá Mundo!")
})
app.listen(3000)