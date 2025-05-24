(function ($) {

    /*
        1. Header Button
        2. Mobile Menu
    */

    //1. Header Button

    $(".header_toggle_btn").on("click", function () {
        $(".mobile-menu").toggleClass("active");
    });


    //2. Mobile Menu

    $(".mobile-menu .close").on("click", function () {
        $(".mobile-menu").removeClass("active");
    });

    $(".mobile-menu ul li.has-submenu i").each(function () {
        $(this).on("click", function () {
            $(this).siblings('ul').slideToggle();
            $(this).toggleClass("icon-rotate");
        });
    });

    $(".mobile-menu ul li.has-submenu a").each(function () {
        $(this).on("click", function () {
            $(this).siblings('ul').slideToggle();
            $(this).toggleClass("icon-rotate");
        });
    });


})(jQuery);


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