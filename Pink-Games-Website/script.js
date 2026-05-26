// OLD MENU BUTTONS (homepage)
const gameBtn = document.getElementById("gameBtn");
const menuBtn = document.getElementById("menuBtn");
const popupMenu = document.getElementById("popupMenu");
const closeMenu = document.getElementById("closeMenu");

// Only attach events if the elements exist
if (gameBtn && popupMenu) {
    gameBtn.onclick = () => popupMenu.classList.add("open");
}

if (menuBtn && popupMenu) {
    menuBtn.onclick = () => popupMenu.classList.add("open");
}

if (closeMenu && popupMenu) {
    closeMenu.onclick = () => popupMenu.classList.remove("open");
}

// HAMBURGER MENU (game pages + homepage)
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger-menu");
    const popup = document.getElementById("popupMenu");

    if (hamburger && popup) {
        hamburger.addEventListener("click", () => {
            popup.classList.toggle("open");
        });
    }
});
