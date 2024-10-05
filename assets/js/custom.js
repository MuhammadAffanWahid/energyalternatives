(function ($) {
	"use strict";

	// Preloader
	// $(window).on('load', function () {
	// 	$('.preloader').fadeOut();
	// }
	// );

	// Animation.
    function scrollAnimation() {
        var shouldAnimate = $('body').data('scroll-animation');
        if (true === shouldAnimate) {
            new WOW({
				animateClass: 'ud-animated',
			}).init();
        }
    }
    scrollAnimation();

	// Sticky Header.
	if ($(".srex-header").length) {
		$(window).scroll(function () {
			if ($(window).scrollTop() >= 200) {
				$(".srex-header")
					.removeClass("sticky-top")
					.addClass("sticky-top");
			} else {
				$(".srex-header").removeClass("sticky-top");
			}
		});
	}

    /**
	 * Mobile Menu
	 */
	$("#mobile-menu").metisMenu();
	$("#side-menu").metisMenu();

    /**
	 * Side Popup
	 */
	$(".ud-hamburger-menu").on("click", function () {
		$(".ud-hamburger-menu__btn").toggleClass(
			"ud-hamburger-menu__btn--active"
		);
		$(".overlay").toggleClass("overlay--active");
		$(".ud-side-popup").toggleClass("ud-side-popup--open");
	});
	$(".side-popup-close").on("click", function () {
		$(".ud-hamburger-menu__btn").removeClass(
			"ud-hamburger-menu__btn--active"
		);
		$(".overlay").removeClass("overlay--active");
		$(".ud-side-popup").removeClass("ud-side-popup--open");
	});

	// Click out side of side popup to close it.
	$(document).on("click", ".overlay", function (e) {
		$(".ud-side-popup").removeClass("ud-side-popup--open");
		$(".ud-hamburger-menu__btn").removeClass(
			"ud-hamburger-menu__btn--active"
		);
		$(".overlay").removeClass("overlay--active");
	});


	/**
	 * Popup Video.
	 */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});


	/**
	 * Affan Video Code
	 */
	document.addEventListener('DOMContentLoaded', function() {
		document.getElementById('playButton').addEventListener('click', function(e) {
		  e.preventDefault();
	  
		  // Get the video box and elements
		  var videoBox = document.getElementById('videoBox');
		  var thumbnail = document.getElementById('videoThumbnail');
	  
		  // Replace the image with an iframe but keep it hidden
		  var iframe = document.createElement('iframe');
		//   iframe.src = "https://www.youtube.com/embed/ZSyGd2rYdTI?autoplay=1";
		  iframe.src = "https://www.youtube.com/embed/69MV-5nGk6k?autoplay=1&controls=0&rel=0";
		  iframe.width = "560";
		  iframe.height = "470";
		  iframe.frameBorder = "0";
		  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
		  iframe.allowFullscreen = true;
		  iframe.style.borderRadius = "40px";
		  iframe.style.position = "absolute";
		  iframe.style.top = "0";
		  iframe.style.left = "0";
		  iframe.style.width = "100%";
		  iframe.style.height = "100%";
		  iframe.style.opacity = "0"; // Start with the video hidden
		  iframe.style.transition = "opacity 0.5s ease-in-out"; // Smooth fade-in
	  
		  videoBox.appendChild(iframe);
	  
		  // Fade out the image
		  thumbnail.style.opacity = "0";
	  
		  // Fade in the video
		  setTimeout(function() {
			iframe.style.opacity = "1"; // Fade in the video
		  }, 300); // Small delay to ensure smooth transition
	  
		  // Remove the play button after click
		  this.style.display = "none";
		});
	  });
	// document.getElementById('playButton').addEventListener('click', function(e) {
	// 	e.preventDefault(); // Prevent the default anchor behavior
	  
	// 	// Get the video box and elements
	// 	var videoBox = document.getElementById('videoBox');
	// 	var thumbnail = document.getElementById('videoThumbnail');
	  
	// 	// Replace the image with an iframe but keep it hidden
	// 	var iframe = document.createElement('iframe');
	// 	iframe.src = "https://www.youtube.com/embed/ZSyGd2rYdTI?autoplay=1";
	// 	iframe.width = "560";
	// 	iframe.height = "470";
	// 	iframe.frameBorder = "0";
	// 	iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
	// 	iframe.allowFullscreen = true;
	// 	iframe.style.borderRadius = "40px";
	// 	iframe.style.position = "absolute";
	// 	iframe.style.top = "0";
	// 	iframe.style.left = "0";
	// 	iframe.style.width = "100%";
	// 	iframe.style.height = "100%";
	// 	iframe.style.opacity = "0"; // Start with the video hidden
	// 	iframe.style.transition = "opacity 0.5s ease-in-out"; // Smooth fade-in
	  
	// 	videoBox.appendChild(iframe);
	  
	// 	// Fade out the image
	// 	thumbnail.style.opacity = "0";
	  
	// 	// Fade in the video
	// 	setTimeout(function() {
	// 	  iframe.style.opacity = "1"; // Fade in the video
	// 	}, 300); // Small delay to ensure smooth transition
	  
	// 	// Remove the play button after click
	// 	this.style.display = "none";
	//   });
	/**
	 * Testimonial Slider - Home One
	 */
	$(".srex-testimonial-one__slider").slick({
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
	});

	/**
	 * Testimonial Slider - Home Two
	 */
	$(".srex-testimonial-two__slider").slick({
		dots: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
	});

	$(".srex-testimonial-two__slider__nav__prev").on("click", function () {
		$(".srex-testimonial-two__slider").slick("slickPrev");
	});

	$(".srex-testimonial-two__slider__nav__next").on("click", function () {
		$(".srex-testimonial-two__slider").slick("slickNext");
	});


	/**
	 * Testimonial Slider - Home Three
	 */
	$(".srex-testimonial-three__slider").slick({
		dots: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
	});

	$(".srex-testimonial-three__slider__nav__prev").on("click", function () {
		$(".srex-testimonial-three__slider").slick("slickPrev");
	});

	$(".srex-testimonial-three__slider__nav__next").on("click", function () {
		$(".srex-testimonial-three__slider").slick("slickNext");
	});


	


	/**
	 * Brand Slider.
	 */
	$(".srex-sponsor__items").slick({
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 5,
		slidesToScroll: 5,
		fade: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	});

	/**
	 * Project Slider.
	 */
	$(".srex-portfolio-three__slider").slick({
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 4,
		slidesToScroll: 4,
		fade: false,
		// centerMode: true,
		// centerPadding: $('.slick').find('.single-slide-whatever-you-named-it').outerWidth() / 2,
		// slidesToShow: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	});

	/**
	 * Filter
	 */
	if ($("#srex-ho-filter").length) {
		$("#srex-ho-filter").mixItUp({
			selectors: {
				target: ".filter-item",
				filter: ".filter",
				sort: ".sort-btn",
			},
			animation: {
				animateResizeContainer: false,
				effects: "fade scale",
			},
		});
	}

	/**
	 * Counter Up.
	 */
	$(".counter").counterUp({
		delay: 10,
		time: 1000,
	});

})(jQuery);