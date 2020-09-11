// variables
var headerBot = document.querySelector(".header-bot");


// functions
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

// event listeners
window.addEventListener('load', () => {
    $('.burger').click(function(){
        toggleBurger();
    });
});
window.onscroll = () => {
    headerBotFixer()
};