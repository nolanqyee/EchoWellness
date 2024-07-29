function toggleBurgerMenu() {
    const burgerMenu = document.getElementById('burgerMenu');
    const burgerToggle = document.getElementById('burgerToggle');

    if (window.getComputedStyle(burgerMenu).opacity === "0") {
        burgerMenu.style.opacity = "1";
        burgerMenu.style.pointerEvents = "all";
        burgerToggle.src = "assets/cancel.svg";
    } else {
        burgerMenu.style.opacity = "0";
        burgerMenu.style.pointerEvents = "none";
        burgerToggle.src = "assets/menu.svg";
    }
}
