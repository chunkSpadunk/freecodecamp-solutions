test('#isBelow, #isAtLeast', function () {
    assert.isAtLeast('world'.length, 5);
    assert.isAtLeast(2 * Math.random(), 0);
    assert.isBelow(5 % 2, 2);
    assert.isBelow(2 / 3, 1);
});
