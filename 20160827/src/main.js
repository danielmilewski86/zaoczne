/**
 * Created by danielmilewski on 27.08.16.
 */

//
// var $container = $('#app');
// var $table = $('<table>');
//
//
// $container.append($table);
//
//
// for(var i = 0; i<8; i+=1){
//     $table.append($('<tr>'));
// }
// //dokleja to td 8 tr
// for(var i = 0; i<8; i+=1){
//     $('tr').append($('<td>'))
// }

//###################################

//przekazuje W i H z funkcji do pentli

function createTable(width, height) {

    var $table = $('<table>');
    var $tr, $td;

    for(var i = 0; i<height; i+=1){

        $tr = $('<tr>');

        for(var j=0; j<width; j+=1){

            $td = $('<td>');

            if((i+j) % 2 === 0){

                $td.addClass('black');
            }
            //po kliknieciu zamienia komurki z bialego na czarny i odwrotnie
            $td.on('click', function () {
              $(this).toggleClass('black');
            });
            $tr.append($td);
        }
        $table.append($tr);
    }
    $('#app').append($table);
}

createTable(8,8);
    //losuje co 1s. klikalne kwadraty, poprzez funkce eq
setInterval(function () {

    // zmienna zawiera komorki i dlugosc(liczby losowe)

    var $collection = $('td:not(.black)');
    var n = $collection.length;

    //Math.round - Zwraca wyrażenie numeryczne dostarczony zaokrąglony do najbliższej liczby całkowitej.
    $collection.eq(Math.round(Math.random() * n)).click()


},1000);



// var $table = $('<table>');
// var $tr, $td;
//
// for(var i = 0; i<8; i+=1){
//     $tr = $('<tr>');
//         for(var j=0; j<8; j+=1){
//             $td = $('<td>');
//             $tr.append($td)
//         }
//     $table.append($tr);
// }
// $('#app').append($table);












// $table.append(
//     $('<tr>')
//
//         .append('<tr></tr>')
//         .append('<td></td>')
//         .append('<td></td>')
//         .append('<td></td>')
//         .append('<td></td>')
//         .append('<td></td>');
// );



