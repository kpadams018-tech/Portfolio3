// Add simple interactivity like smooth scroll or highlighting active menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Changing navbar background on scroll
window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "none";
    }
};
