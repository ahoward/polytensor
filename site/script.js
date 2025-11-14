// Polytensor - Minimal Scripts (No animations, professional only)

// Smooth scroll for anchor links (keep minimal, no fancy animations)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#waitlist') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'auto',
                        block: 'start'
                    });
                }
            }
        });
    });
});
