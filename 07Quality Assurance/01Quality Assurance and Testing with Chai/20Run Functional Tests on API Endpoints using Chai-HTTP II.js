test('Test GET /hello with your name', function (done) {
    chai.request(server)
        .keepOpen()
        .get('/hello?name=xy_z')
        .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(
                res.text,
                'hello this is the name that will pass on to the output'
            );
            done();
        });
});
