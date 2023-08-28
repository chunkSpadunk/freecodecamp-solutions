test('#property, #notProperty', function () {
    assert.notProperty(myCar, 'wings', "Cars don't have wings");
    assert.property(airlinePlane, 'engines', 'Planes have engines');
    assert.property(myCar, 'wheels', 'Cars have wheels');
});
