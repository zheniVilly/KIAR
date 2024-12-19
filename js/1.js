
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
