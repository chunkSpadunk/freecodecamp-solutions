test('#typeOf, #notTypeOf', function () {
    assert.typeOf(myCar, 'object');
    assert.typeOf(myCar.model, 'string');
    assert.notTypeOf(airlinePlane.wings, 'string');
    assert.typeOf(airlinePlane.engines, 'array');
    assert.typeOf(myCar.wheels, 'number');
});
