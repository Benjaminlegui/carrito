jQuery(function() {
    $('#js-hero__slider').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        vertical: true,
        arrows: false,
        verticalSwiping: true,
        infinite: false,
        dots: true,
        appendDots: $('.hero__slider-dots'),
        autoplay: true,
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    slidesToShow: 3,
                    centerMode: true,
                    infinite: true,
                    variableWidth: true,
                    adaptiveHeight: true,
                }
            }
        ]
    });

    const hamburger = document.querySelector('.navbar__hamburger');
    const close = document.querySelector('.navbar__close');
    const mobileMenu = document.querySelector('.navbar__list-mobile');
    hamburger.addEventListener('click', ()=> {
        mobileMenu.classList.add('active');
    });
    close.addEventListener('click', ()=> {
        mobileMenu.classList.remove('active');
    });
});