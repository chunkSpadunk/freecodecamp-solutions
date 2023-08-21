test('#strictEqual, #notStrictEqual', function () {
    assert.notStrictEqual(6, '6');
    assert.strictEqual(6, 3 * 2);
    assert.strictEqual(6 * '2', 12);
    assert.notStrictEqual([1, 'a', {}], [1, 'a', {}]);
});
