const { Schema, model } = require('mongoose')
const privatePaths = require('mongoose-private-paths')

const schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  storages: [
    {
      name: {
        type: String,
        required: true,
      },
      folder: {
        type: String,
        required: true,
      }
    }
  ]
})

schema.plugin(privatePaths)

module.exports = model('settings', schema)