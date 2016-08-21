
//QUnit.module - pozwala nam grupowac testy ktore napiszemy, stworzy nowy, cos w stylu pojemnika na testy

//Nazwa testu

QUnit.test( "hello world test", function( assert ) {
	assert.ok( 1 == "1", "Passed!" );
});

QUnit.module('Examples - assert.ok, assert.notOk');
QUnit.test( "Examples - assert.ok method tests", function( assert ) {
	assert.ok( true, "true value succeeds" );
	assert.ok( "non-empty", "non-empty string succeeds" );
	
	assert.notOk(false, "false value fails" );
	assert.notOk( 0, "0 value fails" );
	assert.notOk( NaN, "NaN value fails" );
	assert.notOk( "", "empty string fails" );
	assert.notOk( null, "null fails" );
	assert.notOk( undefined, "undefined fails" );
});


QUnit.module('Examples - assert.equal, assert.notEqual');
QUnit.test( "equal test", function( assert ) {
	//sprawdza czy ementy na pierwszych dwuch elementach sa rowne
	
	assert.equal( 0, 0, "Zero, Zero; equal succeeds" );
	assert.equal( "", 0, "Empty, Zero; equal succeeds" );
	assert.equal( "", "", "Empty, Empty; equal succeeds" );
	assert.equal( 0, false, "Zero, false; equal succeeds" );
	
    //kiedy cos nie jest rowne
	
	assert.notEqual( "three", 3, "Three, 3; equal fails" );
	assert.notEqual( null, false, "null, false; equal fails" );
});

QUnit.module('Examples - assert.deepEqual');
QUnit.test( "deepEqual test", function( assert ) {
	
	var obj1 = { foo: "bar" };
	var obj2 = { foo: 'bar' };
	
	//zachowuje sie jak silne porownanie w JS tak jak === np. 2 i '2'
	//porownuje zawartosc np. objektow. 
	assert.deepEqual( obj1, obj2, "Two objects can be the same in value" );
});


QUnit.module('Examples - Splitting into atomic tests');
//ToDo: zmień span na dive
QUnit.test( "2 asserts", function( assert ) {
	var fixture = $( "#qunit-fixture" );

	fixture.append( "<div>hello!</div>" );
	assert.equal( $( "div", fixture ).length, 1, "div added successfully!" );

	fixture.append( "<span>hello 1!</span>" );
	assert.equal( $( "span", fixture ).length, 1, "span added successfully!" );
});


QUnit.module('Examples - assert.throws');
QUnit.test( "throws", function( assert ) {

	function CustomError( message ) {
		this.message = message;
	}

	CustomError.prototype.toString = function() {
		return this.message;
	};

	function CustomError2(message) {
		this.message = message;
	}

	CustomError.prototype.toString = function() {
		return this.message;
	};


	assert.throws(function() { throw "error" },
		"throws with just a message, not using the 'expected' argument"
	);

	//ToDo: zmień typ błędu na CustomError2
	assert.throws(
		function() {
			throw new CustomError();
		},
		CustomError,
		"raised error is an instance of CustomError"
	);

	// ToDo: zmień wyszukiwany string
	assert.throws(
		function() { throw 'some error description'},
		/description/,
		"raised error message contains 'description'"
	);


	// ToDo: zmień treść błędu w expect
	assert.throws(
		function() {
			throw new CustomError("some error description");
		},
		new CustomError("some error description"),
		"raised error instance matches the CustomError instance"
	);

	//ToDo: zmien asercje (porówanie) w funkcji expect
	assert.throws(
		function() {
			throw new CustomError("some error description");
		},
		function( err ) {
			return err.toString() === "some error description";
		},
		"raised error instance satisfies the callback function"
	);
});
