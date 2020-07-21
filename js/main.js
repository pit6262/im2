svg4everybody();

$(window).on('load', function(){
	$('body').removeClass('loaded');
});

$(function(){

	// Mobile Menu 
	// ---------------------------------------------- 
	function mobileMenu() {
		var mmNavbar = $('.mobile-navbar'),
			mmClose = $('.mobile-navbar__close'),
			mmContainer = $('.mobile-navbar__container');

		$('.mm-toggle').on('click', function(){
			$('.mm-toggle.burger').toggleClass('is-active')
			mmNavbar.toggleClass('is-open');
			$('body').toggleClass('lock')
		})

	}
	mobileMenu();

	function mmMenu() {
		$('.mm-item > a').on('click', function(){
			$('.mm-item').not($(this).parent()).removeClass('is-active')
			$(this).parent().toggleClass('is-active')
			
			return false;
		})
	}
	mmMenu();
	function ctMenu() {
		$('.ct-item > a').on('click', function(){
			$('.ct-item').not($(this).parent()).removeClass('is-active')
			$(this).parent().toggleClass('is-active')
			
			return false;
		})
	}
	ctMenu();

	function dropdown() {
		$('.dropdown-button').on('click', function(){
			$('.dropdown').not($(this).parent()).removeClass('is-open')
			$(this).parent('.dropdown').toggleClass('is-open')
			
			return false;
			
		})

		$('.dropdown-menu > li').on('click', function(){
			var thisText = $(this).html();
			$(this).parents('.dropdown').removeClass('is-open').find('.dropdown-button').html(thisText);
			$(this).parents('.dropdown').find('.dropdown-menu li').removeClass('is-active')
			$(this).addClass('is-active')
			return false;
			
		})
	}
	dropdown();


	function ctFilterMenu() {
		$('.ct-filter-item > a').on('click', function(){
			$('.ct-filter-item').not($(this).parent()).removeClass('is-active')
			$(this).parent().toggleClass('is-active')
			
			return false;
		})

		$('.ct-filter-option > a').on('click', function(){
			var thisText = $(this).html();
			$(this).parents('.ct-filter-item').find('.ct-filter-option').removeClass('is-active')
			$(this).parent().addClass('is-active')
			$(this).parents('.ct-filter-item').removeClass('is-active').addClass('is-selected')
			$(this).parents('.ct-filter-item').children('a').html(thisText);
			return false;
			
		})
	}
	ctFilterMenu();

	

	function openSearch() {
		$('.open-search').on('click', function(){
			$(this).toggleClass('is-active').parents('.search-int').toggleClass('is-open')
			
			return false;
		})
	}
	openSearch();

	function openMoreBlock() {
		$('.i-btn').on('click', function(){
			namebl = $(this).html();
			dataNameBl = $(this).data('title');
			if(namebl == dataNameBl){
				$(this).html('Cвернуть');
				$(this).parents('.i-wrapper').find('.i-hidden-xs').removeClass('i-hidden-xs').addClass('i-visible-xs')
			}else{
				$(this).html(dataNameBl);
				$(this).parents('.i-wrapper').find('.i-visible-xs').removeClass('i-visible-xs').addClass('i-hidden-xs')
			}
			
			return false;
		})
	}
	openMoreBlock();

	

	// function closeSearch() {
	// 	$('.close-search').on('click', function(){
	// 		$('.open-search').removeClass('is-active')
	// 		$('.search-box').removeClass('is-open')
	// 		return false;
	// 	})
	// }
	// closeSearch();

	

	function openNavAndFilter() {
		$('.open-nav').on('click', function(){
			
			$(this).toggleClass('is-active')
			$('.fix-filter').slideUp('200')
			$('.open-filter').removeClass('is-active')
			$('.fix-nav').slideToggle('200')
			return false;
		})
		$('.open-filter').on('click', function(){
			$('.fix-nav').slideUp('200')
			$('.open-nav').removeClass('is-active')
			$(this).toggleClass('is-active')
			$('.fix-filter').slideToggle('200')
			return false;
		})
	}
	openNavAndFilter();

	

	$('.js-minus').click(function () {
		var $input = $(this).parent().find('.counter__input');
		var count = parseInt($input.text()) - 1;
		count = count < 1 ? 1 : count;
		$input.text(count);
		$input.change();
		return false;
	});
	$('.js-plus').click(function () {
		var $input = $(this).parent().find('.counter__input');
		$input.text(parseInt($input.text()) + 1);
		$input.change();
		return false;
	});

	if($('.range-slider').length){
		$( ".range-slider" ).slider({
			range: true,
			min: 1,
			max: 100,
			values: [ 4, 52 ],
			slide: function( event, ui ) {
				$( ".rangefrom" ).val(ui.values[ 0 ].toLocaleString());
				$( ".rangeto" ).val(ui.values[ 1 ].toLocaleString());

			}
		});
		$(".rangefrom").on('change', function() {
			$(".range-slider").slider('values',0,$(this).val());
		});
		$(".rangeto").on('change', function() {
			$(".range-slider").slider('values',1,$(this).val());
		});
	};

	$('a.anchor').bind('click.smoothscroll',function () {
		var target = $(this).attr('href'),
	        bl_top = $(target).offset().top;
		$('body,html').animate({scrollTop: bl_top}, 600);
		return false;
	});


	// magnificPopup 
	// ---------------------------------------------- 
	if($(".open-popup" ).length>0){
		$('.open-popup').magnificPopup({
			type: 'inline',
			midClick: true,
			
		});
	}



	// Slick Slider
	// ---------------------------------------------- 
	if($('.promo-grid').length){
		$('.promo-grid').slick({
			slidesToShow: 6,
			slidesToScroll: 6,
			dots: true,
			appendArrows: '.promo-grid-nav', 
			appendDots: '.promo-grid-nav',
			responsive: [
				{
					breakpoint: 1260,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 5,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				
			]
		});
	};

	if($('.news-slider').length){
		$('.news-slider').slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			dots: true,
			appendArrows: '.news-slider-nav', 
			appendDots: '.news-slider-nav',
			responsive: [
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						variableWidth: true,

					}
				}
			]
		});
	};

	if($('.tour-list').length){
		$('.tour-list').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			dots: true,
			appendArrows: '.tour-list-nav', 
			appendDots: '.tour-list-nav',
			responsive: [
				
				{
					breakpoint: 1260,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						variableWidth: true,

					}
				}
			]
		});
	};

	if($('.news-slider-2').length){
		$('.news-slider-2').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			dots: true,
			appendArrows: '.news-slider-2-nav', 
			appendDots: '.news-slider-2-nav',
			responsive: [
				
				{
					breakpoint: 1260,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						variableWidth: true,

					}
				}
			]
		});
	};

	if($('.news-slider-3').length){
		$('.news-slider-3').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			dots: true,
			appendArrows: '.news-slider-3-nav', 
			appendDots: '.news-slider-3-nav',
			responsive: [
				
				{
					breakpoint: 1260,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						variableWidth: true,

					}
				}
			]
		});
	};


	if($('.interesting-slider').length){
		$('.interesting-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			dots: true,
			appendArrows: '.interesting-slider-nav', 
			appendDots: '.interesting-slider-nav',
			responsive: [
				
				{
					breakpoint: 1260,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						variableWidth: true,

					}
				}
			]
		});
	};

	if($('.category-grid').length){
		$('.category-grid').slick({
			slidesToShow: 6,
			slidesToScroll: 6,
			dots: true,
			appendArrows: '.category-grid-nav', 
			appendDots: '.category-grid-nav',
			responsive: [
				
				{
					breakpoint: 1260,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 5,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				}
			]
		});
	};

	if($('.reviews-slider').length){
		$('.reviews-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: true,
			appendArrows: '.reviews-slider-nav', 
			appendDots: '.reviews-slider-nav',
			responsive: [
				
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
				
			]
		});
	};

	if($('.cards-week').length){
		$('.cards-week').slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: true,
			rows: 2,
			appendArrows: '.cards-week-nav', 
			appendDots: '.cards-week-nav',
			responsive: [
				
				{
					breakpoint: 1260,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},

				
			]
		});
	};

	

	$(window).resize(function(event) {
	    adaptive_function();
	  });
	 
	function adaptive_header2(w,h) {
	   $slick_slider2 = $('.interesting-wrap');
	      settings2 = {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        dots: true,
	        variableWidth: true,
	        appendArrows: '.interesting-wrap-nav', 
			appendDots: '.interesting-wrap-nav',
			
	      }
	    if(w>575){
	      if ($slick_slider2.hasClass('slick-initialized')) {
	          $slick_slider2.slick('unslick');
	        }
	        return
	    }else{
	      if (!$slick_slider2.hasClass('slick-initialized')) {
	        return $slick_slider2.slick(settings2);
	      }
	    }
	}

	function adaptive_function() {
	  var w=$(window).outerWidth();
	  var h=$(window).outerHeight();
	
	adaptive_header2(w,h);
	}
	adaptive_function();

	
	$('.grid').masonry({
		percentPosition: true,
		itemSelector: '.grid-item'
	});


	$('.datepicker-here').datepicker({
		inline: true,
	})

});