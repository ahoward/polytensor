// Polytensor - Minimal Scripts (No animations, professional only)

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

    // Smooth scroll for anchor links (keep minimal, no fancy animations)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#waitlist') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'auto', // Changed from 'smooth' to 'auto' for instant jump
                        block: 'start'
                    });
                }
            }
        });
    });
});
