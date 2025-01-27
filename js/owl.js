$(document).ready(() => {
    const owl = $(".owl-carousel").owlCarousel({
        loop: true, 
        margin: 10, 
        nav: false,
        dots: false, 
        responsive: {
            0: { items: 2 }, 
            576: { items: 3 }, 
            768: { items: 4 }, 
            992: { items: 5 }  
        },
    });

    $(".skills__carousel-btn-prev").click(() => {
        owl.trigger("prev.owl.carousel");
    });

    $(".skills__carousel-btn-next").click(() => {
        owl.trigger("next.owl.carousel");
    });
});
