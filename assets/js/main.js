// variables



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

// event listeners
window.addEventListener('load', () => {
    $('.burger').click(function(){
        toggleBurger();
    });
});
