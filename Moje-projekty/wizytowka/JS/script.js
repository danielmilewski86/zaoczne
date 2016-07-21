/**
 * Created by DanielM on 2016-07-21.
 */

$('a').click(function(){
    $('html, body').animate({
        scrollLeft: $( $(this).attr('href') ).offset().left
    }, 500);
    return false;
});