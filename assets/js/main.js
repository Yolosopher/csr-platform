// VARIABLES
let headerBot = document.querySelector(".header-bot");
let psnStryCnt = document.querySelector(".personal-stories-content");

// FUNCTIONS
function toggleBurger() {
    if (!$("header").hasClass("active")) {
        $("body").toggleClass("active");
        $("header").toggleClass("active");
    } else {
        $("header").removeClass("active");
        $("header").css("animation-name", "");
        $("header").addClass("removing");
        setTimeout(() => {
            $("body").toggleClass("active");
            $("header").removeClass("removing");
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
    $(".main-slider-hc .swiper-slide:first-child").css(
        "background",
        "url('../images/real-images/sliderIMG.jpg')"
    );
}

function personalStoriesSetter() {
    if (document.querySelector(".home-personal-stories")) {
        let winWidth = window.innerWidth;
        if (winWidth > 768 && winWidth < 1024) {
            psnStryCnt.classList.add("container");
        } else {
            psnStryCnt.classList.remove("container");
        }
    }
}

function techGalleryZoomed() {
    if (!$(".for-zoom").hasClass('active')) {
        $("body").addClass('active');
        $('.for-zoom').addClass('active');
    }
}

// EVENT LISTENERS
window.addEventListener("load", () => {
    $(".burger").click(function () {
        toggleBurger();
    });
    personalStoriesSetter();
    if (document.querySelector(".atech-article")) {
        $(".swiper-slide:first-child").attr("this-must-be-shown", true);
    }
});
window.onscroll = () => {
    headerBotFixer();
};
window.onresize = () => {
    personalStoriesSetter();
};

$(".copyLink").click(function () {
    $(this).addClass("active");
});

$(".copyLink").mouseout(function () {
    $(this).removeClass("active");
});

$(".tech-section-outter").click(function () {
    techGalleryZoomed();
});

$('.tech-slider-x-zoom').click(function() {
    $("body").removeClass('active');
    $('.for-zoom').removeClass('active');
});

$('.top-right-languagebar').mouseover(function() {
    $(this).toggleClass('active');
});

$('.top-right-languagebar').mouseout(function() {
    $(this).toggleClass('active');
});

$('.donations-show-more').click(function() {
    $(this).toggleClass('active');
    $(this).prev().toggleClass('active');
});

// SWIPERJS

    // main swiper
    const mainSwiper = new Swiper(".main-slider-hc", {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: ".main-slider-hc-next",
            prevEl: ".main-slider-hc-prev",
        },
        pagination: {
            el: ".main-slider-hc-pagination",
        },
        keyboard: true,
    });

    // atech gallery-swiper

    const atechGallerySwiper = new Swiper(".tech-section-outter", {
        slidesPerView: "auto",
        keyboard: true,
        spaceBetween: 35,
        clickable: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".tech-galleryslider-next",
            prevEl: ".tech-galleryslider-prev",
        },
        // nested: true,
    });

    const mainPhotoSwiper = new Swiper(".tech-slider-main-image", {
        thumbs: {
            swiper: atechGallerySwiper,
        },
        navigation: {
            nextEl: ".tech-galleryslider-next",
            prevEl: ".tech-galleryslider-prev",
        },
        grabCursor: true,
        // onClick: function
    });

    atechGallerySwiper.once('click', function() {
        if (!$(".for-zoom").hasClass('active')) {
            $("body").addClass('active');
            $('.for-zoom').addClass('active');
            atechGallerySwiper.update();
            mainPhotoSwiper.update();
        }
    });
