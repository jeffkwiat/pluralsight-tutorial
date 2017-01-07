var fs = require('fs');

if (fs.existsSync('temp')) {
    console.log('Directory exists, removing...');
    if (fs.existsSync('temp/new.txt')) {
        fs.unlinkSync('temp/new.txt');
    }
    fs.rmdirSync('temp');
}

/**
// Sync methods
fs.mkdirSync('temp');
if (fs.existsSync('temp')) {
    process.chdir('temp');
    fs.writeFileSync('test.txt', 'this is some test text for the file');
    fs.renameSync('test.txt', 'new.txt');

    console.log('file has size: ' + fs.statSync('new.txt').size + ' bytes');
    console.log('file contents: ' + fs.readFileSync('new.txt').toString());
}
**/

// Async methods
fs.mkdir('temp', function(err) {
    fs.exists('temp', function(exists) {
        if (exists) {
            process.chdir('temp');
            fs.writeFile('test.txt', 'this is some test text for the file', function(err) {
                fs.rename('test.txt', 'new.txt', function(err) {
                    fs.stat('new.txt', function(err, stats) {
                        console.log('file has size: ' + stats.size + ' bytes');
                        fs.readFile('new.txt', function(err, data) {
                            console.log('file contents: ' + data.toString());
                        });
                    });
                });
            });
        }
    });
});
