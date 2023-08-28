test('#isArray, #isNotArray', function () {
    assert.isArray(
        'isThisAnArray?'.split(''),
        'String.prototype.split() returns an array'
    );
    assert.isNotArray([1, 2, 3].indexOf(2), 'indexOf returns a number');
});
