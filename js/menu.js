$(function(){
    //menu
    var menuIcon = $(".menuIcon");
    var toggleIcon = $(".menuIcon");
    var overlayMenuC = $(".overlayMenu_container");
    var overlayItem = $(".overlayMenu_item");

    menuIcon.on("click", function(){
        overlayMenuC.css("transition", "transform 0.5s ease-out");
        if(overlayMenuC.hasClass("overlay-toggle")){
            overlayMenuC.removeClass("overlay-toggle");
            overlayItem.removeClass("animated fadeInLeftBig fast delay");
        }else{
            overlayMenuC.addClass("overlay-toggle");
            overlayItem.addClass("animated fadeInLeftBig fast delay");
        }
    });
    toggleIcon.on("click", function(){
        overlayMenuC.css("transition", "transform 0.5s ease-out");
        if (!toggleIcon.hasClass("toggle")) {
            toggleIcon.addClass("toggle");
        } else {
            toggleIcon.removeClass("toggle");
        }
    });
});