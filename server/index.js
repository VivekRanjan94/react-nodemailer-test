// Using Express
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000

require('dotenv').config()

app.use(express.json())
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/send-mail', (req, res) => {
  console.log(req)
  console.log('Email sent')

  res.send({ success: true, message: req.body })
})

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`)
})
