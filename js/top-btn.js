 $(function(){		
    var pagetop = $("#topBtn");

    // Show the button when user scroll (jquery)
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            pagetop.removeClass("hidden");
            pagetop.addClass("active");
            pagetop.stop().animate({
                opacity: 0.8
            }, 100);
        } else {
            pagetop.removeClass("active");
            pagetop.stop().animate({
                opacity: 0
            }, 100);
            setTimeout(function(){
                pagetop.addClass("hidden");
            },200);
        }
    });

    pagetop.click(function() {
        $("body, html").animate({ scrollTop: 0 }, 500);
        return false;
    });
});