function createTable(width, height) {
  var $table = $('<table>');
  var $tr, $td;

  for (var y = 0; y < height; y += 1) {
    $tr = $('<tr>');
    for (var x = 0; x < width; x += 1) {
      $td = $('<td>');
      $tr.append($td);
    }
    $table.append($tr);
  }

  return $table;
}

function makeCheckboard($table) {
  $table.find('tr').each(function (y) {
    $(this).find('td').each(function (x) {
      $(this).addClass(
        (x + y) % 2 === 0 ? 'black' : ''
      )
    })
  });

  return $table;
}

function makeInteractive($table) {
  $table.find('td').on('click', function() {
    $(this).toggleClass('black');
  })

  return $table;
}
