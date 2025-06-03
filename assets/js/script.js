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

    AOS.init();

    //16. Scroll top button
    $(window).on("scroll", function () {
        var scrollBar = $(this).scrollTop();
        if (scrollBar > 150) {
            $(".scroll-top-btn").fadeIn();
        } else {
            $(".scroll-top-btn").fadeOut();
        }
    })
    $(".scroll-top-btn").on("click", function () {
        $("body,html").animate({
            scrollTop: 0
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
            slidesPerView: 1.4,
        },
        992: {
            slidesPerView: 2.6,
        },
        1450: {
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

//////////////
var swiper = new Swiper(".topSwiper", {
    slidesPerView: 9.5,
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
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 8,
        },
        1400: {
            slidesPerView: 9.5,
        },
    }
});
//////////////


const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('fileElem');
const preview = document.getElementById('preview');
const previewIcon = document.getElementById('preview-icon');

// Click to open file picker
dropArea.addEventListener('click', () => {
    fileInput.click();
});

// When file is selected
fileInput.addEventListener('change', handleFiles);

// Drag and Drop Events
dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add('hover');
});

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('hover');
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.classList.remove('hover');
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        previewFile(files[0]);
    }
});

// Show preview
function handleFiles() {
    const file = fileInput.files[0];
    if (file) {
        previewFile(file);
    }
}

function previewFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
        preview.src = reader.result;
        preview.style.display = 'block';
        previewIcon.style.display = 'none'; // Hide icon
    }
}
