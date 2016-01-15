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
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require bootstrap/modal
//= require bootstrap.min
//= require jquery.turbolinks
//= require turbolinks
//= require masonry/jquery.masonry
//= require masonry/jquery.event-drag
//= require masonry/jquery.imagesloaded.min
//= require masonry/jquery.infinitescroll.min
//= require masonry/modernizr-transitions
//= require masonry/box-maker
//= require masonry/jquery.loremimages.min
//= require isotope/jquery.isotope
//= require movies
//= require js/jquery.plugin
//= require js/jquery.countdown
//= require_tree .

// var start = $('#airstamp').val();
var start = document.getElementById('airstamp').innerHTML;
var end   = new Date();
start = new Date(start);
var diff = new Date(end - start);
var days = diff/1000/60/60/24;

var date = new Date(days);
alert(date.toString()); // Wed Jan 12 2011 12:42:46 GMT-0800 (PST)
alert("No");

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

$(function(){
	var start = $('#airstamp').val();
	var end   = new Date();

	// end - start returns difference in milliseconds
	var diff = new Date(end - start);

	// get days
	var days = diff/1000/60/60/24;

	document.getElementById("airstamp").innerHTML = days;
	alert(days);
});
