document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Hero Background Slideshow
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds per slide

    if(slides.length > 0) {
        setInterval(() => {
            // Remove active class from current slide
            slides[currentSlide].classList.remove('active');
            // Move to next slide, loop back to 0 if at the end
            currentSlide = (currentSlide + 1) % slides.length;
            // Add active class to new current slide
            slides[currentSlide].classList.add('active');
        }, slideInterval);
    }

    // Form submission handler (Demo only)
    const form = document.getElementById('estimateForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your estimate request has been sent to Romero\'s Seamless Gutters.');
            form.reset();
        });
    }
});
