document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const searchButton = document.querySelector('.search button');
    const searchInput = document.querySelector('.search input[type="text"]');
    const searchContainer = document.querySelector('.search');

    // Toggle the navigation menu on small screens
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Add sticky class to search bar on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            searchContainer.classList.add('sticky');
        } else {
            searchContainer.classList.remove('sticky');
        }
    });

    // Toggle search input visibility on search button click
    searchButton.addEventListener('click', function () {
        searchInput.classList.toggle('show');
        searchInput.focus();
    });
});
