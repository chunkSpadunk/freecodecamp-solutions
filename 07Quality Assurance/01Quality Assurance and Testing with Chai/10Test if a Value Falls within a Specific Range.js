test('#approximately', function () {
    assert.approximately(weirdNumbers(0.5), 1, 0.5);
    assert.approximately(weirdNumbers(0.2), 1, 0.8);
});
