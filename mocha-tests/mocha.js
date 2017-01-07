var should = require('should');
var math = require('./mathstuff');

describe('MathStuff', function() {
    describe('testing doubleIt', function() {
        it('should double the number', function(done) {
            math.doubleIt(17).should.equal(34);
            done();
        });
        
        it('should not square the number', function(done) {
            math.doubleIt(17).should.equal(17 * 17);
            done();
        });
    })
})