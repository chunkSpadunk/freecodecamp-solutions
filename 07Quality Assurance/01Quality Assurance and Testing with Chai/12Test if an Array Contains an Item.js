test('Array #include, #notInclude', function () {
    assert.notInclude(winterMonths, 'jul', "It's summer in july...");
    assert.include(backendLanguages, 'javascript', 'JS is a backend language');
});
