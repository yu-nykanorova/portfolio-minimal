function carousel() {

    const slider = document.querySelector(".skills__list");
    const wrapper = document.querySelector(".skills__slider-wrapper");
    const items = document.querySelectorAll(".skills__item");
    const prevButton = document.querySelector(".skills__slider-button-prev");
    const nextButton = document.querySelector(".skills__slider-button-next");

    let visibleCount = 5;
    let currentIndex = 0;

    document.addEventListener("DOMContentLoaded", () => {
    
        const updateVisibleCount = () => {
            const screenWidth = window.innerWidth;
    
            switch (true) {
                case screenWidth >= 992:
                    visibleCount = 5;
                    break;
                case screenWidth >= 768:
                    visibleCount = 4;
                    break;
                case screenWidth >= 576:
                    visibleCount = 3;
                    break;
                default:
                    visibleCount = 2;
            }
    
            const itemWidth = wrapper.clientWidth / visibleCount;
            items.forEach((item) => (item.style.width = `${itemWidth}rem`));
            updateSliderPosition();
        };
    
        const updateSliderPosition = () => {
            const itemWidth = items[0].offsetWidth;
            slider.style.transform = `translateX(-${currentIndex * itemWidth}rem)`;
        };
    
        const handleNext = () => {
            if (currentIndex < items.length - visibleCount) {
                currentIndex++;
                updateSliderPosition();
            }
        };
    
        const handlePrev = () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSliderPosition();
            }
        };
    
        nextButton.addEventListener("click", handleNext);
        prevButton.addEventListener("click", handlePrev);
        window.addEventListener("resize", updateVisibleCount);
    
        updateVisibleCount();
    });
}

export default carousel;