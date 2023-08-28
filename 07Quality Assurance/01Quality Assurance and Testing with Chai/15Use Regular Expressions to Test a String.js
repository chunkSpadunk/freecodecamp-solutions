test('#match, #notMatch', function () {
    const regex = /^#\sname\:\s[\w\s]+,\sage\:\s\d+\s?$/;
    assert.match(formatPeople('John Doe', 35), regex);
    assert.notMatch(formatPeople('Paul Smith III', 'twenty-four'), regex);
});
