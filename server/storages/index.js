const googleDrive = require('./google-drive')

const storages = {
  'google-drive': googleDrive,
}

exports.getFilesList = (storageKey, searchData) =>
  storages[storageKey].getFilesList(searchData)

exports.pipeFile = (storageName, searchData, stream) =>
  storages[storageName].pipeFile(searchData, stream)
