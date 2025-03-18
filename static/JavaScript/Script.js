const searchInput = document.querySelector('input[type="search"]');
const searchLabel = document.querySelector('.search label');

searchInput.addEventListener('focus', () => {
    searchLabel.style.transition = 'opacity 0.3s ease';
    searchLabel.style.opacity = '0'; // Fade out the label
    // Immediately apply styles without waiting for blur
});


searchInput.addEventListener('blur', () => {
    searchLabel.style.opacity = '1'; // Fade in the label
});


document.addEventListener('DOMContentLoaded', () => {
    searchLabel.classList.add('typing'); // Add a class to trigger the typing animation
});

// Add onclick event for search input
searchInput.onclick = function() {
    // Add your custom CSS changes here
    searchInput.style.border = "2px solid blue"; // Example CSS change
    // You can add more properties as needed
};

console.log('Hello World');
