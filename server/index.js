// Using Express
const express = require('express')
const app = express()
const cors = require('cors')
const nodemailer = require('nodemailer')
const PORT = 5000

require('dotenv').config()

app.use(express.json())
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
)

app.post('/send-mail', async (req, res) => {
  const { email, subject, body } = req.body.body

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  })

  const msg = {
    from: 'Inbooks <Inbooks@noreply.com>', // sender address
    to: `${email}`, // list of receivers
    subject: `${subject}`, // Subject line
    text: `${body}`, // plain text body
  }
  // send mail with defined transport object
  const info = await transporter.sendMail(msg)

  res.send('Email Sent!')
})

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`)
})
