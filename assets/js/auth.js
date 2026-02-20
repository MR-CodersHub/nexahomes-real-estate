document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.auth-tab');
    const forms = document.querySelectorAll('.auth-form');
    const switchLinks = document.querySelectorAll('[data-switch]');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const successOverlay = document.getElementById('success-overlay');
    const toastContainer = document.getElementById('toast-container');

    // Handle URL parameters for tab switching
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    if (mode === 'signup') {
        toggleAuth('signup');
    } else if (mode === 'login') {
        toggleAuth('login');
    }

    // Tab switching logic
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            toggleAuth(target);
        });
    });

    // Link switching logic (e.g. "Create one" link)
    switchLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-switch');
            toggleAuth(target);
        });
    });

    // Function to switch between Login and Signup
    window.toggleAuth = (target) => {
        // Reset forms and overlay
        successOverlay.classList.remove('active');

        tabs.forEach(t => {
            if (t.getAttribute('data-tab') === target) {
                t.classList.add('active');
            } else {
                t.classList.remove('active');
            }
        });

        forms.forEach(f => {
            if (f.id === `${target}-form`) {
                f.classList.add('active');
            } else {
                f.classList.remove('active');
            }
        });
    };

    // Handle Signup Form Submission
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Basic validation
            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const pass = document.getElementById('signup-pass').value;

            if (name && email && pass) {
                // Show Success Message (Inline/Overlay as requested)
                successOverlay.classList.add('active');

                // Also show a toast notification for extra feedback
                showToast('Success!', 'Your account has been created successfully. You can now log in and start learning.');

                // Optional: Clear form
                signupForm.reset();
            }
        });
    }

    // Handle Login Form Submission
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('login-email').value;
            const pass = document.getElementById('login-pass').value;

            if (email && pass) {
                // For demonstration, redirect to home or dashboard
                showToast('Welcome back!', 'Redirecting to your dashboard...');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            }
        });
    }

    // Toast Notification Function
    function showToast(title, message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <div class="toast-icon">
                <i class="fas fa-check"></i>
            </div>
            <div class="toast-content">
                <h4>${title}</h4>
                <p>${message}</p>
            </div>
        `;

        toastContainer.appendChild(toast);

        // Animate in
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);

        // Remove after 4 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toastContainer.removeChild(toast);
            }, 500);
        }, 4000);
    }
});

// Mobile menu toggle (copied or adapted from main.js if needed)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
