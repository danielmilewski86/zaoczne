/**
 * Created by Domowy on 2016-09-15.
 */

//Metoda map() tworzy nową tablicę z wynikami wywołanej funkcji dla każdego elementu w tablicy.

//callback:
// Funkcja tworząca element nowej tablicy z jednego z bieżących elementów.

//thisArg:
// Opcjonalnie. Obiekt do użycia jako this, kiedy wykonujemy callback.



// W temacie pracy domowej - poprzez zaimplementowanie funkcji `map`, `filter`, `reduce`
// miałem na myśli napisanie ich tak, jakby normalnie nie było ich w prototypie funkcji `Array`. Co za tym idzie - w przypadku `map` rozwiązanie wygląda następująco:


// transform - funkcja służąca do zamiany konkretnego elementu tablicy w trakcie iteracji
//
Array.prototype.map2 = function(transform) {
    var result = [];

    // pamiętajmy, że this wskazuje na tablicę, na której wywołamy funkcję map
    // np. [1, 2, 3].map(function (item) { return item + 1; }) - daje nam w efekcie [2, 3, 4]
    for (var i = 0; i < this.length; i += 1) {
        // tutaj pamiętajmy, że transform z założenia będzie funkcją
        result.push(transform(this[i], i, this));
    }

    return result;

};


console.log([1, 2, 3].map(function (item) { return item + 1; })); //-> [2, 3, 4]
console.log([1, 2, 3].map2(function (item) { return item + " Testowy String"; })); //-> [2, 3, 4]


// var strings = ["hello", "Array", "WORLD"];
// function makeUpperCase(v)
// {
//     return v.toUpperCase();
// }
// var uppers = strings.map(makeUpperCase);

// uppers są teraz pisane wielkimi literami ["HELLO", "ARRAY", "WORLD"]
// strings są niezmienione



// var liczby = [1, 4, 9];
// var pierwiastki = liczby.map(Math.sqrt);
// // otrzymane pierwiastki [1, 2, 3]
// // pozostające nadal liczby [1, 4, 9]
//
//console.log(pierwiastki);





