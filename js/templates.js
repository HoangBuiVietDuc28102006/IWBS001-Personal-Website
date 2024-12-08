// Function to load HTML components
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;

            // If we just loaded the header, add the 'active' class to the current page link
            if (id === 'header') {
                setActiveNavLink();
            }
        })
        .catch(error => console.error('Error loading component:', error));
}

// Function to add the 'active' class to the current page link
function setActiveNavLink() {
    const currentLocation = window.location.pathname;
    const menuItems = document.querySelectorAll("nav ul li a");

    menuItems.forEach((item) => {
        if (item.getAttribute("href") === currentLocation) {
            item.classList.add("active");
        }
    });
}

// Load header and footer
window.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', 'template/header.html');
    loadComponent('footer', 'template/footer.html');
});
