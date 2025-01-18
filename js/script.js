// owl-carousel;

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true, 
        margin: 10, 
        nav: true, 
        responsive: {
        0: { items: 2 }, 
        576: { items: 3 }, 
        768: { items: 4 }, 
        992: { items: 5 }  
        }
    });
});


