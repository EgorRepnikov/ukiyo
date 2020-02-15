module.exports = {
  contentType: 'application/json;charset=utf-8',
  parse(body) {
    return JSON.parse(body)
  }
}