test('#equal, #notEqual', function () {
    assert.equal(12, '12', 'Numbers are coerced into strings with ==');
    assert.notEqual(
        { value: 1 },
        { value: 1 },
        '== compares object references'
    );
    assert.equal(6 * '2', '12');
    assert.notEqual(6 + '2', '12');
});
