/*
Utils are general building blocks. Platform-specific, but not
application-specific
They're useful for abstracting away the configuration for native methods,
or defining new convenience methods for things like working with files,
data munging, etc.
NOTE: Utils should be general enough to be useful in any Node application.
For application-specific concerns, use `helpers.js`.
*/
const fs = require('fs');
const path = require('path');

module.exports.requireOptional = (filepath) => {
  try {
    return require(filePath);
  } catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
      throw e;
    }
  }
}

module.exports.mkDirPromise = (dirPath) => (
  new Promise((resolve, reject) => {
    fs.mkdir(dirPath, (err) => {
      err ? reject(err) : resolve();
    });
  })
);

module.exports.readFilePromise = (fileLocation) => (
  new Promise((resolve, reject) => {
    fs.readFile(fileLocation, 'utf-8', (err, text) => {
      err ? reject(err) : resolve(text);
    });
  })
);

module.exports.writeFilePromise = (fileLocation, fileContent) => (
  new Promise((resolve, reject) => {
    fs.writeFile(fileLocation, fileContent, 'utf-8', (err) => {
      err ? reject(err) : resolve();
    });
  })
);

module.exports.readFilePromiseRelative = (fileLocation) => (
  module.exports.readFilePromise(path.join(__dirname, fileLocation))
);
