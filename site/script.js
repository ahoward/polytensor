// Phoenix Protocol - Scripts

// Waitlist Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('waitlist-form');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = form.querySelector('input[type="email"]').value;
            const roles = Array.from(form.querySelectorAll('input[name="role"]:checked'))
                .map(checkbox => checkbox.value);

            // For now, just show a confirmation (in production, this would send to a backend)
            alert(`Thank you for joining! We'll notify ${email} when we're ready.\n\nSelected roles: ${roles.join(', ') || 'General interest'}`);

            // TODO: Integrate with actual email service (Mailchimp, SendGrid, etc.)
            console.log('Waitlist submission:', { email, roles });

            // Reset form
            form.reset();
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe ELI5 cards
    document.querySelectorAll('.eli5-card, .why-card, .risk-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add a simple countdown timer for launch (optional)
function updateCountdown() {
    const launchDate = new Date('2026-03-01T00:00:00Z'); // Q1 2026
    const now = new Date();
    const diff = launchDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        // You can add this to the DOM if you want a countdown display
        console.log(`Days until Q1 2026: ${days} days, ${hours} hours`);
    }
}

// Run countdown on load
updateCountdown();
