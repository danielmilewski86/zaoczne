/**
 * Created by DanielM on 2016-09-12.
 */


// function dodaj()
// {
//     nowyWiersz = document.createElement("td");
//     nowyWiersz.innerHTML = "<td>Wiersz</td>";
//     var dodaj = document.getElementById('tabela');
//     dodaj.appendChild(nowyWiersz);
// }

// zmienna trzymająca aktualnie zaznaczony wiersz tabeli, na początku niezdefiniowana

// var zaznaczonyWiersz;
//
// // funkcja definiująca co się będzie działo po kliknięciu na każdy element <tr>
// // znajdujący się w tabeli z atrybutem id #tabela
// $("#tabelka td").click(function()
// {
//     if (zaznaczonyWiersz) { // jeśli wcześniej był zaznaczony inny wiersz...
//         $(zaznaczonyWiersz).removeClass('zaznaczony'); // zlikwiduj zaznaczenie
//     }
//     // już wiemy, który wiersz został kliknięty, przypisz go do zmiennej
//     zaznaczonyWiersz = this;
//     $(this).addClass('zaznaczony');
// });
//
// $(document).ready(function() {
//     function WriteToLog(oEvent){
//         $("#tabelka").append(oEvent.type + oEvent.keyCode + "<br>");
//
//     }
//     $(window).bind("keydown", function(oEvent){
//         WriteToLog(oEvent);
//
//     });
//     $(window).bind("keypress", function(oEvent){
//         WriteToLog(oEvent);
//     });
//     $(window).bind("keyup", function(oEvent){
//         WriteToLog(oEvent);
//
//     });
// });
//$('td').eq(35).addClass('player')

// co się dzieje po kliknięciu na button o id #dodaj
// $("#dodaj").click(function()
// {
//     // jeśli kliknęto na jakiś wiersz w tabeli ..
//     if (zaznaczonyWiersz != null)
//     {
//         // dodaj nowy wiersz tuż za nim
//         $(zaznaczonyWiersz).after($("<tr></tr>"));
//     }
// });

$(document).ready(function () {

    var nowyElement = $('<table border="1">').addClass('player');

    var nowaTabela = $('<tr>');
    var nowaTabela2 = $('<td>');
    
    $('#tabela').append(nowyElement);



    
//http://kursjs.pl/kurs/super-podstawy/petle.php

})
var table = document.getElementById('tabela'); //pobieramy tabelkę

var tableHTML = ''; //rozpoczynamy generowanie kodu tabeli
for (var y=0; y<=10; y++) {

    var tr = '<tr>'; //zaczynam tworzyć nowe tr

    for (var x=0; x<=10; x++) {
        // var tekst = x*y; //tworzymy tekst do wstawienia do komórki

        if (y==0 || x==0) { //jeżeli jest to pierwsza komórka w pionie lub poziomie
            var td = '<th>'+'</th>'; //stwórz nowe th
        } else {
            var td = '<td>'+'</td>'; //stwórz nowe td
        }

        tr += td; //wstaw komórkę do rzędu TR
    }
    tr += '</tr>'; //zakończ tworzenie rzędu

    tableHTML += tr; //wstaw rząd do generowanego kodu HTML
}

table.innerHTML = tableHTML; //gotowy wygenerowany kod HTML wstawiamy do tabeli na stronie


$(document).ready(function () {

    $('td').eq(35).addClass('player');




//http://kursjs.pl/kurs/super-podstawy/petle.php

});