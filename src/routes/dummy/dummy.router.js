const express = require('express')
const dummyRouter = express.Router()

dummyRouter.get("/saluda", (req, res) => {
    res.send("hello world")
})

module.exports = dummyRouter