test('send {surname: "da Verrazzano"}', function (done) {
    chai.request(server)
        .put('/travellers')
        .send({ surname: 'da Verrazzano' })
        .end(function (err, res) {
            assert.equal(res.status, 200, 'response status should be 200');
            assert.equal(
                res.type,
                'application/json',
                'Response should be json'
            );
            assert.equal(res.body.name, 'Giovanni');
            assert.equal(res.body.surname, 'da Verrazzano');

            done();
        });
});
