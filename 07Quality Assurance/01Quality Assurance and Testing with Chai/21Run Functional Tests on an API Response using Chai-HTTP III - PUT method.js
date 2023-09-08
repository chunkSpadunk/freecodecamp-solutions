test('Send {surname: "Colombo"}', function (done) {
    chai.request(server)
        .keepOpen()
        .put('/travellers')
        .send({ surname: 'Colombo' })
        .end(function (err, res) {
            // all the tests will be here
            assert.equal(res.status, 200, 'response status should be 200');
            assert.equal(
                res.type,
                'application/json',
                'response should be json'
            );
            assert.equal(
                res.body.name,
                'Cristoforo',
                'res.body.name should be "Christoforo"'
            );
            assert.equal(
                res.body.surname,
                'Colombo',
                'res.body.surname should be "Colombo"'
            );
            done();
        });
});
