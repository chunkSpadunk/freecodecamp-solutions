test('#isString, #isNotString', function () {
    assert.isNotString(Math.sin(Math.PI / 4), 'A float is not a string');
    assert.isString(
        process.env.PATH,
        'An env variable is a string (or undefined)'
    );
    assert.isString(JSON.stringify({ type: 'object' }), 'JSON is a string');
});
