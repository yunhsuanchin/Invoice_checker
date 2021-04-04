const mongoose = require('mongoose')
const Schema = mongoose.Schema
const prizeSchema = new Schema({
  prize: {
    type: String,
    required: true
  },
  winnings: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Prize', prizeSchema)
