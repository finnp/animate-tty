## usage

```js
var animator = require('animate-tty')([opts, ]animateFn)
```
After `animator.start()` the string returned by `animateFn` is updated to the
terminal repeatedly.

The parameter `runtime` is passed to `animateFn` with the time in milliseconds
elapsed since `animator.start()`.

### opts
* *stream* The stream the output to, defaults to `process.stdout`
* *interval* The frame length in milliseconds, defaults to `100`

### animator.start()

Start the animation.


### animator.stop(keep)

Stop the animation.

* *keep* If set to true, it will keep the last print


### animator.log(str)

Permanently logs *str* before the animation similar to *console.log* normally,
but makes sure it doesn't break the animation.

## example

```js
var animator = require('animate-tty')(function (runtime) {
  return 'Elapsed: '+ Math.floor(runtime / 1000) +' s\n'+ 'Data: ' + Math.random()
})

animator.start()
```

Also see and run `example.js`.