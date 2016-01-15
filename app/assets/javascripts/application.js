// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require masonry/jquery.masonry
//= require bootstrap
//= require jquery_ujs
//= require turbolinks
//= require_tree .


setInterval(function(){
    var start = document.getElementById('airstamp').innerHTML;
    var end   = new Date();

    var diff = new Date(start) - end;
    var totalSec = diff/1000;
    var days = parseInt(totalSec/60/60/24);
    var hours = parseInt( totalSec / 3600 ) % 24;
    var minutes = parseInt( totalSec / 60 ) % 60;
    var seconds = parseInt(totalSec % 60);

    var result = '<div class="panel panel-primary"><div align="center">' + (days < 10 ? "0" + days : days) + ' days ' + (hours < 10 ? "0" + hours : hours) + " hrs " + (minutes < 10 ? "0" + minutes : minutes) + " min " + (seconds  < 10 ? "0" + seconds : seconds) + ' sec  </div></div>';

    if(diff > 0)
    {
        document.getElementById("next").innerHTML = result;
        $('#next').show();
        $('#airstamp').show();
    }

    else
    {
        var error = '<div class="panel panel-default"><div align="center">No countdown for this movie</div></div>';
        document.getElementById("next").innerHTML = error;
        $('#next').show();
        $('#airstamp').show();
    }

}, 1000);

$('#until2d').countdown({until: '+2d'});
$("#getting-started").countdown(new Date(2016, 1, 1), function(event) {
    $(this).text(
        event.strftime('%D days %H:%M:%S')
    );
});

$(function() {
    $("#list .pagination a").on("click", function(){
        $.getScript(this.href);
        return false;
    });

    $("#movie_search").submit(function(){
        $.get(this.action, $(this).serialize(), null, "script");
        return false;
    });
});
