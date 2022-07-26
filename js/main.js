AOS.init();

// var swiper = new Swiper(".mySwiper", {
//     scrollbar: {
//       el: ".swiper-scrollbar",
//       hide: true,
//     },
// });

var swiper = new Swiper(".advisorsSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    // loop: true,
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