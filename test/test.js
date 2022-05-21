// Red: failing test
const assert = require("chai").assert;

// Green: Update multiply for a passing test
const multiply = require("../multiply");

describe('Testing our Multiplication', () => {
    it('should multiply two numbers', () => {
        assert.equal(multiply(1, 1), 1);
    });
});