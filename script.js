document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    const searchButton = document.querySelector('.search button');
    const searchBar = document.querySelector('.search input[type="text"]');
    const searchContainer = document.querySelector('.search');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    searchButton.addEventListener('click', () => {
        searchContainer.classList.toggle('show');
    });

    // Add your existing code here for other functionalities
});

