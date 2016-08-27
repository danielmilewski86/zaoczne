// var $container = $('#app');
//
// $container.append(
//   createTable(8, 8)
// );

// for(var i = 0; i < 10; i++){
//     setTimeout(function (x) {
//         console.log(x);
//     },1000 * i, i)
// }


// $('td').first()
//
//     .click(function (event) {
//         console.log(event);
//     })
//
//     .click();

//
// $(document).on('scroll', function (event) {
//
//     console.log(event);
// });
//
// $('tr ,td').on('click',function (event) {
//     console.log(event)
// });
//
// $('table').on('click','td',function (event) {
//     $(this).addClass('black');
// });
//
// $('table').click(function (event) {
//     event.preventDefault()
//     return false;
// });

//############################################
function range() {

    var result = [];

    for(var i = 0; i < size;i ++){
        result.push(i);
    }
    return result;
}

var result = range(10).filter(function (ithem) {
    return ithem % 2 === 0;
}).map(function (ithem) {
    return ithem + 10;
}).reduce(function (prev, curr) {
    return prev + curr;
}, 0)