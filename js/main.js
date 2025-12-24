// ===================================
// Scroll Progress Indicator
// ===================================

class ScrollProgress {
    constructor() {
        this.progressBar = document.getElementById('scroll-progress');
        if (!this.progressBar) return;

        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.updateProgress());
        this.updateProgress();
    }

    updateProgress() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        this.progressBar.style.width = scrolled + '%';
    }
}

// ===================================
// Smooth Scroll Navigation
// ===================================

class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ===================================
// Register Button Interaction
// ===================================

class RegisterButton {
    constructor() {
        this.button = document.getElementById('register-btn');
        if (!this.button) return;

        this.init();
    }

    init() {
        this.button.addEventListener('click', () => this.handleClick());
        this.button.addEventListener('mousedown', (e) => this.createRipple(e));
    }

    handleClick() {
        const message = `✨ Thank you for your interest!\n\n` +
            `📋 Event Details:\n` +
            `━━━━━━━━━━━━━━━━━━\n` +
            `📅 Mode: Offline\n` +
            `👥 Class: 6th to 8th\n` +
            `🎯 Theme: Human vs AI\n` +
            `⏱️ Duration: 1 Hour\n\n` +
            `📞 Contact Information:\n` +
            `━━━━━━━━━━━━━━━━━━\n` +
            `Event Coordinator: Mrs. Monika\n` +
            `Phone: 9508882810 / 7061930023\n\n` +
            `We look forward to seeing your amazing work! 🚀`;

        alert(message);
    }

    createRipple(e) {
        const ripple = document.createElement('span');
        const rect = this.button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            border-radius: 50%;
            background: rgba(0, 212, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        `;

        this.button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }
}

// ===================================
// Card Hover Effects Enhancement
// ===================================

class CardEffects {
    constructor() {
        this.cards = document.querySelectorAll('.card, .info-card, .app-card, .strength-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => this.handleMouseEnter(e));
            card.addEventListener('mousemove', (e) => this.handleMouseMove(e));
            card.addEventListener('mouseleave', (e) => this.handleMouseLeave(e));
        });
    }

    handleMouseEnter(e) {
        const card = e.currentTarget;
        card.style.transition = 'transform 0.1s ease';
    }

    handleMouseMove(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    }

    handleMouseLeave(e) {
        const card = e.currentTarget;
        card.style.transition = 'transform 0.3s ease';
        card.style.transform = '';
    }
}

// ===================================
// Lazy Loading Images
// ===================================

class LazyImageLoader {
    constructor() {
        this.images = document.querySelectorAll('img[src*="unsplash"]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.style.opacity = '0';
                        img.style.transition = 'opacity 0.5s ease';

                        img.onload = () => {
                            img.style.opacity = '1';
                        };

                        imageObserver.unobserve(img);
                    }
                });
            });

            this.images.forEach(img => imageObserver.observe(img));
        }
    }
}

// ===================================
// Dynamic Year Update
// ===================================

function updateFooterYear() {
    const footer = document.querySelector('.footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace(/\d{4}/, currentYear);
    }
}

// ===================================
// Add Ripple Animation Styles
// ===================================

function addRippleStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .register-btn {
            position: relative;
            overflow: hidden;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ===================================
// Performance Monitoring
// ===================================

function logPerformance() {
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`%c⚡ Page loaded in ${loadTime.toFixed(2)}ms`,
            'color: #10b981; font-weight: bold; font-size: 14px;');

        // Log navigation timing if available
        if (performance.getEntriesByType) {
            const navTiming = performance.getEntriesByType('navigation')[0];
            if (navTiming) {
                console.log(`%c📊 Performance Metrics:`,
                    'color: #7c3aed; font-weight: bold; font-size: 14px;');
                console.log(`  DOM Content Loaded: ${navTiming.domContentLoadedEventEnd.toFixed(2)}ms`);
                console.log(`  Load Complete: ${navTiming.loadEventEnd.toFixed(2)}ms`);
            }
        }
    });
}

// ===================================
// Console Welcome Message
// ===================================

function showWelcomeMessage() {
    console.log('%c🧠 Human Intelligence vs 🤖 Artificial Intelligence',
        'color: #00d4ff; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);');
    console.log('%cWelcome to the ultimate comparison!',
        'color: #7c3aed; font-size: 16px; font-weight: bold;');
    console.log('%cBuilt with pure HTML, CSS, and JavaScript',
        'color: #f59e0b; font-size: 12px;');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        'color: #64748b;');
}

// ===================================
// Initialize All Features
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Show welcome message
    showWelcomeMessage();

    // Initialize features
    new ScrollProgress();
    new SmoothScroll();
    new RegisterButton();
    new CardEffects();
    new LazyImageLoader();

    // Add ripple styles
    addRippleStyles();

    // Update footer year
    updateFooterYear();

    // Log performance
    logPerformance();

    console.log('%c✅ All features initialized successfully!',
        'color: #10b981; font-weight: bold; font-size: 14px;');
});
