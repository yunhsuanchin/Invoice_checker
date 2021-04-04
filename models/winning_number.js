const mongoose = require('mongoose')
const Schema = mongoose.Schema
const winningNumberSchema = new Schema({
  prize: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Prize'
  },
  number: {
    type: String,
    required: true
  },
  months: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('WinningNumber', winningNumberSchema)
