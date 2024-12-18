/*document.addEventListener('DOMContentLoaded', () => {
    const initSlider = ({
        sliderContainerSelector,
        sliderWrapperSelector,
        slidesSelector,
        gap,
        timeout
    }) => {
        const sliderContainer = document.querySelector(sliderContainerSelector);
        const sliderWrapper = document.querySelector(sliderWrapperSelector);
        const slides = document.querySelectorAll(slidesSelector);

        const sliderWidth = sliderContainer.clientWidth;
        const slideWidth = slides[0]?.clientWidth;
        const slidesCount = slides.length;
        const countSlidesOnVisible = Math.floor(sliderWidth / (slideWidth + gap));

        const maxSlideIndex = Math.ceil(slidesCount / countSlidesOnVisible);
        let slideIndex = -1;

        if (slideWidth && slidesCount) {
            sliderWrapper.style.width = `${(slidesCount * (slideWidth + gap))}px`;
        }

        setInterval(() => {
            slide();
        }, timeout);

        slide();

        function slide() {
            if (slideIndex < maxSlideIndex - 1) {
                slideIndex++;
            } else {
                slideIndex = 0;
            }

            sliderWrapper.style.transform = `translateX(-${slideIndex * (slideWidth + gap)}px)`;
        }
    };

    initSlider({
        sliderContainerSelector: '.cards',
        sliderWrapperSelector: '.cards',
        slidesSelector: '.test-card',
        gap: 50,
        timeout: 3000
    });
});*/
document.addEventListener('DOMContentLoaded', () => {
    const hamb = document.querySelector("#navbar-hamb-field");
    const popup = document.querySelector("#popup");
    const menu = document.querySelector("#navbar-menu");

    if (menu) {  // Проверяем наличие меню
        const clonedMenu = menu.cloneNode(true);
        const body = document.body;

        // Обновление класса меню для попапа
        clonedMenu.classList.remove("menu");
        clonedMenu.classList.add("popup__menu");

        // Обработчик для бургер-меню
        hamb.addEventListener("click", hambHandler);

        function hambHandler(e) {
            e.preventDefault();
            popup.classList.toggle("open");
            hamb.classList.toggle("active");
            body.classList.toggle("noscroll");
            renderPopup();
        }

        // Функция отрисовки попапа
        function renderPopup() {
            if (!popup.contains(clonedMenu)) {
                popup.appendChild(clonedMenu);
            }
        }

        const links = Array.from(clonedMenu.children);

        // Закрытие меню при клике на ссылки
        links.forEach((link) => {
            link.addEventListener("click", closeOnClick);
        });

        function closeOnClick() {
            popup.classList.remove("open");
            hamb.classList.remove("active");
            body.classList.remove("noscroll");
        }
    } else {
        console.error('Menu element not found');
    }
});

