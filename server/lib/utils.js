const { get } = require('https')
const { json } = require('dragonrend')
const { verify } = require('jsonwebtoken')
const config = require('./config')

exports.get = (url, params) => {
  const query = params ? objectToQueryString(params) : ''
  return new Promise(resolve => get(url + query, (res) => resolve(res)))
}

const objectToQueryString = (object) => {
  return Object.keys(object).reduce((str, key, i) => {
    const delimiter = i === 0 ? '?' : '&'
    return str.concat(delimiter, encodeURI(key), '=', encodeURI(object[key]))
  }, '')
}

exports.readJson = (res) => new Promise((resolve) => {
  let data = ''
  res.on('data', (chunk) => data += chunk)
  res.on('end', () => resolve(JSON.parse(data)))
})

const unauthorized = json(401, { error: 'Unauthorized' })

exports.authenticate = ctx => {
  const { authorization } = ctx.request.headers
  if (authorization && authorization.startsWith('Bearer')) {
    try {
      const token = authorization.slice(7, authorization.length)
      ctx.user = verify(token, config.secret)
    } catch {
      return unauthorized
    }
  } else {
    return unauthorized
  }
}
