
window.addEventListener("DOMContentLoaded", () => {
    
    // projects data

    const projects = [
        {
            id: 1,
            img: "img/projects/coffee.jpg",
            altImg: "coffee",
            title: "Coffee",
            techniques: "techniques",
            link: "#",
            repository: "#"    
        },
        {
            id: 2,
            img: "img/projects/diagnostic_center.jpg",
            altImg: "diagnostic center",
            title: "Diagnostic center",
            techniques: "techniques",
            link: "#",
            repository: "#"    
        },
        {
            id: 3,
            img: "img/projects/enver.jpg",
            altImg: "enver",
            title: "Enver",
            techniques: "techniques",
            link: "#",
            repository: "#"    
        },
        {
            id: 4,
            img: "img/projects/fashion_shop.jpg",
            altImg: "fashion shop",
            title: "Fashion Shop",
            techniques: "techniques",
            link: "#",
            repository: "#"    
        },
        {
            id: 5,
            img: "img/projects/movie.jpg",
            altImg: "movie",
            title: "Movie",
            techniques: "techniques",
            link: "#",
            repository: "#"    
        },
        {
            id: 6,
            img: "img/projects/plant_shop.jpg",
            altImg: "plant shop",
            title: "Plant Shop",
            techniques: "techniques",
            link: "#",
            repository: "#"    
        },
    ]

    // used DOM elements

    const projectsList = document.querySelector(".projects__list");
    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal__content");
    const moreProjectsButton = document.querySelector(".projects__btn-more");

    // function to create project card

    function createProjectCard (id, img, alt, title) {
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
                    <p class="projects__item-more">Click for more details...</p>
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

    const projectsToShow = 4;
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
            <div class="modal__content-close-btn">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        
        const itemModal = document.createElement("div");
        itemModal.classList.add("modal__content-project-data");

        itemModal.innerHTML = `
            <div class="modal__content-project-image">
                <img src=${item.img} alt=${item.altImg}>
            </div>
            <div class="modal__content-project-title">${item.title}</div>
            <div class="modal__content-project-techniques">Used: ${item.techniques}</div>
            <a href=${item.link} class="modal__content-project-link" target="_blank">Click to explore</a>
            <a href=${item.repository} class="modal__content-project-repository" target="_blank">Go to GitHub repository</a>
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
        if (e.target === modal || e.target.closest(".modal__content-close-btn")) {
            closeModal();
        }
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            closeModal();
        }
    });
    
});