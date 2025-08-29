document.addEventListener('DOMContentLoaded', function() {
    console.log('Christian Freelance - Sitio cargado y listo.');

    // --- ACTIVE NAV LINK --- //
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLink = document.querySelector(`.main-nav a[href="${currentPage}"]`);
    if (navLink) {
        navLink.classList.add('active');
    }

    // --- SCROLL TO TOP BUTTON --- //
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        scrollTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- MOBILE MENU TOGGLE --- //
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('is-open');
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('is-open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- COOKIE CONSENT MODAL --- //
    const cookieModal = document.getElementById('cookie-consent-modal');
    const acceptBtn = document.getElementById('cookie-accept-btn');
    const declineBtn = document.getElementById('cookie-decline-btn');

    if (cookieModal && acceptBtn && declineBtn) {
        // Check if consent was already given
        if (!localStorage.getItem('cookieConsent')) {
            // Show the modal after a short delay
            setTimeout(() => {
                cookieModal.classList.add('visible');
            }, 1500);
        }

        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'true');
            cookieModal.classList.remove('visible');
        });

        declineBtn.addEventListener('click', function() {
            cookieModal.classList.remove('visible');
        });
    }
});
