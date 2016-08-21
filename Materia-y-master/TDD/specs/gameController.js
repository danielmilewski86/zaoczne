QUnit.module('Game Controller - keyboard navigation', {
    beforeEach: function () {
        gameController.restart();
    },
    afterEach: function () {

    }
});

QUnit.test('geting player position', function (assert) {

    assert.deepEqual(
        
        gameController.getPosition(),
        {x:0, y:0},

    'init position is set to (0,0)'
    )

});

QUnit.test('restarting controller',function (assert) {

    gameController.position = {x:10, y:10};
    gameController.restart();

    assert.deepEqual(

        gameController.getPosition(),
        {x:0, y:0},
        'sets posision to (0,0)'
    )

});

QUnit.test('moving player left', function (assert) {



    gameController.left();

    assert.equal(
        gameController.getPosition().x,-1,
        'decresses x coordinate by 1'
    );

});

