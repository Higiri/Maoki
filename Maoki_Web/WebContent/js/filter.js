/*
 *
 */

$(function () {
    $('.filter').filterizr();
    var filterSingle = $('.filter').filterizr({
        layout: 'packed',
        delay: 1, // Transition delay in ms
        delayMode: 'alternate', // 'progressive' or 'alternate'
        easing: 'ease-out',
        
        spinner: {
        	enabled: true,
        	// Further (optional) customization options.
        	fillColor: '#2184D0',
        	styles: {
        	height: '75px',
        	margin: '0 auto',
        	width: '75px',
        	'z-index': 2,
        	},
        },
    });
});

$(document).on('click', '.trigger', function () {
  $('.trigger').removeClass('active');
  $(this).addClass('active');
});

$(document).on('click', '.sort', function () {
	  $('.sort').removeClass('active');
	  $(this).addClass('active');
	});




