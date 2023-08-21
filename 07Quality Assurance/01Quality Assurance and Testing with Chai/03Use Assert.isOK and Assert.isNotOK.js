test('#isOk, #isNotOk', function () {
    assert.isNotOk(null, 'null is falsey');
    assert.isOk("I'm truthy", 'A string is truthy');
    assert.isOk(true, 'true is truthy');
});
