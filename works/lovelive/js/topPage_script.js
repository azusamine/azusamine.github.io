$(function(){
		var h = $(window).height();
		$('#loader-bg ,#loader').height(h).css('display','block');
		//$('main').css('display', 'none');
		
		//carousel
		setTimeout(function(){
			var carousel = $("#carousel").waterwheelCarousel({
				flankingItems: 2,
				separation: 400,
				sizeMultiplier: 0.7,
				separationMultiplier: 0.9,
				speed: 500,
				autoPlay: 6000,
				horizon: 300
			});
			
			if (matchMedia('(max-width: 800px)').matches) {
				 	carousel = $("#carousel").waterwheelCarousel({
					flankingItems: 2,
					separation: 200,
					sizeMultiplier: 0.7,
					separationMultiplier: 0.9,
					speed: 500,
					autoPlay: 6000,
					horizon: 300,
				});
			} else if (matchMedia('(max-width: 1280px)').matches) {
					carousel = $("#carousel").waterwheelCarousel({
					flankingItems: 2,
					separation: 300,
					sizeMultiplier: 0.7,
					separationMultiplier: 0.9,
					speed: 500,
					autoPlay: 6000,
					horizon: 250,
				});
			}
			$("#carousel").swipe({
				swipeStatus: function(event, phase, direction, distance) {
					if (phase === "end") {
						if (direction === "right") {
							carousel.prev();
						} else if (direction === "left") {
							carousel.next();
						} else {
							return false;
						}
					}
				},
				triggerOnTouchEnd: false,
				threshold: 100
			});
			$("#prev").on("click", function() {
			  carousel.prev();
			  return false;
			});
			$("#next").on("click", function() {
			  carousel.next();
			  return false;
			});
		},1200);
		
		//menu
		var menuIcon = $(".menuIcon");
		var nav = $(".overlay-menu");
		var toggleIcon = $(".menuIcon");
		
		menuIcon.on("click", function(){
			if(nav.hasClass("overlay-toggle")){
				nav.removeClass("overlay-toggle");
			}else{
				nav.addClass("overlay-toggle");
			}
		});
		toggleIcon.on("click", function(){
			if (!toggleIcon.hasClass("toggle")) {
				toggleIcon.addClass("toggle");
			} else {
				toggleIcon.removeClass("toggle");
			}
		});
		
	});
	
	$(window).on("load", function(){
		$('#loader-bg').delay(900).fadeOut(800);
		$('#loader').delay(600).fadeOut(300);
		$('main').css('display', 'block');
	});