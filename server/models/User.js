const { Schema, model } = require('mongoose')
const privatePaths = require('mongoose-private-paths')

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    private: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
})

schema.plugin(privatePaths)

module.exports = model('users', schema)