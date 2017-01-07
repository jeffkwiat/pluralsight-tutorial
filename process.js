process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdout.write(process.getuid().toString());

process.stdin.on('data', function(chunk) {
    process.stdout.write('Data -> ' + chunk);
});

process.stdin.on('end', function() {
    process.stderr.write('End!');
});

process.on('SIGTERM', function() {
    process.stderr.write('why are you trying to terminate me!?');
});

