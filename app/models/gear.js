const mongoose = require('mongoose')

const gearSchema = new mongoose.Schema({
  rod: {
    type: String,
    required: true
  },
  reel: {
    type: String,
    required: true
  },
  tackle: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Gear', gearSchema)
