var str = 'hello'

var progress = require('./')(function () {
  return str + Math.random() + '\n'
})

progress.start()