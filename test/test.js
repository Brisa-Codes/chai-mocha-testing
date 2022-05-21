// Red: failing test

const assert = require("chai").assert;

describe('Testing our Multiplication', () => {
    it('should multiply two numbers', () => {
        assert.equal(multiply(1, 1), 1);
    });
});