// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate testimonial text (scrolling effect)
const testimonialContainers = document.querySelectorAll('.testimonial-item');

testimonialContainers.forEach(container => {
    const textElement = container.querySelector('.animated-testimonial');
    if (textElement) {
        let scrollAmount = 0;
        const scrollSpeed = 0.75; // Adjust for speed

        function animateTestimonial() {
            scrollAmount += scrollSpeed;
            textElement.style.transform = `translateX(-${scrollAmount}px)`;

            // Reset scroll when text goes out of view
            if (scrollAmount > textElement.offsetWidth + container.offsetWidth) {
                scrollAmount = 0;
            }
            requestAnimationFrame(animateTestimonial);
        }

        animateTestimonial();
    }
});