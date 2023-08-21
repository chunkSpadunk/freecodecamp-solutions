test('#isDefined, #isUndefined', function () {
    assert.isDefined(null, 'null is not undefined');
    assert.isUndefined(undefined, 'undefined IS undefined');
    assert.isDefined('hello', 'A string is not undefined');
});
