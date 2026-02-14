// B2B Engineering Services - Main JavaScript
// Core functionality for website interactions

// === DARK MODE FUNCTIONALITY === //
function initDarkMode() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;
    
    // Check for saved preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
    } else {
        htmlElement.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
    }
    
    // Toggle dark mode on button click
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const theme = htmlElement.getAttribute('data-theme');
            if (theme === 'dark') {
                htmlElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeIcon.textContent = '🌙';
            } else {
                htmlElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeIcon.textContent = '☀️';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    initDarkMode();
    initNavigation();
    initScrollAnimations();
    initAnimatedCounters();
    initMobileMenu();
    initSlideshow();
    initCategoriesSlider();
});

// === NAVIGATION === //
function initNavigation() {
    const header = document.querySelector('.header');

    // Sticky header on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active link highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// === MOBILE MENU === //
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
}

// === SCROLL ANIMATIONS === //
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
}

// === ANIMATED COUNTERS === //
function initAnimatedCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // Lower = faster

    const observerOptions = {
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target')) || 0;
                const increment = target / speed;
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.ceil(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString();
                    }
                };

                updateCounter();
                counter.classList.add('counted');
            }
        });
    }, observerOptions);

    counters.forEach(counter => counterObserver.observe(counter));
}

// === SMOOTH SCROLL === //
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Attach smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        if (target !== '#') {
            smoothScroll(target);
        }
    });
});

// === FORM VALIDATION === //
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach(field => {
        const value = field.value.trim();
        const errorElement = field.nextElementSibling;

        // Remove previous error state
        field.classList.remove('error');
        if (errorElement && errorElement.classList.contains('form-error')) {
            errorElement.style.display = 'none';
        }

        // Validate field
        if (!value) {
            field.classList.add('error');
            if (errorElement && errorElement.classList.contains('form-error')) {
                errorElement.textContent = 'This field is required';
                errorElement.style.display = 'block';
            }
            isValid = false;
        } else if (field.type === 'email' && !isValidEmail(value)) {
            field.classList.add('error');
            if (errorElement && errorElement.classList.contains('form-error')) {
                errorElement.textContent = 'Please enter a valid email address';
                errorElement.style.display = 'block';
            }
            isValid = false;
        } else if (field.type === 'tel' && !isValidPhone(value)) {
            field.classList.add('error');
            if (errorElement && errorElement.classList.contains('form-error')) {
                errorElement.textContent = 'Please enter a valid phone number';
                errorElement.style.display = 'block';
            }
            isValid = false;
        }
    });

    return isValid;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// === TOAST NOTIFICATIONS === //
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#27AE60' : '#E74C3C'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        font-weight: 600;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideInLeft 0.3s ease-out reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// === FORM SUBMISSION === //
function handleFormSubmit(event, formId) {
    event.preventDefault();

    if (validateForm(formId)) {
        const form = document.getElementById(formId);
        const formData = new FormData(form);

        // Format email content based on form type
        let emailBody = '';
        let emailSubject = '';

        if (formId === 'quoteForm') {
            emailSubject = `Quote Request from ${formData.get('name')} - ${formData.get('company')}`;
            emailBody = formatQuoteEmail(formData);
        } else if (formId === 'contactForm') {
            emailSubject = `Contact Request from ${formData.get('name')}`;
            emailBody = formatContactEmail(formData);
        } else {
            emailSubject = `Form Submission from ${formData.get('name') || 'Website'}`;
            emailBody = formatGenericEmail(formData);
        }

        // Company email
        const companyEmail = 'sales@b2bengineeringservices.com';

        // Create mailto link
        const mailtoLink = `mailto:${companyEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show success message
        showToast('Opening your email client... Please send the email to complete your request.', 'success');

        // Reset form after a short delay
        setTimeout(() => {
            form.reset();
        }, 1000);
    } else {
        showToast('Please fill in all required fields correctly.', 'error');
    }
}

// Format quote form data for email
function formatQuoteEmail(formData) {
    let body = `QUOTE REQUEST\n`;
    body += `${'='.repeat(50)}\n\n`;

    // Contact Information
    body += `CONTACT INFORMATION:\n`;
    body += `Name: ${formData.get('name') || 'N/A'}\n`;
    body += `Company: ${formData.get('company') || 'N/A'}\n`;
    body += `Email: ${formData.get('email') || 'N/A'}\n`;
    body += `Phone: ${formData.get('phone') || 'N/A'}\n\n`;

    // Project Details
    body += `PROJECT DETAILS:\n`;
    body += `Project Name: ${formData.get('projectName') || 'N/A'}\n`;
    body += `Industry: ${formData.get('industry') || 'N/A'}\n`;
    body += `Timeline: ${formData.get('timeline') || 'N/A'}\n`;
    body += `Budget Range: ${formData.get('budget') || 'N/A'}\n\n`;

    // Products/Services Needed
    const products = formData.getAll('products');
    if (products.length > 0) {
        body += `PRODUCTS/SERVICES NEEDED:\n`;
        products.forEach(product => {
            body += `- ${product}\n`;
        });
        body += `\n`;
    }

    // Requirements
    body += `DETAILED REQUIREMENTS:\n`;
    body += `${formData.get('requirements') || 'N/A'}\n\n`;

    // Preferred Contact Method
    body += `PREFERRED CONTACT METHOD:\n`;
    body += `${formData.get('contactMethod') || 'email'}\n\n`;

    body += `${'='.repeat(50)}\n`;
    body += `This quote request was submitted via the B2B Engineering Services website.`;

    return body;
}

// Format contact form data for email
function formatContactEmail(formData) {
    let body = `CONTACT REQUEST\n`;
    body += `${'='.repeat(50)}\n\n`;

    body += `Name: ${formData.get('name') || 'N/A'}\n`;
    body += `Email: ${formData.get('email') || 'N/A'}\n`;
    body += `Phone: ${formData.get('phone') || 'N/A'}\n`;
    body += `Subject: ${formData.get('subject') || 'N/A'}\n\n`;

    body += `MESSAGE:\n`;
    body += `${formData.get('message') || 'N/A'}\n\n`;

    body += `${'='.repeat(50)}\n`;
    body += `This contact request was submitted via the B2B Engineering Services website.`;

    return body;
}

// Format generic form data for email
function formatGenericEmail(formData) {
    let body = `WEBSITE FORM SUBMISSION\n`;
    body += `${'='.repeat(50)}\n\n`;

    for (let [key, value] of formData.entries()) {
        body += `${key}: ${value}\n`;
    }

    body += `\n${'='.repeat(50)}\n`;
    body += `This form was submitted via the B2B Engineering Services website.`;

    return body;
}

// === CAROUSEL/SLIDER === //
class Carousel {
    constructor(element, options = {}) {
        this.carousel = element;
        this.slides = element.querySelectorAll('.carousel-slide');
        this.currentSlide = 0;
        this.autoplay = options.autoplay || false;
        this.interval = options.interval || 5000;
        this.autoplayTimer = null;

        this.init();
    }

    init() {
        if (this.slides.length === 0) return;

        // Create navigation dots
        this.createDots();

        // Show first slide
        this.showSlide(0);

        // Auto-play if enabled
        if (this.autoplay) {
            this.startAutoplay();

            // Pause on hover-in
            this.carousel.addEventListener('mouseenter', () => this.stopAutoplay());
            this.carousel.addEventListener('mouseleave', () => this.startAutoplay());
        }
    }

    createDots() {
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'carousel-dots';
        dotsContainer.style.cssText = `
            display: flex;
            gap: 0.5rem;
            justify-content: center;
            margin-top: 1.5rem;
        `;

        this.slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot';
            dot.style.cssText = `
                width: 12px;
                height: 12px;
                border-radius: 50%;
                border: 2px solid #31694E;
                background: transparent;
                cursor: pointer;
                transition: all 0.3s ease;
            `;
            dot.addEventListener('click', () => this.showSlide(index));
            dotsContainer.appendChild(dot);
        });

        this.carousel.appendChild(dotsContainer);
        this.dots = dotsContainer.querySelectorAll('.carousel-dot');
    }

    showSlide(index) {
        // Hide all slides
        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        // Remove active state from all dots
        if (this.dots) {
            this.dots.forEach(dot => {
                dot.style.background = 'transparent';
            });
        }

        // Show current slide
        this.currentSlide = index;
        this.slides[this.currentSlide].style.display = 'block';

        // Activate current dot
        if (this.dots) {
            this.dots[this.currentSlide].style.background = '#31694E';
        }
    }

    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(next);
    }

    prevSlide() {
        const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prev);
    }

    startAutoplay() {
        this.autoplayTimer = setInterval(() => this.nextSlide(), this.interval);
    }

    stopAutoplay() {
        if (this.autoplayTimer) {
            clearInterval(this.autoplayTimer);
            this.autoplayTimer = null;
        }
    }
}

// Initialize carousels
document.querySelectorAll('.carousel').forEach(carousel => {
    new Carousel(carousel, {
        autoplay: carousel.hasAttribute('data-autoplay'),
        interval: parseInt(carousel.getAttribute('data-interval')) || 5000
    });
});

// === SEARCH FUNCTIONALITY === //
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');

    if (!searchInput) return;

    let debounceTimer;

    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        const query = e.target.value.trim();

        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        debounceTimer = setTimeout(() => {
            performSearch(query);
        }, 300);
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}

function performSearch(query) {
    // This would normally query a backend or search index
    // For now, it's a placeholder
    console.log('Searching for:', query);
}

// === SLIDESHOW === //
function initSlideshow() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (!slideshowContainer) return;

    const slides = document.querySelectorAll('.slideshow-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.slideshow-prev');
    const nextBtn = document.querySelector('.slideshow-next');

    let currentSlide = 0;
    let autoPlayInterval;

    // Show slide by index
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        slides[n].classList.add('active');
        indicators[n].classList.add('active');
    }

    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
        resetAutoPlay();
    }

    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
        resetAutoPlay();
    }

    // Auto play slideshow
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Reset auto play timer
    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            resetAutoPlay();
        });
    });

    // Initialize
    showSlide(0);
    startAutoPlay();

    // Pause autoplay on hover
    slideshowContainer.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });

    slideshowContainer.addEventListener('mouseleave', () => {
        startAutoPlay();
    });
}

// === CATEGORIES SLIDER === //
function initCategoriesSlider() {
    const slider = document.querySelector('.categories-slider');
    const prevBtn = document.querySelector('.slider-controls .slider-btn:first-child');
    const nextBtn = document.querySelector('.slider-controls .slider-btn:last-child');

    if (!slider || !prevBtn || !nextBtn) return;

    // Configuration for 3 cards visible at a time
    const cardsPerView = 3;
    const cardGap = 24; // var(--spacing-lg) = 24px
    let currentScroll = 0;

    function getCardWidth() {
        // Get actual card width from first card
        const firstCard = slider.querySelector('.category-card');
        if (firstCard) {
            return firstCard.offsetWidth;
        }
        return 350; // fallback
    }

    function getScrollAmount() {
        // Scroll by exactly 3 cards (or however many are visible)
        const cardWidth = getCardWidth();
        return cardWidth + cardGap; // One card width plus gap
    }

    function scrollToPosition(position) {
        slider.scrollTo({
            left: position,
            behavior: 'smooth'
        });
        currentScroll = position;
    }

    prevBtn.addEventListener('click', () => {
        const scrollAmount = getScrollAmount();
        const newPosition = Math.max(0, currentScroll - scrollAmount);
        scrollToPosition(newPosition);
    });

    nextBtn.addEventListener('click', () => {
        const scrollAmount = getScrollAmount();
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        const newPosition = Math.min(maxScroll, currentScroll + scrollAmount);
        scrollToPosition(newPosition);
    });

    // Track scroll position for button states
    slider.addEventListener('scroll', () => {
        currentScroll = slider.scrollLeft;
        updateButtonStates();
    });

    function updateButtonStates() {
        const isAtStart = currentScroll <= 5; // Small tolerance for rounding
        const isAtEnd = currentScroll >= slider.scrollWidth - slider.clientWidth - 5;

        prevBtn.style.opacity = isAtStart ? '0.5' : '1';
        prevBtn.style.cursor = isAtStart ? 'not-allowed' : 'pointer';
        prevBtn.style.pointerEvents = isAtStart ? 'none' : 'auto';

        nextBtn.style.opacity = isAtEnd ? '0.5' : '1';
        nextBtn.style.cursor = isAtEnd ? 'not-allowed' : 'pointer';
        nextBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
    }

    // Initialize button states
    updateButtonStates();
}

// Export functions for use in other scripts
window.B2BWebsite = {
    validateForm,
    handleFormSubmit,
    showToast,
    smoothScroll,
    Carousel
};
