// for this challenge we will be working on test # 1
// you need to change the current code to match the code below in test section 1

test('#isNull, #isNotNull', function () {
    assert.isNull(
        null,
        'This is an optional error description - e.g. null is null'
    );
    assert.isNotNull(1, '1 is not null');
});
