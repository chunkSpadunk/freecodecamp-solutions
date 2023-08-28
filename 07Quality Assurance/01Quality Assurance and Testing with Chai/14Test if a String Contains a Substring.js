test('String #include, #notInclude', function () {
    assert.include('Arrow', 'row', "'Arrow' contains 'row'");
    assert.notInclude('dart', 'queue', "But 'dart' doesn't contain 'queue'");
});
