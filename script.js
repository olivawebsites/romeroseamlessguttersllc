document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Hero Background Slideshow
    const heroSlides = document.querySelectorAll('.hero .slide');
    let currentHeroSlide = 0;
    
    if(heroSlides.length > 0) {
        setInterval(() => {
            heroSlides[currentHeroSlide].classList.remove('active');
            currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
            heroSlides[currentHeroSlide].classList.add('active');
        }, 5000);
    }

    // Reviews Slideshow Logic
    const reviewSlides = document.querySelectorAll('.review-slide');
    const btnNext = document.getElementById('nextReview');
    const btnPrev = document.getElementById('prevReview');
    let currentReview = 0;
    let reviewInterval;

    function showReview(index) {
        reviewSlides.forEach(slide => slide.classList.remove('active'));
        reviewSlides[index].classList.add('active');
    }

    function nextReview() {
        currentReview = (currentReview + 1) % reviewSlides.length;
        showReview(currentReview);
    }

    function prevReview() {
        currentReview = (currentReview - 1 + reviewSlides.length) % reviewSlides.length;
        showReview(currentReview);
    }

    if(reviewSlides.length > 0) {
        // Auto-play reviews every 6 seconds
        reviewInterval = setInterval(nextReview, 6000);

        // Button clicks
        btnNext.addEventListener('click', () => {
            nextReview();
            resetReviewInterval();
        });

        btnPrev.addEventListener('click', () => {
            prevReview();
            resetReviewInterval();
        });
    }

    // Reset interval when user clicks arrows so it doesn't double-skip
    function resetReviewInterval() {
        clearInterval(reviewInterval);
        reviewInterval = setInterval(nextReview, 6000);
    }

    // Form submission
    const form = document.getElementById('estimateForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your estimate request has been sent.');
            form.reset();
        });
    }
});
