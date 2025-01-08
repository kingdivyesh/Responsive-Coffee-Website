let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

// Ensure that menu button is focusable and accessible via keyboard
menu.setAttribute('tabindex', '0');  // Make sure menu button is focusable
menu.setAttribute('aria-label', 'Toggle navigation menu'); // Accessible label for screen readers

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

menu.onkeydown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {  // Handle "Enter" or "Space" key press
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// Ensure image slider images are clickable via keyboard as well
document.querySelectorAll('.image-slider img').forEach(images => {
    images.setAttribute('tabindex', '0');  // Make images focusable
    images.setAttribute('aria-label', 'Click to view this image');  // Add an accessible label

    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };

    // Allow images to be activated using "Enter" or "Space" keys
    images.onkeydown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {  // Handle keyboard activation
            var src = images.getAttribute('src');
            document.querySelector('.main-home-image').src = src;
        }
    };
});

// Initialize Swiper (no changes needed for keyboard accessibility)
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});
