(function ($) {

	"use strict";
  
	// Window Resize Mobile Menu Fix
	mobileNav();
  
	// Scroll animation init
	window.sr = new scrollReveal();
  
	// Menu Dropdown Toggle
	if ($('.menu-trigger').length) {
	  $(".menu-trigger").on('click', function () {
		$(this).toggleClass('active');
		$('.header-area .nav').slideToggle(200);
	  });
	}
  
	// Smooth scroll con data-target
	$(document).ready(function () {
	  $(document).on("scroll", onScroll);
  
	  // Scroll suave al hacer click en links del nav
	  $('[data-target]').on('click', function (e) {
	
		$(document).off("scroll");
  
		$('[data-target]').removeClass('active');
		$(this).addClass('active');
  
		const targetId = $(this).data('target');
		const target = $("#" + targetId);
  
		if (target.length) {
		  const width = $(window).width();
		  if (width < 991) {
			$('.menu-trigger').removeClass('active');
			$('.header-area .nav').slideUp(200);
		  }
  
		  $('html, body').stop().animate({
			scrollTop: target.offset().top - 130
		  }, 500, 'swing', function () {
			history.replaceState(null, null, `#${targetId}`); // opcional
			$(document).on("scroll", onScroll);
		  });
		}
	  });
	});
  
	function onScroll(event) {
	  const scrollPos = $(document).scrollTop();
	  $('[data-target]').each(function () {
		const currLink = $(this);
		const refElement = $("#" + currLink.data("target"));
		if (
		  refElement.length &&
		  refElement.position().top <= scrollPos &&
		  refElement.position().top + refElement.height() > scrollPos
		) {
		  $('[data-target]').removeClass("active");
		  currLink.addClass("active");
		} else {
		  currLink.removeClass("active");
		}
	  });
	}
  
	// Home seperator
	if ($('.home-seperator').length) {
	  $('.home-seperator .left-item, .home-seperator .right-item').imgfix();
	}
  
	// Home number counterup
	if ($('.count-item').length) {
	  $('.count-item strong').counterUp({
		delay: 10,
		time: 1000
	  });
	}
  
	// Page loading animation
	$(window).on('load', function () {
	  if ($('.cover').length) {
		$('.cover').parallax({
		  imageSrc: $('.cover').data('image'),
		  zIndex: '1'
		});
	  }
  
	  $("#preloader").animate({
		'opacity': '0'
	  }, 600, function () {
		setTimeout(function () {
		  $("#preloader").css("visibility", "hidden").fadeOut();
		}, 300);
	  });
	});
  
	// Window Resize Mobile Menu Fix
	$(window).on('resize', function () {
	  mobileNav();
	});
  
	function mobileNav() {
	  var width = $(window).width();
	  $('.submenu').on('click', function () {
		if (width < 992) {
		  $('.submenu ul').removeClass('active');
		  $(this).find('ul').toggleClass('active');
		}
	  });
	}
  
  })(window.jQuery);
  