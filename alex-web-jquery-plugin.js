 (function( $ ){

  $.fn.alexWebPlugin = function( options ) {  

    var settings = $.extend( {
		'location_img' : 'icon.png',
		'background_color' : 'blue',
		'border_size' : '3',
		'border_color' : 'blue',
		'bottom' : '30',
		'right' : '30',
		'color_pulse': 'blue',
		'width_pulse': '130%',
		'height_pulse': '130%',
		'url_your_site': 'https://www.google.ru'
    }, options);

    return this.each(function() {   

    	$(this).append("<img src=" + settings.location_img +" alt='img-alex'>");
    	$(this).append("<div class='pulse-element pulse'></div>");

    	$(this).css({
	    	"background": settings.background_color,
	    	"border": settings.border_size + 'px solid ' + settings.border_color,
	    	"bottom": settings.bottom + "px",
	    	"right": settings.right + "px"
    	});

    	$(this).children('.pulse-element').css({
	    	"background": settings.color_pulse,
	    	"height": settings.height_pulse,
	    	"width": settings.width_pulse
    	});

    	$(this).attr("href", settings.url_your_site);


    	console.log(this);
      

    });

  };
})( jQuery );
