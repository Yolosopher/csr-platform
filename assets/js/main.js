// VARIABLES
let headerBot = document.querySelector(".header-bot");


// FUNCTIONS
function toggleBurger() {
    if (!$('header').hasClass('active')) {
        $('body').toggleClass('active');
        $('header').toggleClass('active');
    } else {
        $('header').removeClass('active');
        $('header').css('animation-name', '');
        $('header').addClass('removing');
        setTimeout(() => {
            $('body').toggleClass('active');
            $('header').removeClass('removing');
        }, 1000);        
    }    
}

function headerBotFixer() {
    if (window.pageYOffset > 100) {
        headerBot.classList.add("fixed");
      } else {
        headerBot.classList.remove("fixed");
      }
}

function slideBgChanger() {
    $('.main-slider-hc .swiper-slide:first-child').css("background", "url('../images/real-images/sliderIMG.jpg')")
}




// EVENT LISTENERS
window.addEventListener('load', () => {
    $('.burger').click(function(){
        toggleBurger();
    });
    // slideBgChanger();
});
window.onscroll = () => {
    headerBotFixer();
};




// SWIPERJS

    // main swiper
const mainSwiper = new Swiper('.main-slider-hc', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: '.main-slider-hc-next',
      prevEl: '.main-slider-hc-prev',
    },
    pagination: {
      el: '.main-slider-hc-pagination'
    },
    mousewheel: true,
    keyboard: true,
    // cssMode: true,
    breakpoints: {
        0: {
            navigation: false,
        },
        1024: {
            navigation: {
                nextEl: '.main-slider-hc-next',
                prevEl: '.main-slider-hc-prev',
            },
        },
    },
});