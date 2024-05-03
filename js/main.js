;(function($){
"use strict";
    
    //sticky Header
	var wind = $(window);
	var sticky = $('.header-area');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 150) {
			sticky.removeClass('menu-fixed');
		} else {
			sticky.addClass('menu-fixed');
		}
	});
    
	// Preloader
	$(window).on('load', function () {
		$('.se-pre-con').fadeOut();
	});
    
})(jQuery)


new VenoBox({
	selector: '.my-video-links',
});






$('.all-wir-slider').slick({
	arrows: false,
	centerMode: false,
	slidesToShow: 3,
	slidesToScroll: 1,
 	centerMode: true,
 	centerPadding:"250px",
 	autoplaySpeed: 2000,
	 dots: true,
	responsive: [
	  {
		breakpoint: 1367,
		settings: {
		  centerPadding: '40px',
		  slidesToShow: 4
		}
	  },
	  {
		breakpoint: 1101,
		settings: {
		  centerPadding: '40px',
		  slidesToShow: 3
		}
	  },
	  {
		breakpoint: 768,
		settings: {
		  centerPadding: '40px',
		  slidesToShow: 2
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  centerPadding: '40px',
		  slidesToShow: 1
		}
	  }
	]
});


$('.all-gentlenero-slider').slick({
	arrows: false,
	centerMode: false,
	slidesToShow: 10,
	slidesToScroll: 1,
	centerMode: true,
	centerPadding: '60px',
 	autoplaySpeed: 2000,
	 dots: false,
	 swipeToSlide:true,
	responsive: [
	  {
		breakpoint: 1101,
		settings: {
		  centerPadding: '40px',
		  slidesToShow: 7
		}
	  },
	  {
		breakpoint: 768,
		settings: {
		  centerPadding: '40px',
		  slidesToShow: 3
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  centerPadding: '40px',
		  slidesToShow: 2
		}
	  }
	]
});
  