
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  '@': resolve('src'),
  '@c': resolve('src/components'),
  '@p': resolve('src/plugins'),
  '@m': resolve('src/mixins'),
  '@f': resolve('src/features')
}
