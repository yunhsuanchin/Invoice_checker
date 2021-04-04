const express = require('express')
const port = 3000
const db = require('./config/mongoose')
const app = express()

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
