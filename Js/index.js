// Side bar

$('.btn').click(function(){
    $('.btn i').toggleClass('btn-color');
    $('nav ul').toggleClass('clicked');
    $('.overlay').toggleClass('blur');
    $('body').toggleClass('hide');
});

document.addEventListener('keydown', function(ev){
    if(ev.key === 'Escape'){
        if($('nav ul').hasClass('clicked')){
            $('nav ul').removeClass('clicked');
            $('.overlay').removeClass('blur');
            $('body').removeClass('hide');
        }
    }
});

// Scroll

$(window).on('scroll', function(){
    if($(window).scrollTop()>=60 && !$('nav').hasClass('fixed')){
        $('nav').addClass('fixed'); 
    }
    else if($(window).scrollTop()<60 && $('nav').hasClass('fixed')){
       $('nav').removeClass('fixed');
    }
});

// Loader

const loader = $('.main-loader');

$(document).ready(function() {
    loader.css('display', 'none');
});
