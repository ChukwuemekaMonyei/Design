document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.work-gallery img');
    const lightbox = document.createElement('div');
    const lightboxImage = document.createElement('img');

    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);
    lightbox.appendChild(lightboxImage);

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.classList.add('active');
            lightboxImage.src = image.src;
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal on Scroll
const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach(element => {
        const revealTop = element.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
});

