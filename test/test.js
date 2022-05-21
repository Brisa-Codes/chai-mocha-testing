// Red: failing test
const assert = require("chai").assert;

// Green: Update multiply for a passing test
const multiply = require("../multiply");

describe('Testing our Multiplication', () => {
    it('should multiply two numbers', () => {
        assert.equal(multiply(1, 1), 1);
    });

    // Red: write another failing test
    it('should multiply 2 with 2 to get 4', () => {
        assert.equal(multiply(2, 2), 4);
    });

    //  Green:  pass the test
    it('should multiply 3 with 3 to get 9', () => {
        assert.equal(multiply(3, 3), 9);
    });
});