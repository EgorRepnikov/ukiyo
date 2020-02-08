const { get } = require('https')

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
