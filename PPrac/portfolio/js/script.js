$(document).ready(function() {
    initFullpage();
    initSlickPortfolio();
    initSwiperService();
});

function initFullpage() {
    if ($(window).width() > 1200) {
        $('#fullpage').fullpage({
            anchors: ['block1', 'block2', 'block3', 'block4'],
            menu: '#menu',
            css3: true,
            scrollingSpeed: 1000,
            //указываем элементы с нормальной прокруткой
            normalScrollElements: '.rate.active',

            //события ухода со слайда
            onLeave: function(origin, destination, direction) {
                //	console.log(destination);
                if (destination > 1) {
                    $('.menu').addClass('invert');


                } else {
                    $('.menu').removeClass('invert');
                }
            }
        });
    } else {
        console.log('fullpage.js не инициализирован, экран меньше 1200')
    };
};

function initSlickPortfolio() {
    const sliderPortfolio = $(".portfolio-slyder");
    sliderPortfolio.slick({
        arrows: true,
        centerMode: true,
        // infinite: false,
        cssEase: 'ease-in-out',
        nextArrow: '<img class="slider-arrow__left" src="../img/right-on.png" alt="">',
        prevArrow: '<img class="slider-arrow__right" src="../img/left-on.png" alt="">',
        centerPadding: '25px',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: true,
                    // centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 756,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                }
            }
        ]
    });
};


function initSwiperService() {
    var menu = ['Base', 'Business', 'Pro', 'Правила']
    var swiper = new Swiper('.js-swiper', {
        direction: 'vertical',
        centeredSlides: true,
        slidesPerView: 1,
        // effect: 'coverflow',
        loopedSlides: 0,
        coverflowEffect: {
        rotate: 150,
        slideShadows: true,
        },
        fadeEffect: {
            crossFade: true
          },
        spaceBetween: 0,
        a11y: {
            prevSlideMessage: 'Previous slide',
    
        },
        slideToClickedSlide: true,
        mousewheelControl: true,
        mousewheel: true,
        speed: 1200,
         pagination: {
            el: '.swiper-pagination',
            clickable: true,

                renderBullet: function (index, className) {
                  return '<span class="' + className + '">' + (menu[index]) + '</span>';
                },
        },

    }
    );
    swiper.on('slideChange', function() {
        if (swiper.activeIndex == 0) {
            setTimeout(function() {
                $('#fullpage').fullpage.setAllowScrolling(true);
            }, 200)

        };

        if (swiper.isEnd) {
            setTimeout(function() {
                $('#fullpage').fullpage.setAllowScrolling(true);
            }, 200)

        };
    });
}