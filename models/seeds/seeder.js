const mongoose = require('mongoose')
const WinningNumber = require('../winning_number')
const Prize = require('../prize')
const prizeData = require('../data/prize.json')
const numbers = require('../data/number.json')

mongoose.connect('mongodb://localhost/invoice-checker', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error.')
})

db.once('open', async () => {
  try {
    console.log('mongodb connected.')
    await Prize.insertMany(prizeData)
    const prizes = await Prize.find()
    numbers.forEach(item => {
      item.prize = prizes.find(element => element.prize === item.prize)._id
    })
    await WinningNumber.insertMany(numbers)
    console.log('done.')
    process.exit()
  } catch (error) {
    console.log(error)
  }
})
