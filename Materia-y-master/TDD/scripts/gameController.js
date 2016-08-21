
$(document).on('keydown', function(event) {
	switch (event.keyCode) {
		case 38: gameController.up(); break;
		case 40: gameController.down(); break;
		case 37: gameController.left(); break;
		case 39: gameController.right(); break;
	}
});




gameController = {

	position: {x: 0, y: 0},
	
	restart: function() {

		this.position = {x:0, y:0}
	},

	left: function() {
		this.position.x--;
	},

	right: function() {
		this.position.y--;
	},

	up: function() {},

	down: function() {},

	getPosition: function() {
		return this.position;
	}

};
