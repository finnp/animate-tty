
## requirements 

- animate a changing string
- write additional stuff to stdout that stays



## usage

```js
var progress = require('progress-log')(function (runtime) {
  'Elapsed      : '+runtime+' s\n'+
  verb+': '+pad(pretty(stats.bytes || 0)) +' ('+pretty(speed())+'/s)'+ '\n'+
  (stats.changes >= 0 ?   ' - changes : '+stats.changes+'\n' : '')+
  (stats.blobs >= 0 ?     ' - blobs   : '+stats.blobs+'\n'     : '') +'\n'+
})

progress.start()

progresss.end()

progress.write('this is a log messages') // lol :)
something.pipe(progress) // before / after ?

// progress.log('this is a log message')

```