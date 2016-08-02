describe("About Functions", function() {

  it("should declare functions", function() {

    function add(a, b) { //parametry funkcji
      return a + b; //zwraca a i b w dodoawaniu
    }

    expect(add(1, 2)).toBe(3); //wywolanie funkcji i nadanie im parametrow liczbowych a=1 b=2
  });

  it("should know internal variables override outer variables", function () {
    var message = "Outer"; // zmienna globalna i pierwsza funkcja ja łapie i zwraca "Outer"

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      var message = "Inner"; //ta zmienna jest lokalna dlatego return zwroci "Inner"
      return message;
    }

    expect(getMessage()).toBe("Outer"); //globalnie
    expect(overrideMessage()).toBe("Inner"); //lokalnie
    expect(message).toBe("Outer"); // wywolanie zmiennej globalnej
  });

  it("should have lexical scoping", function () {
    var variable = "top-level";
    function parentfunction() {
      var variable = "local";
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toBe("local");
  });

  it("should use lexical scoping to synthesise functions", function () {

    function makeMysteryFunction(makerValue)
    {
      var newFunction = function doMysteriousThing(param)
      {
        return makerValue + param;
      };
      return newFunction;
    }

    var mysteryFunction3 = makeMysteryFunction(3);
    var mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(23);
  });

  it("should allow extra function arguments", function () {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).toBe("first");

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg("only give first arg")).toBe(undefined);

    function returnAllArgs() {
      var argsArray = [];
      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }

    expect(returnAllArgs("first", "second", "third")).toBe("first,second,third");
  });

  it("should pass functions as values", function () {

    var appendRules = function (name) {
      return name + " rules!";
    };

    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe("John rules!");

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe("Mary totally rules!");

  });
});
