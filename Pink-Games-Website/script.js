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

// SEARCH BAR (auto-updating)
document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
    const searchResults = document.getElementById("searchResults");
    const popupMenu = document.getElementById("popupMenu");

    if (!searchBar || !searchResults || !popupMenu) return;

    // Get all game links from the popup menu (skips "Home")
    const gameLinks = Array.from(popupMenu.querySelectorAll("a"))
        .filter(a => a.getAttribute("href") !== "index.html")
        .map(a => ({
            name: a.textContent.trim(),
            link: a.getAttribute("href")
        }));

    searchBar.addEventListener("input", () => {
        const query = searchBar.value.toLowerCase();
        searchResults.innerHTML = "";

        if (query.length === 0) {
            searchResults.style.display = "none";
            return;
        }

        const filtered = gameLinks.filter(game =>
            game.name.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            searchResults.innerHTML = "<p>No games found</p>";
        } else {
            filtered.forEach(game => {
                const a = document.createElement("a");
                a.href = game.link;
                a.textContent = game.name;
                searchResults.appendChild(a);
            });
        }

        searchResults.style.display = "block";
    });
});
