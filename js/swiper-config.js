$(function(){
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        speed: 400,
        spaceBetween: 100,
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 1,
            depth: 10,
            modifier: 1.5,
            slideShadows : false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
         el: '.swiper-pagination',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
            draggable: true,
        },
        keyboard: {
            enabled: true,
        },
        mousewheel: false,
        // Responsive breakpoints
        breakpoints: {
            // when window width is <= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1280: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        }
    });
});