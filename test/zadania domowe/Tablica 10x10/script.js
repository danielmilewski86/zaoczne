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

var zaznaczonyWiersz;

// funkcja definiująca co się będzie działo po kliknięciu na każdy element <tr>
// znajdujący się w tabeli z atrybutem id #tabela
$("#tabelka td").click(function()
{
    if (zaznaczonyWiersz) { // jeśli wcześniej był zaznaczony inny wiersz...
        $(zaznaczonyWiersz).removeClass('zaznaczony'); // zlikwiduj zaznaczenie
    }
    // już wiemy, który wiersz został kliknięty, przypisz go do zmiennej
    zaznaczonyWiersz = this;
    $(this).addClass('zaznaczony');
});

$(document).ready(function() {
    function WriteToLog(oEvent){
        $("#tabelka").append(oEvent.type + oEvent.keyCode + "<br>");

    }
    $(window).bind("keydown", function(oEvent){
        WriteToLog(oEvent);

    });
    $(window).bind("keypress", function(oEvent){
        WriteToLog(oEvent);
    });
    $(window).bind("keyup", function(oEvent){
        WriteToLog(oEvent);

    });
});
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


