$('#app').append(
  makeCheckboard(
    makeInteractive(
      createTable(8, 8)
    )
  )
);

setInterval(function () {
  var $collection = $('td:not(.black)');
  var n = $collection.length;

  $collection.eq(
    Math.round(
      Math.random() * n
    )
  ).click()
}, 1000);

