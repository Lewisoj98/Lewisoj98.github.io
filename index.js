$(document).ready(()=>{
    'use strict'
    $('a[href="#about"]').click(()=>{
        $('html,body').animate({
            scrollTop: $('#about').offset().top
        }, 'slow')
    })
    $('a[href="#skills"]').click(()=>{
        $('html,body').animate({
            scrollTop: $('#skills').offset().top
        }, 'slow')
    })
    $('a[href="#projects"]').click(()=>{
        $('html,body').animate({
            scrollTop: $('#projects').offset().top
        }, 'slow')
    })
    $('a[href="#contact"]').click(()=>{
        $('html,body').animate({
            scrollTop: $('#contact').offset().top
        }, 'slow')
    })
    $('a[href="#"]').click(()=>{
        $('html,body').animate({
            scrollTop: $('body').offset().top
        }, 'slow')
    })
})

$(window).scroll(function () {
    if($(window).scrollTop() > 0) {
        $('#about').addClass("animate");
    }
    else {
        $('#about').removeClass("animate");
    }
})

$('.card').on('touchstart', function() {
    this.toggleClass(":hover");
})