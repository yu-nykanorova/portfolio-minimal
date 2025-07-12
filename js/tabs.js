window.addEventListener("DOMContentLoaded", () => {

    // used DOM elements

    const tabs = document.querySelectorAll(".navbar__item");
    const tabsContent = document.querySelectorAll(".tab-item");
    const tabsParent = document.querySelector(".navbar__list");
    const contactMeButton = document.querySelector(".btn-contact");
    const showMyWorksButton = document.querySelector(".home__image-arrow");
    
    // function to hide tab content
    
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add("hide-tab");
            item.classList.remove("show-tab");
        });
        tabs.forEach(item => {
            item.classList.remove("is-active");
        });
    }
    
    // functions to show tab content
    
    function showTabContent(i = 0) {
        tabsContent[i].classList.add("show-tab", "fade-in");
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

    tabsParent.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
            const target = e.target.closest(".navbar__item");
            if (target && target.classList.contains("navbar__item")) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        }
    });

    contactMeButton.addEventListener("click", () => showSpecificTab(tabsContent, "contacts"));
    showMyWorksButton.addEventListener("click", () => showSpecificTab(tabsContent, "projects"));

});

