
// display text in faq question

$('.question').click(function(){
    $(`.${this.classList[1]} .bottom-question`).toggleClass('disp');
});