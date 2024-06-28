document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const searchButton = document.querySelector(".search button");
    const searchInput = document.querySelector(".search input[type='text']");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    searchButton.addEventListener("click", () => {
        searchInput.classList.toggle("show");
        searchInput.focus();
    });
});
