$(document).ready(function () {

    function createBoard(size) {




        var $table = $('<table>').appendTo('#app'),
            $row, $cell;

        for (var rowNum = 0; rowNum < size; rowNum++) {
            $row = $('<tr>').appendTo($table);
            for (var cellNum = 0; cellNum < size; cellNum++) {
                $cell = $('<td>').addClass('cell').appendTo($row);

                // KOLOROWANIE TUTAJ
                var isBlack = rowNum % 2 ? cellNum % 2 : !(cellNum % 2);

                if (isBlack) {
                    $cell.addClass('black')
                        .attr('data-color', 'jestem czarny!!')
                        .attr('data-fightOrder', 'bijemy drudzy =(');
                } else {
                    $cell.addClass('white').attr('data-color', 'jestem bialy!!');
                }

                $cell.click(function () {
                    console.log(this.dataset.color, this.dataset.kolejnoscbicia);
                })

            }
        }
    }

    $(document).ready(function () {

        var size = 8;

        createBoard(size);
    })

});