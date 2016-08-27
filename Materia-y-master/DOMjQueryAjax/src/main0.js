var $container = $('#app');
var $table = $('<table>');

$container.append($table);
for (var i = 0; i < 8; i += 1) {
  $table.append($('<tr>'));
}
for (var i = 0; i < 8; i += 1) {
  $('tr').append($('<td>'))
}
