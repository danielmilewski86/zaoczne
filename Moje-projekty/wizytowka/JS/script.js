/**
 * Created by DanielM on 2016-07-21.
 */
closeModal = function() {
    $('#openModal').hide();
};

openModal = function() {
    $('#openModal').show();
};
jQuery(function($)
    {
        //zresetuj scrolla
        $.scrollTo(0);

        $('#link1').click(function() { $.scrollTo($('#banner'), 500); });
        $('#link2').click(function() { $.scrollTo($('#features'), 500); });
        $('#link3').click(function() { $.scrollTo($('#skills'), 500); });
        $('#link4').click(function() { $.scrollTo($('#contact'), 500); });


        $('.scrollup').click(function() { $.scrollTo($('body'), 1000); });
    }
);

//pokaż podczas przewijania
$(window).scroll(function()
    {
        if($(this).scrollTop()>300) $('.scrollup').fadeIn();
        else $('.scrollup').fadeOut();
    }
);

$(document).ready(function () {

    $('h6').bind('click',function () {
        $('.banner-project').toggle('slow');
    })
});



function sprawdz_formularz()
{
    // przypisanie obiektu formularza do zmiennej
    var f = document.forms['formularz'];
    // sprawdzenie imienia
    if (f.nameFirst.value == '')
    {
        f.nameFirst.focus();
        return false;
    }
    // sprawdzenie Email
    if (f.adressFirst.value == '')
    {
        f.adressFirst.focus();
        return false;
    }
    if(!f.remember.checked == true){

        $(function(){
            // $('.komunikat2').hide();
            setTimeout(function(){
                $('.komunikat2').click().fadeIn('slow');
            },300);
            setTimeout(function(){
                $('.komunikat2').click().fadeOut('slow');
            },2500);

        });
        event.preventDefault();
        return false;
    }
    else
    {
        $(function(){
            // $('.komunikat').hide();
            setTimeout(function(){
                $('.komunikat').click().fadeIn('slow');
            },300);
            setTimeout(function(){
                $('.komunikat').click().fadeOut('slow');
            },2500);

        });
        event.preventDefault();
        return true;
    }
}