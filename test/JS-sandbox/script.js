/**
 * Created by Domowy on 2016-08-01.
 */

//################  nstrukcja warunkowa if ################


// var firstName = 'maciej';
//
// if(firstName !== ' '){ // jezeli firstName nie jest rowne pustemu ciagawi znakow
//
//     console.log('czesc, ' + firstName);
// }else{
//     console.log('czesc nieznajomy'); //jesli w zmiennej firstName bedzie pusty ciag znakow to if sie nie wykona a wykona sie else
// }
//
// var number = 20;
//
// if(number < 30){
//     console.log('liczba jest mniejsza od 30');
// }else if(number > 10){
//     console.log('liczba jest wieksza od 10');
// }else{
//     console.log('liczba nie jest mniejsza od 30 ani wieksza od 10');
// }


//###################### instrukcja warunkowa switch    #############

// var number = 1;
//     word = '';

// if(number === 1){
//     word = 'jeden';
// }else if(number === 2){
//     word = 'dwa';
// }else if(number === 3){
//     word = 'trzy';
// }else{
//     word = 'wartowsc nieznana'
// }

// TO SAMO, TYLKO INSTRUKCJA switch

// switch (number){
//
//     case 1: //przypadek
//         word = 'jeden';
//         break; // to jest tak jakby przerwanie, gdy w tej linijce zosatnie pominiety, to przeskoczy do 'dwa' kesli w 'dwa' pominiemy break to wskozy do 'trzy'
//     case 2:
//         word = 'dwa';
//         break;
//     case 3:
//         word = 'trzy';
//         break;
//     default:
//         word = 'wartowsc nieznana';
//
// }
//
//
// console.log('wartosc to: ' + word);

// #######################  PETLA WHILE (dopuki) ######################

// var number = 10;
//
// while (number > 0){
//     console.log(number);
//     number--; //zmniejszenie number o 1
// }
//
// var secretNumber = 2;
//
// while (prompt('podaj liczbe') != secretNumber){ //
//
//     alert('nie trafiles');
// }
//
// alert('brawo');


//----------------------------- JQuare ----------------------------------------------//



$(document).ready(function () {

    //do wszystkich elementow na stronie zostanie dodana linia kropkowana czerwona
    //$('*').css('border', '2px dotted red');

    // wszystkie elementy p zostana otoczone linia czerwona
    //$('p').css('border', '2px dotted red');

    //wszystkie elementy z klasa tekst otrzymaja ramke
    //$('.tekst').css('border', '2px dotted red');

    // wyszukanie po id elementu
    //$('#abc').css('border', '2px dotted red');

    //wybieramy jakie elementy maja byc zaznaczone
    //$('#abc, .tekst, h1').css('border', '2px dotted red');

});

$(document).ready(function () {

    //wszyscy potomkowie
    //wszystkie elementy p znajdujace sie sie id otoczka
    //var selector = '#otoczka p';

    //bezposrednie dzieci
    // wszystkie elementy p ktore sa dziecmi tego diva z id otoczka
    //var selector = '#otoczka > p'

    //nastepny brat danego elementu
    //znajduje pierwszego brata czyli po h1 pierwszy znacznik p
    //var selector = 'h1 + p'

    //wszyscy nastepni bracia danego elementu
    //var selector = 'p ~ p';

    // $(selector).css('background','#abcdef');
    //
    // $('body').prepend('<center><h1>$("' +selector+'")</h1></center>');


});

//---------------selektory i filtry: "this"
$(document).ready(function () {

    //szukamy wszystkie elementy p w divie o id otoczka i beda reagowaly na klikniecie
    //$('#otoczka p').click(function () {
        //hide - ukrycie elementow p w div o id otoczka
        //$('#otoczka p').hide('slow');

        //this - dana akcja ukrycia bedzie tylko na wybranym przez nas elemencie
        //$(this).hide('slow');
    //})
});

//------------- podstawowe filtry --------
$(document).ready(function () {

// filtry: first, last, not(bez cudzysłowu), eq, gt, lt, header, even, odd

    //var selektor = 'p:first';
    //var selektor = 'p:last'; //podswietla elementy nie parzyste
    //var selektor = 'p:even'; // podswietla elementy parzyste
    //var selektor = 'p:odd';
    //var selektor = 'p:gt(2)'; // wiekszy niz, podswietlamy elementy o indeksie wiekszym niz 2
    //var selektor = 'p:lt'; // mniejszy niz, podswietlamy elementy o indeksie mniejszym niz 2
    //var selektor = 'p:not(.gruby)'; // nie zostanie otoczony p, z klasa guby
    //var selektor = 'p:eq(0)'; //wybieramy ktory element p ma zostac obramowany. w nawiasach podajemy liczbe
    //var selektor = ':header'; // zaznaczone elementy ktore sa naglowkami
    //$(selektor).css('border','2px solid #abcdef');

    //$('body').prepend('<center><h1>$("'+selektor+'")</h1></center>')
});

//------------------ filtry potomków ---------------------//

$(document).ready(function () {

    //:first-child, :last-chiled - pierwszy/ostatni potomek
    //:nth-child(3n+30 - wybierz co trzeci zaczynajac od trzeciego
    //:only-child - element, ktory jest jedynym potomkiem rodzica

    // var selektor = '#otoczka :first-child';
    // $(selektor).css('border','2px solid #abcdef');
    //
    // $('body').prepend('<center><h1>$("'+selektor+'")</h1></center>');
});

//--------------------- inne filtry--------
$(document).ready(function () {

   //:button, :input, :password, :disabled, :submit

    // var selektor = ':button:last'; // przypisuje ostatniemu przyciskowi wlasciwosci css
    // $(selektor).css('border','2px solid #abcdef');
    //
    // $('body').prepend('<center><h1>$("'+selektor+'")</h1></center>');
});

//-------------- filtry atrybutow -------------
$(document).ready(function () {

    //[nazwa-atrybutu] - element posiada dany atrybut
    //[atrybut = 'dokladna tresc (uwaga na wielkosc znakow!)']
    // [atrybut != 'tresc'] - bez takiego atrybutu lub ma inna tresc
    // [atrybut *= 'tresc'] - zawiera m.in dana tresc
    // [atrybut $= 'tresc'] i [atrybut ^= 'tresc'] - konczy/zaczyna sie dana tresc
    // [atrybut ~= 'tresc'] - zawiera cale slowo
    // [atrybut1 = 'tresc'][atrybut2 = 'tresc2'] - kilka atrybutow

    var selektor = '[class]';
    $(selektor).css('border','2px solid #abcdef');

    $('body').prepend('<center><h1>$("'+selektor+'")</h1></center>');
});