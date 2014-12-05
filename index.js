var charm = require('charm')

module.exports = Printer

function Printer(opts, print) {
  if(!(this instanceof Printer)) return new Printer(opts, print)
  
  if(typeof opts == 'function') {
    print = opts
    opts = {}
  }
  this.printFn = print || function() {}
  opts = opts || {}
  this.lineCount = 0
  this.stream = opts.stream || process.stdout
  this.charm = charm(this.stream)
  // this.charm.cursor(true)
  this.scheduledLogs = []
  this.interval = opts.interval || 100
  
  this.startTime = Date.now()
  
}

Printer.prototype.start = function () {
  var self = this
  this.print()
  this.timer = setInterval(this.print.bind(this), this.interval)
}

// log before
Printer.prototype.log = function (str) {
  this.scheduledLogs.push(str)
}

Printer.prototype.erase = function () {
  while(--this.lineCount > 0) {
    this.charm.up(1)
    this.charm.erase('line')
  }
}

Printer.prototype.print = function () {
  this.erase()
  this.writeLogs()

  var output = this.printFn(Date.now() - this.startTime)
  this.lineCount = output.split('\n').length + 1
  this.stream.write(output + '\n')
}

Printer.prototype.writeLogs = function () {
  var log
  while(log = this.scheduledLogs.shift())
    this.stream.write(log + '\n')
}

Printer.prototype.stop = function (stay) {
  this.writeLogs()
  this.print()
  if(!stay) this.erase()
  clearInterval(this.timer)
}

Printer.prototype.end = Printer.prototype.stop