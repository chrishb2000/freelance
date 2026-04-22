document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const cookieModal = document.getElementById("cookie-consent-modal");
    const acceptBtn = document.getElementById("cookie-accept-btn");
    const declineBtn = document.getElementById("cookie-decline-btn");
    const languageButtons = document.querySelectorAll(".lang-btn");
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    const lastSegment = pathSegments[pathSegments.length - 1] || "";
    const currentPage = lastSegment.endsWith(".html") ? lastSegment : "index.html";
    const spanishSegmentIndex = pathSegments.lastIndexOf("es");
    const isSpanishPath = spanishSegmentIndex !== -1 && (
        spanishSegmentIndex === pathSegments.length - 1 ||
        spanishSegmentIndex === pathSegments.length - 2
    );
    const rootSegments = isSpanishPath
        ? pathSegments.slice(0, spanishSegmentIndex)
        : (lastSegment.endsWith(".html") ? pathSegments.slice(0, -1) : pathSegments);
    const rootPrefix = rootSegments.length ? `/${rootSegments.join("/")}` : "";
    const normalizedPage = currentPage;

    const buildLocalizedUrl = (lang) => {
        const page = normalizedPage === "index.html" ? "" : normalizedPage;

        if (lang === "es") {
            return page ? `${rootPrefix}/es/${page}` : `${rootPrefix}/es/`;
        }

        return page ? `${rootPrefix}/${page}` : `${rootPrefix || "/"}`;
    };

    languageButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.lang === (isSpanishPath ? "es" : "en"));

        button.addEventListener("click", () => {
            const targetUrl = buildLocalizedUrl(button.dataset.lang);
            if (window.location.pathname !== targetUrl) {
                window.location.href = targetUrl;
            }
        });
    });

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = mainNav.classList.toggle("is-open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.toggle("fa-bars", !isOpen);
                icon.classList.toggle("fa-times", isOpen);
            }
        });

        mainNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
                const icon = menuToggle.querySelector("i");

                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-times");
                }
            });
        });
    }

    document.querySelectorAll(".main-nav a").forEach((link) => {
        const href = link.getAttribute("href");
        if (href === normalizedPage || (normalizedPage === "index.html" && href === "index.html")) {
            link.classList.add("active");
        }
    });

    document.querySelectorAll("[data-html=\"true\"]").forEach((element) => {
        element.innerHTML = element.textContent;
    });

    const revealItems = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.14 });

        revealItems.forEach((item) => observer.observe(item));
    } else {
        revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    document.querySelectorAll(".faq-question").forEach((button) => {
        button.addEventListener("click", () => {
            const expanded = button.getAttribute("aria-expanded") === "true";
            const answer = button.nextElementSibling;
            button.setAttribute("aria-expanded", String(!expanded));

            if (answer) {
                answer.style.maxHeight = expanded ? "0px" : `${answer.scrollHeight}px`;
            }
        });
    });

    if (scrollTopBtn) {
        window.addEventListener("scroll", () => {
            scrollTopBtn.classList.toggle("visible", window.scrollY > 320);
        });

        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    if (cookieModal && acceptBtn && declineBtn && !localStorage.getItem("cookieConsent")) {
        window.setTimeout(() => {
            cookieModal.classList.add("visible");
        }, 900);
    }

    [acceptBtn, declineBtn].forEach((button) => {
        if (!button || !cookieModal) {
            return;
        }

        button.addEventListener("click", () => {
            localStorage.setItem("cookieConsent", "true");
            cookieModal.classList.remove("visible");
        });
    });

    const hero = document.querySelector(".hero-section");
    const orbs = document.querySelectorAll(".hero-orb");
    if (hero && orbs.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        hero.addEventListener("mousemove", (event) => {
            const bounds = hero.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width - 0.5;
            const y = (event.clientY - bounds.top) / bounds.height - 0.5;

            orbs.forEach((orb, index) => {
                const factor = index === 0 ? 18 : 12;
                orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
            });
        });
    }

    const slides = Array.from(document.querySelectorAll(".slider-slide"));
    const dotsContainer = document.getElementById("home-slider-dots");
    let activeSlide = 0;
    let sliderTimer = null;
    let isTransitioning = false;

    const showSlide = (index) => {
        if (!slides.length || index === activeSlide || isTransitioning) {
            return;
        }

        const previousSlide = slides[activeSlide];
        const nextSlide = slides[index];
        isTransitioning = true;

        if (previousSlide) {
            previousSlide.style.zIndex = "1";
        }

        if (nextSlide) {
            nextSlide.style.zIndex = "2";
            nextSlide.classList.add("active");
        }

        if (dotsContainer) {
            dotsContainer.querySelectorAll(".slider-dot").forEach((dot, dotIndex) => {
                dot.classList.toggle("active", dotIndex === index);
            });
        }

        window.setTimeout(() => {
            if (previousSlide) {
                previousSlide.classList.remove("active");
                previousSlide.style.zIndex = "";
            }

            if (nextSlide) {
                nextSlide.style.zIndex = "";
            }

            activeSlide = index;
            isTransitioning = false;
        }, 2800);
    };

    if (slides.length && dotsContainer) {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === 0);
        });

        slides.forEach((_, index) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.className = `slider-dot${index === 0 ? " active" : ""}`;
            dot.addEventListener("click", () => {
                showSlide(index);
                resetSlider();
            });
            dotsContainer.appendChild(dot);
        });

        const nextSlide = () => {
            showSlide((activeSlide + 1) % slides.length);
        };

        const resetSlider = () => {
            window.clearInterval(sliderTimer);
            sliderTimer = window.setInterval(nextSlide, prefersReducedMotion ? 7000 : 9000);
        };

        resetSlider();
    }
});
