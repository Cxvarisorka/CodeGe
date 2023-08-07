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
$(window).on('scroll', function(){
    if($(window).scrollTop()>=60 && !$('nav').hasClass('fixed')){
        $('nav').addClass('fixed'); 
    }
    else if($(window).scrollTop()<60 && $('nav').hasClass('fixed')){
       $('nav').removeClass('fixed');
    }
});
