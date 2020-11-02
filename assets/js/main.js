// VARIABLES
let headerBot = document.querySelector(".header-bot");
let psnStryCnt = document.querySelector(".personal-stories-content");
var videoSwiper = undefined;
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

function respoGameButtonAddClass() {
	if ($(".arena-left-textbox > a")[0]) {
		$(".arena-left-textbox > a").addClass("arena-try-it");
		$(".arena-left-textbox > a").attr("target", "_blank");
	}
	if ($(".arena-text-div-p a")[0]) {
		$(".arena-text-div-p a").addClass("martetamashi-see-here-link");
	}
}

function headerBotFixer() {
	if (window.innerWidth > 1024) {
		if (window.pageYOffset > 60) {
			headerBot.classList.add("fixed");
			document.querySelector("body").style.paddingTop = "100px";
		} else {
			headerBot.classList.remove("fixed");
			document.querySelector("body").style.paddingTop = "";
		}
	}
}
function minBodyMargin() {
	let heightToAdd =
		window.innerHeight - document.querySelector("body").offsetHeight;
	let footerPrevEle = $("footer").prev();
	if (heightToAdd > 0) {
		let marginBot = footerPrevEle.css("margin-bottom");
		footerPrevEle.css(
			"margin-bottom",
			`calc(${marginBot} + ${heightToAdd}px`
		);
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
	if (!$(".for-zoom").hasClass("active")) {
		$("body").addClass("active");
		$(".for-zoom").addClass("active");
	}
}

function initSwiper() {
	if (window.innerWidth >= 1025 && videoSwiper == undefined) {
		videoSwiper = new Swiper(".swiper-container", {
			slidesPerView: 3,
			spaceBetween: 35,
			keyboard: true,
		});
	} else {
		if (videoSwiper) videoSwiper.destroy();
		videoSwiper = undefined;
		jQuery(".swiper-wrapper").removeAttr("style");
		jQuery(".swiper-slide").removeAttr("style");
	}
}

function disableSliderNav() {
	$(".main-slider-hc-nav").addClass("disabled");
	return false;
}

function pageChecker() {
	if (
		$(".sports-see-more")[0] ||
		$(".hero-content-sports")[0] ||
		$(".menuAndSoc")[0]
	) {
		$("body").addClass("bgcl-changed");
	}
	if ($(".year-accountings-download")[0]) {
		document.querySelector("article").classList.add("margin-top");
	}
	if ($(".home-aboutus-h1")[0] || $(".home-latest-news")[0]) {
		$("body").removeClass("bgcl-changed");
	}
}



// EVENT LISTENERS
window.addEventListener("load", () => {
	$(".burger").click(function () {
		toggleBurger();
	});
	pageChecker();
	personalStoriesSetter();
	if (document.querySelector(".atech-article")) {
		$(".swiper-slide:first-child").attr("this-must-be-shown", true);
	}

	// let url = document.URL;
	// if (url.includes("responsible-games")) {
	// 	$("header .header-nav-li:first-child").addClass("active");
	// } else if (url.includes("sport")) {
	// 	$("header .header-nav-li:nth-child(2)").addClass("active");
	// } else if (url.includes("technologies-and-inovations")) {
	// 	$("header .header-nav-li:nth-child(3)").addClass("active");
	// } else if (url.includes("donations")) {
	// 	$("header .header-nav-li:nth-child(4)").addClass("active");
	// } else if (url.includes("humans")) {
	// 	$("header .header-nav-li:nth-child(5)").addClass("active");
	// }

	if ($(".menuAndSoc-fb")[0]) {
		let url = document.URL;
		$(".menuAndSoc-fb").attr(
			"href",
			`https://www.facebook.com/sharer/sharer.php?u=${url}`,
			`https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F127.0.0.1%3A5500%2Ftech-inovation-atech.html&amp;src=sdkpreparse`
		);
		$(".menuAndSoc-fb").attr("target", "_blank");
	}
	respoGameButtonAddClass();
	minBodyMargin();
});
window.onscroll = () => {
	headerBotFixer();
};
window.onresize = () => {
	personalStoriesSetter();
	if (document.querySelector(".ps-video-gallery")) {
		initSwiper();
	}
};

$(".copyLink").click(function () {
	$(this).addClass("active");
	let url = document.URL;
	let txtArea = document.createElement("textarea");
	txtArea.value = url;
	document.body.appendChild(txtArea);
	txtArea.select();
	document.execCommand("copy");
	document.body.removeChild(txtArea);
});

$(".copyLink").mouseout(function () {
	$(this).removeClass("active");
});

// $(".tech-section-outter").click(function () {
// 	techGalleryZoomed();
// });
if (document.querySelector(".tech-section-outter")) {
	document
		.querySelector(".tech-section-outter")
		.addEventListener("click", (e) => {
			if (e.target.closest(".tech-slider-navigation")) {
				return false;
			} else {
				techGalleryZoomed();
				atechGallerySwiper.update();
				mainPhotoSwiper.update();
			}
		});
}

$(".tech-slider-x-zoom").click(function () {
	$("body").removeClass("active");
	$(".for-zoom").removeClass("active");
});

$(".top-right-languagebar").mouseover(function () {
	$(this).toggleClass("active");
});

$(".top-right-languagebar").mouseout(function () {
	$(this).toggleClass("active");
});

$(".donations-show-more").click(function () {
	$(this).toggleClass("active");
	$(this).prev().toggleClass("active");
});

// SWIPERJS

// main swiper
const mainSwiper = new Swiper(".main-slider-hc", {
	autoplay:
		$(".swiper-slide").length > 1
			? {
					delay: 4000,
					disableOnInteraction: false,
			  }
			: false,
	loop: $(".swiper-slide").length > 1 ? true : false,
	grabCursor: true,
	navigation:
		$(".swiper-slide").length > 1
			? {
					nextEl: ".main-slider-hc-next",
					prevEl: ".main-slider-hc-prev",
			  }
			: disableSliderNav(),
	pagination:
		$(".swiper-slide").length > 1
			? {
					el: ".main-slider-hc-pagination",
			  }
			: false,
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

atechGallerySwiper.once("click", function (e) {
	if (!$(".for-zoom").hasClass("active")) {
		if (e.target.closest(".tech-slider-navigation")) {
			return false;
		} else {
			$("body").addClass("active");
			$(".for-zoom").addClass("active");
			atechGallerySwiper.update();
			mainPhotoSwiper.update();
		}
	}
});

if (document.querySelector(".ps-video-gallery")) {
	initSwiper();
}
