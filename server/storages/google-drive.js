const { config, get, readJson } = require('../lib')

exports.getFilesList = async (folderId) => {
  const res = await get('https://www.googleapis.com/drive/v3/files', {
    key: config.GOOGLE_API_KEY,
    q: `'${folderId}' in parents`
  })
  const body = await readJson(res)
  return body.files
}

exports.pipeFile = async (fileId, stream) => {
  const res = await get(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
    key: config.GOOGLE_API_KEY,
    alt: 'media'
  })
  res.pipe(stream)
}
