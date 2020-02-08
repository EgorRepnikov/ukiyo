const googleDrive = require('./google-drive')

const storages = {
  'google-drive': googleDrive,
}

exports.getFilesList = (storageName, folderId) =>
  storages[storageName].getFilesList(folderId)

exports.pipeFile = (storageName, fileId, stream) =>
  storages[storageName].pipeFile(fileId, stream)
