AOS.init();

var swiper = new Swiper(".advisorsSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        spaceBetween: 30,
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 30,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".partnersSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
        0: {
        slidesPerView: 1,
        spaceBetween: 30,
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 30,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
        slidesPerView: 4,
        spaceBetween: 30,
        },
    },
});

jQuery(document).on('ready', function($) {
    "use strict";

    var $page = $('html, body');
    $('a[href*="#header"], a[href*="#create-better-ukraine"], a[href*="#phases"], a[href*="#approach"], a[href*="#advisors"], a[href*="#partners"], a[href*="#engage"], a[href*="#footer"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });

}(jQuery));