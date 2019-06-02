$(function(){
		//change navbar css when scroll 
		$(window).on("scroll", function(){
			var scroll = $(window).scrollTop();
			
			if(scroll > 100){
				$("#navbar").css({
					"background": "white",
					"top": "0",
					"height" : "70px",
					"line-height": "5.20",
					"transition": "top 0.3s linear,height 0.3s linear,line-height 0.3s linear,background 0.3s linear",
				});
			}else{
				$("#navbar").css({
					"background": "rgba(255,255,255,0.0)",
					"top": "20px",
					"height" : "50px",
					"line-height": "4",
					"transition": "top 0.3s linear,height 0.3s linear,line-height 0.3s linear,background 0.3s linear",
				});
			}
			
		});
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
		//member menu
		$('.us_icons_list li').on('click', function() {
		
			var memberName = $(this).data('name');
			
			
			
			for(var i = 0; i < $('.us_members_list li').length; i++){
				if($('.us_members_list li').eq(i).data('name') === memberName){
					
					$('.us_members_list li').eq(i).removeClass("hidden");
					$('.us_members_list li').eq(i).addClass("active");
					
					var yearColor = "#" + $('.us_members_list li').eq(i).data('color');
					var backgroundColor = "#" + $(this).data('color');
					$('.members_box_right').css({
						background: backgroundColor,
					});
					$(".profile:first-child").css({
						border: "solid 3px" + yearColor,
					});

				}else{
					$('.us_members_list li').eq(i).removeClass("active");
					$('.us_members_list li').eq(i).addClass("hidden");
				}
			}
		});
		//member menu
		$('.us_icons_list li').on('click', function() {
		
			var memberName = $(this).data('name');
			
			for(var i = 0; i < $('.us_members_list li').length; i++){
				if($('.us_members_list li').eq(i).data('name') === memberName){
					
					$('.us_members_list li').eq(i).removeClass("hidden");
					$('.us_members_list li').eq(i).addClass("active");
					
					var yearColor = "#" + $('.us_members_list li').eq(i).data('color');
					var backgroundColor = "#" + $(this).data('color');
					$('.members_box_right').css({
						background: backgroundColor,
					});
					$(".profile:first-child").css({
						border: "solid 3px" + yearColor,
					});
				}else{
					$('.us_members_list li').eq(i).removeClass("active");
					$('.us_members_list li').eq(i).addClass("hidden");
				}
			}
		});
		//news menu clicked
		$(".news_icons_list li").on("click", function(){
			
		});
		//news menu hpver
		$(".news_icons_list li").mouseover(
			function(){
				var eng = $(this).data("name");
				$(this).html(eng);
			}).mouseout(
			function(){
				var jp = $(this).data("jp");
				$(this).html(jp);
		});
		//article menu
		$(".pagingList li a").on("click", function(){
			for(var i = 0; i < $('.pagingList li').length; i++){
				$('.pagingList li a').removeClass("current");
			}
			$(this).addClass("current");
		});
		
		// Show the button when user scroll (jquery)
		$(window).scroll(function() {
			if ($(this).scrollTop() > 20) {
				$("#topBtn").removeClass("hidden");
				$("#topBtn").addClass("active");
				$("#topBtn").stop().animate({
					opacity: 0.8
				}, 100);
			} else {
				$("#topBtn").removeClass("active");
				$("#topBtn").stop().animate({
					opacity: 0
				}, 100);
				setTimeout(function(){
					 $("#topBtn").addClass("hidden");
				},200);
			}
		});

		$('#topBtn').click(function(){
			$('html,body').animate({
			  scrollTop: 0
			}, 'slow');
		});
});