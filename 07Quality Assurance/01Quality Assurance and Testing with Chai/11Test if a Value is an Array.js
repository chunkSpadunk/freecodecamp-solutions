test('#isArray, #isNotArray', function () {
    assert.fail(
        'isThisAnArray?'.split(''),
        'String.prototype.split() returns an array'
    );
    assert.fail([1, 2, 3].indexOf(2), 'indexOf returns a number');
});
