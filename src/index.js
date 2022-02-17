const express = require('express')
const rotuerApi = require('./routes')
const app = express()
const port = 3001

app.use(express.json())

app.listen(port, () => {
    console.log(`Server ok, port: ${port}`);
})

rotuerApi(app)
