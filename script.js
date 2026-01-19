// Select the hamburger icon and the nav links list
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// When the hamburger is clicked...
hamburger.addEventListener('click', () => {
    // Toggle the class "active" on the nav-links
    navLinks.classList.toggle('active');
});

// 1. Select the elements
const dropdown = document.querySelector('.sort-dropdown');
const sortBtn = document.querySelector('.sort-btn');

// 2. Add click event to the button
sortBtn.addEventListener('click', (e) => {
    // Stop the click from bubbling up to the window immediately
    e.stopPropagation();
    
    // Toggle the 'active' class on the container
    dropdown.classList.toggle('active');
});

// 3. Close the menu if user clicks ANYWHERE else on the screen
window.addEventListener('click', () => {
    if (dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
    }
});

// 1. Select all navigation items that have dropdowns
const navItems = document.querySelectorAll('.nav-item');

// 2. Loop through each item to add click listeners
navItems.forEach(item => {
    // Find the link (text) inside the item
    const link = item.querySelector('a');

    // Only add logic if this item actually HAS a dropdown menu inside it
    if (item.querySelector('.dropdown-menu')) {
        
        link.addEventListener('click', (e) => {
            // Prevent the link from jumping to a new page (e.g. href="#")
            e.preventDefault();
            e.stopPropagation(); // Stop the click from triggering the window closer

            // A. Check if this specific item is ALREADY open
            const isOpen = item.classList.contains('active');

            // B. Close ALL dropdowns first (Reset state)
            // This ensures "Product" closes when you click "Marketplace"
            navItems.forEach(nav => nav.classList.remove('active'));

            // C. If it wasn't open before, Open it now
            if (!isOpen) {
                item.classList.add('active');
            }
        });
    }
});

// 3. Global Click Listener: Close menus if clicking anywhere else on the page
document.addEventListener('click', () => {
    navItems.forEach(nav => nav.classList.remove('active'));
});