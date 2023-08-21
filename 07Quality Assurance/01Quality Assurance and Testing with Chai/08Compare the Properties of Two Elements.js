test('#isAbove, #isAtMost', function () {
    assert.isAtMost('hello'.length, 5);
    assert.isAbove(1, 0);
    assert.isAbove(Math.PI, 3);
    assert.isAtMost(1 - Math.random(), 1);
});
