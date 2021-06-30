// JavaScript Document
$(document).ready(function(){
	//trigger nice scroll
	$("html").niceScroll();
	// custom height of header to height of window
	$(".header").height($(window).height())
	$(window).resize(function(e) {
       $(".header").height($(window).height()) 
    });
	//arrow button
	$(".header .arrow i").click(function(){
		$('html,body').animate({
			'scrollTop': $('.features').offset().top
			},1000)
		
	})
	// show hidden images
	$(".show").click(function(){
		$(".our-work .items .hidden").fadeIn(1000)
	})
	//slider testimonials
	var leftArrow = $('.testimonials .fa-chevron-circle-left'),
	    rightArrow = $('.testimonials .fa-chevron-circle-right')
	function checkclients(){
		if($('.client:first').hasClass('active')){
			leftArrow.fadeOut()
	
		}
		else{
			leftArrow.fadeIn()
		}
		if($('.client:last').hasClass('active')){
			rightArrow.fadeOut()
	
		}
		else{
			rightArrow.fadeIn()
		}
		
	}
	checkclients()
	
	$(rightArrow).click(function(){
		$('.testimonials .active').fadeOut(1000,function(){
			$(this).removeClass('active').next().addClass('active').fadeIn();
			checkclients()
		})
		
	})
	$(leftArrow).click(function(){
		$('.testimonials .active').fadeOut(1000,function(){
			$(this).removeClass('active').prev().addClass('active').fadeIn();
			checkclients()
		})
	})
	
	
	
})