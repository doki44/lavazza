new Swiper('.image-slider', {
    // // Optional parameters
    // direction: 'vertical',
    // loop: true,
  
    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    thumbs: {
        swiper:{
            el: '.image-mini-slider',
            slidesPerView: 5,
        }
    }
});