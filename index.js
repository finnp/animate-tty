var charm = require('charm')

module.exports = Printer

function Printer(opts, print) {
  if(!(this instanceof Printer)) return new Printer(opts, print)
  
  if(typeof opts == 'function') {
    print = opts
    opts = {}
  }
  this.printFn = print || function() {}
  this.opts = opts || {}
  this.lineCount = 0
  this.stream = opts.stream || process.stdout
  this.charm = charm(this.stream)
  // this.charm.cursor(true)
  
}

Printer.prototype.start = function () {
  var self = this
  this.timer = setInterval(this.print.bind(this), 100)
}

Printer.prototype.print = function () {
  var output = this.printFn()
  while(--this.lineCount > 0) {
    this.charm.up(1)
    this.charm.erase('line')
  }
  this.lineCount = output.split('\n').length
  this.stream.write(output)
}

Printer.prototype.stop = function () {
  clearInterval(this.timer)
}