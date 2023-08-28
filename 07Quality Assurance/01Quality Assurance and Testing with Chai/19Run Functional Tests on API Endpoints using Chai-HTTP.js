test('Test GET /hello with no name', function (done) {
    chai.request(server)
        .keepOpen()
        .get('/hello')
        .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'hello Guest');
            done();
        });
});
