
window.addEventListener("DOMContentLoaded", () => {
    
    // projects data

    const projects = [
        {
            id: 1,
            img: "img/projects/coffee.jpg",
            altImg: "coffee",
            title: "Coffee",
            techniques: "React, Vite + SWC, SCSS, JSON Server (deployed on Render), mobile-first responsive",
            link: "https://coffee-app-react-json-server.vercel.app/",
            repository: "https://github.com/yu-nykanorova/coffee_app_react_json-server"    
        },
        {
            id: 2,
            img: "img/projects/no_photo.png",
            altImg: "space",
            title: "Space",
            techniques: "React, Vite + SWC, SCSS, REST APIs, responsive design",
            link: "https://space-git-main-yuliias-projects-dbf12d92.vercel.app",
            repository: "https://github.com/yu-nykanorova/space"    
        },
        {
            id: 3,
            img: "img/projects/enver.jpg",
            altImg: "enver",
            title: "Enver",
            techniques: "HTML5, SCSS, JS (jQuery), Owl Carousel, Gulp, Webpack, responsive design",
            link: "https://enver-sigma-lake.vercel.app/",
            repository: "https://github.com/yu-nykanorova/enver"    
        },
        {
            id: 4,
            img: "img/projects/movie.jpg",
            altImg: "movie",
            title: "Movie",
            techniques: "React, Vite + SWC, SCSS, React Context API, LocalStorage, responsive design",
            link: "https://movie-mu-roan.vercel.app/",
            repository: "https://github.com/yu-nykanorova/movie"    
        },
        {
            id: 5,
            img: "img/projects/plant_shop.jpg",
            altImg: "plant shop",
            title: "Plant Shop",
            techniques: "HTML5, Tailwind CSS, responsive design",
            link: "https://plant-shop-tailwindcss.vercel.app/",
            repository: "https://github.com/yu-nykanorova/plant-shop_tailwindcss"    
        },
        {
            id: 6,
            img: "img/projects/no_photo.png",
            altImg: "skilline",
            title: "Skilline",
            techniques: "React, Vite + SWC, SCSS, Swiper, responsive design",
            link: "https://skilline-ivory.vercel.app/",
            repository: "https://github.com/yu-nykanorova/skilline"    
        },
        {
            id: 7,
            img: "img/projects/no_photo.png",
            altImg: "food delivery",
            title: "Food delivery",
            techniques: "React, Vite + SWC, SCSS, responsive design",
            link: "https://food-delivery-fawn-xi.vercel.app/",
            repository: "https://github.com/yu-nykanorova/food_delivery"    
        },
        {
            id: 8,
            img: "img/projects/fashion_shop.jpg",
            altImg: "fashion shop",
            title: "Fashion Shop",
            techniques: "HTML5, SCSS, Vanilla JS (burger menu), responsive design",
            link: "https://fashion-shop-orcin.vercel.app/",
            repository: "https://github.com/yu-nykanorova/fashion-shop"    
        },
        {
            id: 9,
            img: "img/projects/diagnostic_center.jpg",
            altImg: "diagnostic center",
            title: "Diagnostic center",
            techniques: "HTML5, SCSS, JS, Owl Carousel, responsive design",
            link: "https://hw-16-diagnostic-center.vercel.app/",
            repository: "https://github.com/yu-nykanorova/HW16_diagnostic-center"    
        },
        {
            id: 10,
            img: "img/projects/no_photo.png",
            altImg: "virtual reality",
            title: "Virtual reality",
            techniques: "HTML5, SCSS, Vanilla JS (burger menu), responsive design",
            link: "https://virtual-reality-gules.vercel.app/",
            repository: "https://github.com/yu-nykanorova/virtual_reality"    
        },
    ]

    // used DOM elements

    const projectsList = document.querySelector(".projects__list");
    const modal = document.querySelector(".modal-project");
    const modalContent = document.querySelector(".modal-project__content");
    const moreProjectsButton = document.querySelector(".projects__btn-more");

    // function to create project card

    function createProjectCard(id, img, alt, title) {
        const projectCard = document.createElement("div");

        projectCard.classList.add("projects__item");
        projectCard.dataset.id = id;

        projectCard.innerHTML = `
            <div class="projects__item-image">
                <img src=${img} alt=${alt}>
            </div>
            <div class="projects__item-info">
                <div class="projects__item-info-text">
                    <div class="projects__item-title">${title}</div>
                </div>
                <div class="projects__item-info-arrow">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        `;

        projectsList.append(projectCard);
    }
    
    // function to display projects list

    let allProjectsShown = false;

    function showProjects(data, startFrom, itemsAmount, clearList = false) {
        if (clearList) {
            projectsList.innerHTML = "";
        }

        data.slice(startFrom, itemsAmount).forEach(({ id, img, altImg, title }) => {
            createProjectCard(id, img, altImg, title);
        });
    }

    // displaying projects

    const projectsToShow = 6;
    showProjects(projects, 0, projectsToShow, true);

    moreProjectsButton.addEventListener("click", () => {

        if (allProjectsShown) {
            showProjects(projects, 0, projectsToShow, true);
            moreProjectsButton.textContent = "Show more...";
        } else {
            showProjects(projects, projectsToShow, projects.length);
            moreProjectsButton.textContent = "Hide";
        }

        allProjectsShown = !allProjectsShown;
    });

    // functions to display/hide project details in modal window

    function showProjectDetails(item) {
        modalContent.innerHTML = `
            <div class="modal-project__content-close-btn">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        
        const itemModal = document.createElement("div");
        itemModal.classList.add("modal-project__content-project-data");

        itemModal.innerHTML = `
            <div class="modal-project__content-project-image">
                <img src=${item.img} alt=${item.altImg}>
            </div>
            <div class="modal-project__content-project-title">${item.title}</div>
            <div class="modal-project__content-project-techniques">Used techniques: <span>${item.techniques}</span></div>
            <a href=${item.link} class="modal-project__content-project-link" target="_blank">Click to explore</a>
            <a href=${item.repository} class="modal-project__content-project-repository" target="_blank">GitHub repository</a>
        `;

        modalContent.append(itemModal);
        modal.classList.add("open");
    }

    function closeModal() {
        modal.classList.remove("open");
        modalContent.innerHTML = "";
    }

    projectsList.addEventListener("click", e => {
        const projectItem = e.target.closest(".projects__item");

        if (projectItem) {
            const projectId = parseInt(projectItem.dataset.id, 10);
            const project = projects.find((item) => item.id === projectId);

            if (project) {
                showProjectDetails(project);
            }
        }
    });

    modal.addEventListener("click", e => {
        if (e.target === modal || e.target.closest(".modal-project__content-close-btn")) {
            closeModal();
        }
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            closeModal();
        }
    });
    
});