// owl-carousel using JQuery;

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


// other functions using JavaScript

window.addEventListener("DOMContentLoaded", () => {

    // navbar tabs

    const tabs = document.querySelectorAll(".navbar__item");
    const tabsContent = document.querySelectorAll(".tab-item");
    const tabsParent = document.querySelector(".navbar__list");
    const contactMeButton = document.querySelector(".btn-contact");
    const showMyWorksButton = document.querySelector(".home__image-arrow");
    
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

    function showSpecificTab(content, className) {
        content.forEach((item, i) => {
            if (item.classList.contains(className)) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", e => {
        const target = e.target.closest(".navbar__item");
        if (target && target.classList.contains("navbar__item")) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    contactMeButton.addEventListener("click", () => showSpecificTab(tabsContent, "contacts"));
    showMyWorksButton.addEventListener("click", () => showSpecificTab(tabsContent, "projects"));

    // CV button

    const cvButton = document.querySelector(".btn-cv");

    cvButton.addEventListener("click", () => {
        cvButton.classList.toggle("active-text");
    });

    // footer copyright section

    const copyRight = document.querySelector(".footer__copyright");

    copyRight.innerHTML=`&copy; ${(new Date).getFullYear()} All rights reserved`;

    // modal window to show projects details

    

});


