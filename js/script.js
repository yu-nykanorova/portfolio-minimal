
window.addEventListener("DOMContentLoaded", () => {

    // SWITCH LANGUAGE

    const switchToLang = (lang) => {
        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach((element) => {
            const key = element.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        localStorage.setItem("lang", lang);
    };

    const savedLang = localStorage.getItem("lang") || "ua";
    switchToLang(savedLang);

    document.getElementById("ua-btn").addEventListener("click", () => switchToLang("ua"));
    document.getElementById("eng-btn").addEventListener("click", () => switchToLang("en"));

    // CONTACTS SECTION
    
    // used DOM elements

    const modalAlert = document.querySelector(".modal-alert");
    const modalAlertContent = document.querySelector(".modal-alert__content");
    const buttonSend = document.querySelector(".contacts__form-btn");

    // function to show alert modal

    function showAlertModal() {
        modalAlertContent.innerHTML = `
            <div class="modal-alert__content-close-btn">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="modal-alert__content-text">
                <p>Sorry, this function is under construction</p>
                <p>Please use another way to contact me</p>
            </div>
        `;

        modalAlert.classList.add("open");
    }

    // function to close alert modal

    function closeAlertModal() {
        modalAlert.classList.remove("open");
    }

    buttonSend.addEventListener("click", e => {
        e.preventDefault();
        showAlertModal();
    });

    modalAlert.addEventListener("click", e => {
        if (e.target === modalAlert || e.target.closest(".modal-alert__content-close-btn")) {
            closeAlertModal();
        }
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            closeAlertModal();
        }
    });
    
    // FOOTER COPYRIGHT SECTION

    const copyRight = document.querySelector(".footer__copyright");

    copyRight.innerHTML=`&copy; ${(new Date).getFullYear()} All rights reserved`;
    
});


