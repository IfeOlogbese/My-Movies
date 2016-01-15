/**
 * Created by Yung_Ifie on 1/11/2016.
 */
$(function () {
    $('#until2d').countdown({until: '+2d'});

    $("#getting-started").countdown(new Date(2016, 1, 1), function(event) {
        $(this).text(
            event.strftime('%D days %H:%M:%S')
        );
    });
});