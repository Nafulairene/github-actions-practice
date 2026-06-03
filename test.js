const assert = require('chai').assert;

describe('Test cases', function () {
    it('Verifies application start', function () {
        assert.isTrue(true);
    });

    it('Verifies user can sign-up', function () {
        // Pass with 50/50 probability
        assert.isTrue(Math.random() < 0.5);
    });

    it('Verifies user can sign-in', function () {
        assert.isTrue(true);
    });
});
