const mongoose = require('mongoose')

const config = require('./config')

module.exports = () =>
  mongoose
    .connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(instance => {
      console.log('MongoDB has been connected')
      return instance
    })
    .catch(e => console.log(e))