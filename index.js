const express = require("express")
const os = require("os")
const fs = require("fs")
const app = express()

app.get("/", (req, res) => {
  fs.readFile("./index.html", (err, dt) => {
    res.write(dt)
  })
})

app.listen(1000)