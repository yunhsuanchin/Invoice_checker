const express = require('express')
const bodyParser = require('body-parser')
const WinningNumber = require('./models/winning_number')
const Prize = require('./models/prize')
require('./config/mongoose')
const PORT = process.env.PORT || 3000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/', async (req, res) => {
  try {
    const { checkingMonth, checkingNumber } = req.body
    const winningNumbers = await WinningNumber.find({ months: checkingMonth }).populate('prize')
    const invoiceCheck = winningNumbers.find(item => item.number.slice(-3) === checkingNumber)
    console.log('invoiceCheck', invoiceCheck)
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

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
