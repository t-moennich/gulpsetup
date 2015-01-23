var should = require('../node_modules/chai').should
, expect = require('../node_modules/chai').expect

, assert = require('../node_modules/chai').assert


, foo = 'bar'
, beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.length(3);
expect(beverages).to.have.property('tea').with.length(3);

console.error("warn");

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5)); // 4 is not present in this array so indexOf returns -1

    }),

    it('should return 2', function(){
      assert.equal(0, [1,2,3].indexOf(1)); // 4 is not present in this array so indexOf returns -1

    })
  })
});
