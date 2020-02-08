const { config, get, readJson } = require('../lib')

exports.getFilesList = async folderId => {
  const res = await get('https://www.googleapis.com/drive/v3/files', {
    key: config.GOOGLE_API_KEY,
    q: `'${folderId}' in parents`
  })
  const body = await readJson(res)
  const result = []
  for (const item of body.files) {
    if (item.mimeType === 'application/vnd.google-apps.folder') {
      result.push({
        kind: 'folder',
        id: item.id,
        files: await this.getFilesList(item.id),
      })
    } else if (config.MUSIC_TYPES.includes(getFileExtension(item.name))) {
      result.push({
        kind: 'file',
        id: item.id,
        name: item.name,
      })
    }
  }
  return result
}

const getFileExtension = (name) => name.split('.').pop()

exports.pipeFile = async (fileId, stream) => {
  const res = await get(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
    key: config.GOOGLE_API_KEY,
    alt: 'media'
  })
  res.pipe(stream)
}
