const express = require('express')
const bodyParser = require('body-parser')
const WinningNumber = require('./models/winning_number')
const Prize = require('./models/prize')
const cors = require('cors')
require('./config/mongoose')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const PORT = process.env.PORT
const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/', async (req, res) => {
  try {
    const { checkingMonth, checkingNumber } = req.body
    console.log('body', req.body)
    const winningNumbers = await WinningNumber.find({ months: checkingMonth }).populate('prize')
    const invoiceCheck = winningNumbers.find(item => item.number.slice(-3) === checkingNumber)
    if (invoiceCheck) {
      return res.json({
        status: 'success',
        invoice: invoiceCheck.number,
        isWinner: true,
        amount: invoiceCheck.prize.winnings
      })
    } else {
      return res.json({
        status: 'success',
        isWinner: false
      })
    }
  } catch (error) {
    console.log(error)
  }
})

app.get('/', async (req, res) => {
  try {
    let winningNumbers = await WinningNumber.find()
    winningNumbers = [...new Set(winningNumbers.map(item => item.months))]
    return res.json(winningNumbers)
  } catch (error) {
    console.log(error)
  }
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
