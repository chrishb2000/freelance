document.addEventListener('DOMContentLoaded', function() {
    console.log('Christian Freelance - Sitio cargado y listo.');

    // --- TRANSLATIONS --- //
    const translations = {
        es: {
            nav_ia: 'Servicios de IA',
            nav_web: 'Desarrollo Web',
            nav_crm: 'Aplicaciones CRMs',
            nav_contact: 'Contacto',
            hero_title: 'Potencia tu Empresa con Herramientas Digitales Inteligentes',
            hero_subtitle: 'Nómada Digital con 25+ años de experiencia. Especialista en gestión empresarial y automatización de procesos con IA.',
            hero_cta: 'Empieza Ahora',
            services_title: 'Nuestros Servicios Principales',
            service_ia_title: 'Servicios de IA',
            service_ia_desc: 'Automatizamos flujos de trabajo e integramos IA con tus herramientas de gestión para optimizar procesos y reducir costes.',
            service_web_title: 'Desarrollo Web',
            service_web_desc: 'Creamos páginas web, tiendas online y personalizamos plataformas como WordPress o PrestaShop para una presencia online única.',
            service_crm_title: 'Aplicaciones CRMs',
            service_crm_desc: 'Desarrollamos software de escritorio y CRMs a medida para la gestión específica de tu negocio, sea cual sea tu sector.',
            about_title: '25 Años de Experiencia como Nómada Digital',
            about_p1: 'Como nómada digital con más de 25 años de experiencia en el mundo del desarrollo y la tecnología, he trabajado con clientes de todo el mundo, adaptándome a diferentes culturas, husos horarios y necesidades empresariales. Esta trayectoria global me ha permitido desarrollar una perspectiva única sobre la gestión de negocios digitales.',
            about_p2: 'Mi especialidad es la gestión de herramientas digitales para empresas y la automatización de procesos de trabajo con Inteligencia Artificial. Ayudo a PYMES y autónomos a optimizar sus operaciones, reducir costes y aumentar su productividad mediante soluciones tecnológicas innovadoras y personalizadas.',
            about_p3: 'Domino múltiples tecnologías y lenguajes de programación, siendo experto en la integración de sistemas de gestión, CRMs personalizados y automatización de flujos de trabajo con IA. Mi enfoque práctico y orientado a resultados garantiza que cada proyecto entregue valor real a tu negocio.',
            footer_nav: 'Navegación',
            footer_legal: 'Información Legal',
            footer_privacy: 'Política de privacidad',
            footer_cookies: 'Política de cookies',
            footer_about: 'Quiénes somos',
            footer_contact: 'Contacto',
            footer_phone_label: 'Móvil:',
            footer_social: 'Redes Sociales',
            footer_rights: '© 2026 Christian Freelance. Todos los derechos reservados.',
            cookie_text: 'Este sitio web utiliza cookies para mejorar la experiencia del usuario. <a href="politica-cookies.html">Leer más</a>.',
            cookie_accept: 'Aceptar',
            cookie_decline: 'Rechazar',
            // Servicios IA
            ia_title: 'Servicios de Inteligencia Artificial',
            ia_intro: 'Integro soluciones de IA para automatizar tus procesos, reducir costes y liberar tu tiempo para que te centres en lo que de verdad importa: hacer crecer tu negocio.',
            ia_workflow_title: 'Automatización de Flujos de Trabajo',
            ia_workflow_desc: 'Analizo las tareas repetitivas de tu día a día y desarrollo sistemas inteligentes que las ejecutan de forma automática. Desde la clasificación de correos electrónicos y la gestión de agendas hasta la generación de informes, la IA puede trabajar por ti 24/7.',
            ia_integration_title: 'Integración con Herramientas de Gestión',
            ia_integration_desc: 'El verdadero poder de la IA reside en su capacidad para conectarse con los programas que ya utilizas. Realizo integraciones a medida con:',
            ia_crm: 'CRMs: Enriquece tus perfiles de cliente con datos predictivos y automatiza el seguimiento de ventas.',
            ia_billing: 'Software de Facturación: Automatiza la creación de facturas, el seguimiento de pagos y detecta patrones de gasto.',
            ia_email: 'Plataformas de Email: Crea respuestas automáticas inteligentes y personalizadas para tus clientes.',
            ia_api_title: 'Desarrollo de APIs a Medida',
            ia_api_desc: 'Si necesitas que dos o más aplicaciones se comuniquen entre sí, construyo APIs (Interfaces de Programación de Aplicaciones) robustas y seguras. Esto permite que tus herramientas compartan datos y funcionen como un único sistema cohesionado, abriendo la puerta a automatizaciones mucho más potentes.',
            ia_cta_title: '¿Quieres optimizar tu empresa con IA?',
            ia_cta_desc: 'Descubre cómo la inteligencia artificial puede transformar tu negocio.',
            ia_cta_btn: 'Solicita una Consultoría',
            // Desarrollo Web
            web_title: 'Desarrollo Web a Medida',
            web_intro: 'Construyo tu presencia en internet con soluciones robustas, atractivas y fáciles de gestionar, adaptadas a tus objetivos comerciales.',
            web_pages_title: 'Páginas Web y Tiendas Online',
            web_pages_desc: 'Desde una web corporativa para presentar tu marca hasta una tienda online completa para vender tus productos. Desarrollo plataformas visualmente impactantes, rápidas y seguras, optimizadas para convertir visitantes en clientes.',
            web_wp_title: 'Personalización de WordPress y PrestaShop',
            web_wp_desc: 'Voy más allá de las plantillas. Como experto en WordPress y PrestaShop, desarrollo módulos y plugins a medida para añadir funcionalidades únicas que tu proyecto necesita. Si puedes imaginarlo, puedo programarlo:',
            web_wp_li1: 'Integración con sistemas de pago y envío específicos.',
            web_wp_li2: 'Configuradores de productos personalizados.',
            web_wp_li3: 'Áreas de cliente con funcionalidades avanzadas.',
            web_wp_li4: 'Optimización de rendimiento y seguridad.',
            web_blog_title: 'Revistas Digitales Interactivas',
            web_blog_desc: 'Transformo publicaciones estáticas en experiencias digitales inmersivas. Desarrollo revistas digitales y catálogos interactivos que capturan la atención del lector con animaciones, vídeos y contenido dinámico, perfectamente visibles en cualquier dispositivo.',
            web_cta_title: '¿Necesitas una web que marque la diferencia?',
            web_cta_desc: 'Construyamos juntos tu proyecto online.',
            web_cta_btn: 'Cuéntame tu idea',
            // CRM
            crm_title: 'Aplicaciones y CRMs de Escritorio',
            crm_intro: 'Olvida las soluciones genéricas. Creo software de gestión y facturación de escritorio diseñado exclusivamente para las necesidades y procesos de tu negocio.',
            crm_soft_title: 'Software de Gestión a tu Medida',
            crm_soft_desc: 'Mientras otros ofrecen soluciones en la nube con funciones que no usas y carencias que te limitan, yo construyo programas de escritorio robustos, rápidos y seguros, centrados 100% en tu forma de trabajar. Gestiona clientes, facturas, inventario y citas desde una aplicación creada por y para ti.',
            crm_niches_title: 'Especialista en Soluciones para Nichos',
            crm_niches_desc: 'Entiendo que cada sector tiene requisitos únicos. Mi valor añadido es la capacidad de desarrollar herramientas específicas para diferentes tipos de negocios:',
            crm_clinic: 'Clínicas: Gestión de pacientes, historial médico, citas y facturación.',
            crm_hardware: 'Ferreterías: Control de inventario por código, gestión de proveedores y TPV.',
            crm_hostel: 'Hostelería: Gestión de reservas, comandas, mesas y caja.',
            crm_salon: 'Peluquerías y Centros de Estética: Agenda de citas, ficha de cliente y control de stock de productos.',
            crm_more: 'Y muchos más...',
            crm_cta_title: '¿Tu software actual no se adapta a ti?',
            crm_cta_desc: 'Es hora de tener un programa que trabaje como tú lo haces.',
            crm_cta_btn: 'Diseña tu Software',
            // Carousel
            carousel_title: 'Experiencia Global',
            carousel_slide1_title: 'Empresas Multinacionales',
            carousel_slide1_desc: 'He tenido el privilegio de trabajar con empresas multinacionales en diversos países, adaptándome a diferentes culturas empresariales, normativas internacionales y equipos distribuidos globalmente.',
            carousel_slide2_title: 'Equipos Internacionales',
            carousel_slide2_desc: 'Mi experiencia como nómada digital me ha permitido colaborar con equipos multiculturales en Europa, América y Asia, desarrollando soluciones que trascienden fronteras y zonas horarias.',
            carousel_slide3_title: 'Proyectos de Alto Impacto',
            carousel_slide3_desc: 'Desde startups en expansión hasta corporaciones establecidas, he liderado proyectos de transformación digital que han generado un impacto significativo en la eficiencia operativa y el crecimiento empresarial.',
            // Contacto
            contact_title: 'Hablemos de tu Proyecto',
            contact_intro: 'Contacta directamente por email o teléfono. Estaré encantado de escuchar tu idea y discutir cómo puedo ayudarte.',
            contact_label_name: 'Nombre',
            contact_label_email: 'Email',
            contact_label_message: 'Mensaje',
            contact_btn: 'Enviar Mensaje',
            contact_info_title: 'Información de Contacto',
            contact_email_label: 'Email:',
            contact_phone_label: 'Móvil:',
            contact_social_title: 'Redes Sociales',
            // Contacto nuevo
            contact_email_title: 'Email',
            contact_email_note: 'Respondo en menos de 24 horas',
            contact_phone_title: 'Teléfono / WhatsApp',
            contact_phone_note: 'Disponible en horario europeo',
            contact_location_title: 'Ubicación',
            contact_location_desc: 'Nómada Digital - Disponible para trabajar remotamente desde cualquier zona horaria',
            contact_cta_title: '¿Listo para empezar?',
            contact_cta_desc: 'Agenda una consulta gratuita y hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos.',
            // Gracias
            thanks_icon_title: '¡Mensaje Enviado!',
            thanks_subtitle: 'Gracias por escribirnos. En breve nos pondremos en contacto contigo.',
            thanks_btn: 'Volver al Inicio'
        },
        en: {
            nav_ia: 'AI Services',
            nav_web: 'Web Development',
            nav_crm: 'CRM Applications',
            nav_contact: 'Contact',
            hero_title: 'Power Your Business with Smart Digital Tools',
            hero_subtitle: 'Digital Nomad with 25+ years of experience. Specialist in business management and AI workflow automation.',
            hero_cta: 'Get Started',
            services_title: 'Our Main Services',
            service_ia_title: 'AI Services',
            service_ia_desc: 'We automate workflows and integrate AI with your management tools to optimize processes and reduce costs.',
            service_web_title: 'Web Development',
            service_web_desc: 'We create websites, online stores and customize platforms like WordPress or PrestaShop for a unique online presence.',
            service_crm_title: 'CRM Applications',
            service_crm_desc: 'We develop desktop software and custom CRMs for the specific management of your business, whatever your sector.',
            about_title: '25 Years of Experience as a Digital Nomad',
            about_p1: 'As a digital nomad with over 25 years of experience in the development and technology world, I have worked with clients from all over the world, adapting to different cultures, time zones and business needs. This global trajectory has allowed me to develop a unique perspective on digital business management.',
            about_p2: 'I have had the honor of collaborating with <strong>multinational companies in various countries</strong> across Europe, America and Asia, developing technological solutions that transcend borders. My experience working with internationally distributed teams has allowed me to understand the complexities of business management on a global scale.',
            about_p3: 'My specialty is managing digital tools for businesses and automating work processes with Artificial Intelligence. I help SMEs and freelancers optimize their operations, reduce costs and increase their productivity through innovative and personalized technological solutions.',
            about_p4: 'I master multiple technologies and programming languages, being an expert in the integration of management systems, personalized CRMs and automation of workflows with AI. My practical and results-oriented approach guarantees that each project delivers real value to your business.',
            // Carousel
            carousel_title: 'Global Experience',
            carousel_slide1_title: 'Multinational Companies',
            carousel_slide1_desc: 'I have had the privilege of working with multinational companies in various countries, adapting to different business cultures, international regulations and globally distributed teams.',
            carousel_slide2_title: 'International Teams',
            carousel_slide2_desc: 'My experience as a digital nomad has allowed me to collaborate with multicultural teams in Europe, America and Asia, developing solutions that transcend borders and time zones.',
            carousel_slide3_title: 'High Impact Projects',
            carousel_slide3_desc: 'From expanding startups to established corporations, I have led digital transformation projects that have generated a significant impact on operational efficiency and business growth.',
            footer_nav: 'Navigation',
            footer_legal: 'Legal Information',
            footer_privacy: 'Privacy Policy',
            footer_cookies: 'Cookie Policy',
            footer_about: 'About Us',
            footer_contact: 'Contact',
            footer_phone_label: 'Mobile:',
            footer_social: 'Social Media',
            footer_rights: '© 2026 Christian Freelance. All rights reserved.',
            cookie_text: 'This website uses cookies to improve the user experience. <a href="politica-cookies.html">Read more</a>.',
            cookie_accept: 'Accept',
            cookie_decline: 'Decline',
            // Servicios IA
            ia_title: 'Artificial Intelligence Services',
            ia_intro: 'I integrate AI solutions to automate your processes, reduce costs and free up your time so you can focus on what really matters: growing your business.',
            ia_workflow_title: 'Workflow Automation',
            ia_workflow_desc: 'I analyze your day-to-day repetitive tasks and develop intelligent systems that execute them automatically. From email classification and agenda management to report generation, AI can work for you 24/7.',
            ia_integration_title: 'Integration with Management Tools',
            ia_integration_desc: 'The real power of AI lies in its ability to connect with the programs you already use. I make custom integrations with:',
            ia_crm: 'CRMs: Enrich your customer profiles with predictive data and automate sales follow-up.',
            ia_billing: 'Billing Software: Automate invoice creation, payment tracking and detect spending patterns.',
            ia_email: 'Email Platforms: Create intelligent and personalized automatic responses for your customers.',
            ia_api_title: 'Custom API Development',
            ia_api_desc: 'If you need two or more applications to communicate with each other, I build robust and secure APIs (Application Programming Interfaces). This allows your tools to share data and function as a single cohesive system, opening the door to much more powerful automations.',
            ia_cta_title: 'Want to optimize your company with AI?',
            ia_cta_desc: 'Discover how artificial intelligence can transform your business.',
            ia_cta_btn: 'Request a Consultation',
            // Desarrollo Web
            web_title: 'Custom Web Development',
            web_intro: 'I build your internet presence with robust, attractive and easy-to-manage solutions, adapted to your business objectives.',
            web_pages_title: 'Websites and Online Stores',
            web_pages_desc: 'From a corporate website to present your brand to a complete online store to sell your products. I develop visually striking, fast and secure platforms, optimized to convert visitors into customers.',
            web_wp_title: 'WordPress and PrestaShop Customization',
            web_wp_desc: 'I go beyond templates. As an expert in WordPress and PrestaShop, I develop custom modules and plugins to add unique functionalities that your project needs. If you can imagine it, I can program it:',
            web_wp_li1: 'Integration with specific payment and shipping systems.',
            web_wp_li2: 'Custom product configurators.',
            web_wp_li3: 'Customer areas with advanced functionalities.',
            web_wp_li4: 'Performance and security optimization.',
            web_blog_title: 'Interactive Digital Magazines',
            web_blog_desc: 'I transform static publications into immersive digital experiences. I develop digital magazines and interactive catalogs that capture the reader\'s attention with animations, videos and dynamic content, perfectly visible on any device.',
            web_cta_title: 'Need a website that makes a difference?',
            web_cta_desc: 'Let\'s build your online project together.',
            web_cta_btn: 'Tell Me Your Idea',
            // CRM
            crm_title: 'Desktop Applications and CRMs',
            crm_intro: 'Forget generic solutions. I create desktop management and billing software designed exclusively for your business needs and processes.',
            crm_soft_title: 'Custom Management Software',
            crm_soft_desc: 'While others offer cloud solutions with functions you don\'t use and limitations that restrict you, I build robust, fast and secure desktop programs, 100% focused on your way of working. Manage clients, invoices, inventory and appointments from an application created by and for you.',
            crm_niches_title: 'Specialist in Niche Solutions',
            crm_niches_desc: 'I understand that each sector has unique requirements. My added value is the ability to develop specific tools for different types of businesses:',
            crm_clinic: 'Clinics: Patient management, medical history, appointments and billing.',
            crm_hardware: 'Hardware Stores: Inventory control by code, supplier management and POS.',
            crm_hostel: 'Hospitality: Reservation management, orders, tables and cash register.',
            crm_salon: 'Hair Salons and Beauty Centers: Appointment scheduling, customer file and product stock control.',
            crm_more: 'And many more...',
            crm_cta_title: 'Your current software doesn\'t fit you?',
            crm_cta_desc: 'It\'s time to have a program that works the way you do.',
            crm_cta_btn: 'Design Your Software',
            // Contacto
            contact_title: 'Let\'s Talk About Your Project',
            contact_intro: 'Fill out the form or contact directly by email or phone. I\'d be happy to hear your idea.',
            contact_label_name: 'Name',
            contact_label_email: 'Email',
            contact_label_message: 'Message',
            contact_btn: 'Send Message',
            contact_info_title: 'Contact Information',
            contact_email_label: 'Email:',
            contact_phone_label: 'Mobile:',
            contact_social_title: 'Social Media',
            // Contacto nuevo
            contact_email_title: 'Email',
            contact_email_note: 'I respond in less than 24 hours',
            contact_phone_title: 'Phone / WhatsApp',
            contact_phone_note: 'Available during European hours',
            contact_location_title: 'Location',
            contact_location_desc: 'Digital Nomad - Available to work remotely from any time zone',
            contact_cta_title: 'Ready to get started?',
            contact_cta_desc: 'Schedule a free consultation and let\'s talk about how I can help you achieve your goals.',
            // Gracias
            thanks_icon_title: 'Message Sent!',
            thanks_subtitle: 'Thank you for writing to us. We will contact you shortly.',
            thanks_btn: 'Back to Home'
        }
    };

    // --- LANGUAGE SWITCHER --- //
    const languageButtons = document.querySelectorAll('.language-switcher button');
    const currentLang = localStorage.getItem('language') || 'es';

    function setLanguage(lang) {
        if (!translations[lang]) return;
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (element.tagName === 'A' || element.tagName === 'P') {
                    element.innerHTML = translations[lang][key];
                } else if (element.tagName === 'LI') {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Update form labels specifically
        const formNameLabel = document.querySelector('label[for="name"]');
        const formEmailLabel = document.querySelector('label[for="email"]');
        const formMessageLabel = document.querySelector('label[for="message"]');
        const formSubmitBtn = document.querySelector('button[type="submit"]');
        
        if (formNameLabel) formNameLabel.textContent = translations[lang].contact_label_name;
        if (formEmailLabel) formEmailLabel.textContent = translations[lang].contact_label_email;
        if (formMessageLabel) formMessageLabel.textContent = translations[lang].contact_label_message;
        if (formSubmitBtn) formSubmitBtn.textContent = translations[lang].contact_btn;

        // Update button states
        languageButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });

        // Save preference
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
    }

    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            setLanguage(button.dataset.lang);
        });
    });

    // Set initial language
    setLanguage(currentLang);

    // --- SCROLL ANIMATIONS --- //
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    document.querySelectorAll('.section-padding').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(section);
    });

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

    // --- CAROUSEL --- //
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const carouselDots = document.querySelectorAll('.carousel-dot');
    let currentSlide = 0;
    let carouselInterval;

    function showSlide(index) {
        carouselSlides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev');
            if (i === index) {
                slide.classList.add('active');
            } else if (i < index) {
                slide.classList.add('prev');
            }
        });

        carouselDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % carouselSlides.length;
        showSlide(currentSlide);
    }

    function startCarousel() {
        carouselInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function stopCarousel() {
        clearInterval(carouselInterval);
    }

    if (carouselSlides.length > 0) {
        // Start carousel
        startCarousel();

        // Dot navigation
        carouselDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                stopCarousel();
                currentSlide = index;
                showSlide(currentSlide);
                startCarousel();
            });
        });

        // Pause on hover
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', stopCarousel);
            carouselContainer.addEventListener('mouseleave', startCarousel);
        }
    }
});
