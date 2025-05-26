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

    //2. Default Btn
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


})(jQuery);


//////////////
var swiper = new Swiper(".cardSwiper", {
    slidesPerView: 6.5,
    spaceBetween: 10,
    centeredSlides: false,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    speed: 800,
    breakpoints: {
        370: {
            slidesPerView: 1.9,
        },
        768: {
            slidesPerView: 3.5,
        },
        992: {
            slidesPerView: 4.5,
        },
        1200: {
            slidesPerView: 5.5,
        },
        1400: {
            slidesPerView: 6.5,
        },
    }
});
//////////////


//////////////
let ourSlider = new Swiper('.aboutSwiper', {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 30,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    speed: 800,
    breakpoints: {
        370: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 6,
        }
    }
});

//////////////

//////////////
var swiper = new Swiper(".featureSwiper", {
    slidesPerView: 4.8,
    spaceBetween: 30,
    centeredSlides: false,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    speed: 800,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
        370: {
            slidesPerView: 1.8,
        },
        992: {
            slidesPerView: 2.8,
        },
        1200: {
            slidesPerView: 4.8,
        }
    }
});
//////////////


//////////////
var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 3.3,
    spaceBetween: 30,
    centeredSlides: false,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    speed: 800,
    breakpoints: {
        370: {
            slidesPerView: 1.18,
        },
        992: {
            slidesPerView: 2.3,
        },
        1200: {
            slidesPerView: 3.3,
        }
    }
});
//////////////