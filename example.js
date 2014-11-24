var str = 'hello'

var animate = require('./')(function (runtime) {
  return str + Math.random() + '\n' + runtime+ 'ms'
})

setTimeout(function () {
  animate.log('hello what is up')
  animate.log('I can still log stuff')
  animate.log('This is nice')
}, 1000)

setTimeout(function () {
  animate.log('the log')
}, 500)


animate.start()

setTimeout(function () {
  animate.stop()
  console.log('Write after finish!')
}, 2000)