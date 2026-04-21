document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const cookieModal = document.getElementById("cookie-consent-modal");
    const acceptBtn = document.getElementById("cookie-accept-btn");
    const declineBtn = document.getElementById("cookie-decline-btn");
    const languageButtons = document.querySelectorAll(".lang-btn");
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    const isSpanishPath = pathSegments[0] === "es";
    const currentPage = pathSegments[pathSegments.length - 1] || "index.html";
    const normalizedPage = currentPage === "es" ? "index.html" : currentPage;

    const buildLocalizedUrl = (lang) => {
        const page = normalizedPage === "index.html" ? "" : normalizedPage;

        if (lang === "es") {
            return page ? `/es/${page}` : "/es/";
        }

        return page ? `/${page}` : "/";
    };

    const setElementText = (element, value) => {
        if (element.dataset.html === "true") {
            element.innerHTML = value;
            return;
        }

        if (element.tagName === "META") {
            element.setAttribute("content", value);
            return;
        }

        element.textContent = value;
    };

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        localStorage.setItem("site-language", lang);

        document.querySelectorAll("[data-en][data-es]").forEach((element) => {
            setElementText(element, element.dataset[lang]);
        });

        document.querySelectorAll("[data-en-content][data-es-content]").forEach((element) => {
            element.setAttribute("content", element.dataset[`${lang}Content`]);
        });

        document.querySelectorAll("[data-en-alt][data-es-alt]").forEach((element) => {
            element.setAttribute("alt", element.dataset[`${lang}Alt`]);
        });

        document.querySelectorAll("[data-en-aria-label][data-es-aria-label]").forEach((element) => {
            element.setAttribute("aria-label", element.dataset[`${lang}AriaLabel`]);
        });

        languageButtons.forEach((button) => {
            button.classList.toggle("active", button.dataset.lang === lang);
        });
    };

    languageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const targetLang = button.dataset.lang;
            setLanguage(targetLang);

            const targetUrl = buildLocalizedUrl(targetLang);
            if (window.location.pathname !== targetUrl) {
                window.location.href = targetUrl;
            }
        });
    });

    setLanguage(isSpanishPath ? "es" : "en");

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

    const showSlide = (index) => {
        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle("active", slideIndex === index);
        });

        if (dotsContainer) {
            dotsContainer.querySelectorAll(".slider-dot").forEach((dot, dotIndex) => {
                dot.classList.toggle("active", dotIndex === index);
            });
        }
    };

    if (slides.length && dotsContainer) {
        slides.forEach((_, index) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.className = `slider-dot${index === 0 ? " active" : ""}`;
            dot.addEventListener("click", () => {
                activeSlide = index;
                showSlide(activeSlide);
                resetSlider();
            });
            dotsContainer.appendChild(dot);
        });

        const nextSlide = () => {
            activeSlide = (activeSlide + 1) % slides.length;
            showSlide(activeSlide);
        };

        const resetSlider = () => {
            window.clearInterval(sliderTimer);
            sliderTimer = window.setInterval(nextSlide, 4600);
        };

        showSlide(activeSlide);
        resetSlider();
    }
});
