(function($) {
	"use strict"

	///////////////////////////
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});

	///////////////////////////
	// Scrollspy
	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	///////////////////////////
	// Smooth scroll
	$("#nav .main-nav a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

	///////////////////////////
	// Btn nav collapse
	$('#nav .nav-collapse').on('click', function() {
		$('#nav').toggleClass('open');
	});

	///////////////////////////
	// Mobile dropdown
	$('.has-dropdown a').on('click', function() {
		$(this).parent().toggleClass('open-drop');
	});

	///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

		// Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});

	// ///////////////////////////
	// // magnificPopup
	// $('.work').magnificPopup({
	// 	delegate: '.lightbox',
	// 	type: 'image'
	// });

	///////////////////////////
	// Owl Carousel
	$('#about-slider').owlCarousel({
		items:1,
		loop:true,
		margin:15,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		dots : true,
		autoplay : true,
		animateOut: 'fadeOut'
	});

	$('#testimonial-slider').owlCarousel({
		loop:true,
		margin:15,
		dots : true,
		nav: false,
		autoplay : true,
		responsive:{
			0: {
				items:1
			},
			992:{
				items:2
			}
		}
	});

	$(".main-btn").click(function(event){
		event.preventDefault();
		
		var container = $(this).parent("form");

		var name = container.find("[name='Name']").val();
		var email = container.find("[name='Email']").val();
		var subject = container.find("[name='Subject']").val();
		var message = container.find("[name='Message']").val();

		var mail = ("Name: " + name + "\n");
			mail += ("Email: " + email + "\n");
			mail += ("Subject: " + subject + "\n");
			mail += ("Message: " + message + "\n");
			

		var url = "https://formspree.io/mandhsolution@gmail.com";

		$.ajax({
			url: url,
			type: "post",
			data: {
				text: mail,
				email: email
			},
			success: function(result){
				alert("Mail sent.");
				window.location.reload();
			},
			error: function(result){
				alert("Error while sending mail.");
			}
		});

		return false;
	});

})(jQuery);
