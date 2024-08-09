const navBar = document.querySelector (".navbar");

window.addEventListener("scroll", () => {
    const windowPosition = window.scrollY > 0;

    if (window.innerWidth >= 992) {
        navBar.classList.toggle("scrolling-active", windowPosition);
    } else {
        navBar.classList.remove("scrolling-active");
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth < 992) {
        navBar.classList.remove("scrolling-active");
    }
});