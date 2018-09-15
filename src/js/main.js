$(document).ready(function () {
    $("#tree_view").filetree({
        collapsed: true,
        animationSpeed: 'fast'
    });

    $(".click_formula").on('click', function () {
        var htm_file = $(this).data('htm');
        if (htm_file == undefined || htm_file == "") return;
        var file_name = `./htm/${htm_file}`;

        var frame = $("#panel_frame");
        frame.attr('src', file_name);
    });
});