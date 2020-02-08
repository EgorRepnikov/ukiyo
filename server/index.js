require('dotenv').config()

const { dragonrend } = require('dragonrend')

const { START } = dragonrend({ autoIncluding: true })

START(8080, () => console.log('Server has been started'))
