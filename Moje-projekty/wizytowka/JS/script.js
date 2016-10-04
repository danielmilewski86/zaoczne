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

