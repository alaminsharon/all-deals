(function ($) {

    //1. Button Hover JS

    $(function () {
        $('.default-btn')
            .on('mouseenter', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            })
            .on('mouseout', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            });
    });



})(jQuery)


var swiper = new Swiper(".cardSwiper", {
    slidesPerView: 6.5,
    spaceBetween: 30,
    centeredSlides: false,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    speed: 800,
});

//////////////
let ourSlider = new Swiper('.aboutSwiper', {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 10,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    speed: 800,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 6,
        }
    }
});
//////////////