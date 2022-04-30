$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('body').addClass('sidebar-open');
    });
    $('.header-sidebar .close, .overlay').click(function(){
        $('body').removeClass('sidebar-open');
    });

    // Slider JS
    const homeSlider = new Swiper(".home-banner", {
      spaceBetween: 0,
      centeredSlides: false,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
    });
    const testiSlider = new Swiper(".testimonial-slider", {
      spaceBetween: 0,
      centeredSlides: false,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
});

$(window).scroll( () => {
    var windowTop = $(window).scrollTop();
    windowTop > 100 ? $('.header').addClass('sticky') : $('nav').removeClass('sticky');
});
