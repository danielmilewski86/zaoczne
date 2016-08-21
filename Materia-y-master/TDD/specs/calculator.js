QUnit.module('Calculator');

QUnit.test( "add method", function( assert ) {

    assert.equal(Calc.add(10,20),30,'adding positive values');
    assert.equal(Calc.add(-10,20),10,'adding negative valuse');

    assert.throws(function () { Calc.add(5, 'Ala') },
        /Invalid parameter/,
        'passing string as second params throws');

    assert.throws(function () { Calc.add() },
        /Invalid parameter/,
        'not passing any params throws exception');

    assert.throws(function () { Calc.add(10) },
        /Invalid parameter/,
        'passing one numeric param throws exception');



});



QUnit.test( "sub method", function( assert ) {

});

QUnit.test( "multiply method", function( assert ) {

});

QUnit.test( "divide method", function( assert ) {

    
});



