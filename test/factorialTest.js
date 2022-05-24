// Red: failing test
const assert = require('chai').assert;

const factorialize = require('../factorial');
// Green: Update multiply for a passing test
const multiply = require('../factorial');

describe('Testing our Factorial', () => {
  // first factorial test
  it('should factorilize 4 and return 24', () => {
    assert.equal(factorialize(4), 24);
  });
    // second factorial test
    it('should factorilize 5 and return 120', () => {
        assert.equal(factorialize(5), 120);
    });

    // third factorial test
    it('should factorilize 6 and return 720', () => {
        assert.equal(factorialize(6), 720);
    });

});