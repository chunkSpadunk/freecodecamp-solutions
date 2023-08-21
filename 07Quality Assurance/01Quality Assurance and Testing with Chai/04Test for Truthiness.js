test('#isTrue, #isNotTrue', function () {
    assert.isTrue(true, 'true is true');
    assert.isTrue(
        !!'double negation',
        'Double negation of a truthy value is true'
    );
    assert.isNotTrue(
        { value: 'truthy' },
        'Objects are truthy, but are not boolean values'
    );
});
