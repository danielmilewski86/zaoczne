/**
 * Created by DanielM on 2016-09-12.
 */

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

    var zaznaczonyWiersz;

    $("#tabela td").click(function()
{
    if (zaznaczonyWiersz) { // jeśli wcześniej był zaznaczony inny wiersz...
        $(zaznaczonyWiersz).removeClass('player'); // zlikwiduj zaznaczenie
    }
    // już wiemy, który wiersz został kliknięty, przypisz go do zmiennej
    zaznaczonyWiersz = this;
    $(this).addClass('player');
});

});