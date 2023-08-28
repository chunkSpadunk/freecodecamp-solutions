test('#instanceOf, #notInstanceOf', function () {
    assert.notInstanceOf(myCar, Plane);
    assert.instanceOf(airlinePlane, Plane);
    assert.instanceOf(airlinePlane, Object);
    assert.notInstanceOf(myCar.wheels, String);
});
