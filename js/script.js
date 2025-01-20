// owl-carousel;

$(document).ready(function() {
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


// navbar tabs

window.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".navbar__item");
    const tabsContent = document.querySelectorAll(".tab-item");
    const tabsParent = document.querySelector(".navbar__list");

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add("hide-tab");
            item.classList.remove("show-tab");
        });
        tabs.forEach(item => {
            item.classList.remove("is-active");
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add("show-tab");
        tabsContent[i].classList.remove("hide-tab");
        tabs[i].classList.add("is-active");
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", e => {
        tabs.forEach((item, i) => {
            if (e.target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    });

});


