const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const dropdown = document.querySelector('.sort-dropdown');
const sortBtn = document.querySelector('.sort-btn');


sortBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
});


window.addEventListener('click', () => {
    if (dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
    }
});

const navItems = document.querySelectorAll('.nav-item');


navItems.forEach(item => {

    const link = item.querySelector('a');

    if (item.querySelector('.dropdown-menu')) {

        link.addEventListener('click', (e) => {

            e.preventDefault();
            e.stopPropagation();

            const isOpen = item.classList.contains('active');
            navItems.forEach(nav => nav.classList.remove('active'));

            if (!isOpen) {
                item.classList.add('active');
            }
        });
    }
});

document.addEventListener('click', () => {
    navItems.forEach(nav => nav.classList.remove('active'));
});