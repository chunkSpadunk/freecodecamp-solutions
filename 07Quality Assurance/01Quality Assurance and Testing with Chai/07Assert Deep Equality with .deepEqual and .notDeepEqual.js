test('#deepEqual, #notDeepEqual', function () {
    assert.deepEqual(
        { a: '1', b: 5 },
        { b: 5, a: '1' },
        "The order of keys doesn't matter"
    );
    assert.notDeepEqual(
        { a: [5, 6] },
        { a: [6, 5] },
        'The order of array elements does matter'
    );
});
