test('Test GET /hello with your name', function (done) {
    chai.request(server)
        .keepOpen()
        .get('/hello?name=this is the name that will go onto the output')
        .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(
                res.text,
                'hello this is the name that will go onto the output'
            );
            done();
        });
});
