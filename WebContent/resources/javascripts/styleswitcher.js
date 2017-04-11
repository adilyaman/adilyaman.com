jQuery(document).ready(function($) {

	$(".orange" ).click(function()			{ $("#theme-color-style-css" ).attr("href", "./resources/stylesheets/orange.css" ); });
	$(".blue" ).click(function()			{ $("#theme-color-style-css" ).attr("href", "./resources/stylesheets/blue.css" );	});
	$(".green" ).click(function()			{ $("#theme-color-style-css" ).attr("href", "./resources/stylesheets/green.css" ); });
	$(".red" ).click(function()				{ $("#theme-color-style-css" ).attr("href", "./resources/stylesheets/red.css" ); });
	$(".violet" ).click(function()			{ $("#theme-color-style-css" ).attr("href", "./resources/stylesheets/violet.css" ); });
	$(".yellow" ).click(function()			{ $("#theme-color-style-css" ).attr("href", "./resources/stylesheets/yellow.css" ); });
	
	$('.color-switcher li a').click(function(e){
		e.preventDefault();
		$(this).parent().parent().find('a').removeClass('active');
		$(this).addClass('active');
	})
	
	$('.nav-switcher .ss-nav-white').click(function(){
		$('header').removeClass('nav-black').addClass('nav-white');
		$(this).parent().parent().find('a').removeClass('active');
		$(this).addClass('active');
	})
	
	$('.nav-switcher .ss-nav-black').click(function(){
		$('header').removeClass('nav-white').addClass('nav-black');
		$(this).parent().parent().find('a').removeClass('active');
		$(this).addClass('active');
	})
	
	$('#style-selector').animate({
		right: '-205px'
	});

	$('#style-switcher a.ss-close').click(function(e){
		e.preventDefault();
		var div = $('#style-switcher');
		if (div.css('right') === '-220px') {
			$('#style-switcher').animate({
				right: '0'
			});
			$(this).toggleClass('active');
		} else {
			$('#style-switcher').animate({
				right: '-220px'
			});
			$(this).toggleClass('active');
		}
	})
	
	$('.ss-show-screen').mouseenter(function() {
		$(this).next('.ss-screen').slideDown(300);
	});
	$('.ss-show-screen').mouseleave(function() {
		$(this).next('.ss-screen').slideUp(300);
	});
	
})