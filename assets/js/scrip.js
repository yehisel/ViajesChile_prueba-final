//poppers
$(function() {

    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 2000, function(){
        window.location.hash = hash;
    });
})
