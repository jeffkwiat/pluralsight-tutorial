var request = require('request')
var fs = require('fs');
var zlib = require('zlib');

request('http://www.pluralsight.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'));

/**
s.on('data', function(chunk) {
    console.log('>>>>Data>>>> ' + chunk);
});

s.on('end', function() {
    console.log('>>>>Done>>>>');
});
**/

// s.pipe(process.stdout);