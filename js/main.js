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

    const globalTranslations = {
        en: {
            ".footer-col:nth-child(1) h3": "Services",
            ".footer-col:nth-child(1) li:nth-child(1) a": "AI Services",
            ".footer-col:nth-child(1) li:nth-child(2) a": "Web Development",
            ".footer-col:nth-child(1) li:nth-child(3) a": "Custom CRM",
            ".footer-col:nth-child(1) li:nth-child(4) a": "Contact",
            ".footer-col:nth-child(2) h3": "Contact",
            ".footer-col:nth-child(3) li:nth-child(1) a": "Privacy policy",
            ".footer-col:nth-child(3) li:nth-child(2) a": "Cookie policy",
            ".footer-col:nth-child(4) h3": "Quick access",
            ".footer-bottom p": "© 2026 Christian Freelance. All rights reserved."
        },
        es: {
            ".footer-col:nth-child(1) h3": "Servicios",
            ".footer-col:nth-child(1) li:nth-child(1) a": "Servicios de IA",
            ".footer-col:nth-child(1) li:nth-child(2) a": "Desarrollo Web",
            ".footer-col:nth-child(1) li:nth-child(3) a": "CRM a Medida",
            ".footer-col:nth-child(1) li:nth-child(4) a": "Contacto",
            ".footer-col:nth-child(2) h3": "Contacto",
            ".footer-col:nth-child(3) li:nth-child(1) a": "Política de privacidad",
            ".footer-col:nth-child(3) li:nth-child(2) a": "Política de cookies",
            ".footer-col:nth-child(4) h3": "Acceso rápido",
            ".footer-bottom p": "© 2026 Christian Freelance. Todos los derechos reservados."
        }
    };

    const pageTranslations = {
        "index.html": {
            en: {
                ".about-copy .eyebrow": "International experience",
                ".about-copy h2": "Technical consulting with business vision and practical execution",
                ".about-copy p:nth-of-type(1)": "I have worked with companies across different sectors and countries, adapting solutions to very different operational realities. That experience helps me turn complex needs into concrete, measurable and sustainable projects.",
                ".about-copy p:nth-of-type(2)": "My approach combines strategy, development and continuous improvement. It is not only about having a beautiful website or one isolated automation. It is about building a digital system that helps you sell, organize and scale better.",
                ".about-copy .check-list li:nth-child(1)": "Clearer website architecture for SEO and conversions",
                ".about-copy .check-list li:nth-child(2)": "Automations connected to your real tools",
                ".about-copy .check-list li:nth-child(3)": "Custom development without closed platforms",
                ".about-copy .check-list li:nth-child(4)": "Direct, fast and results-driven communication",
                ".section-padding:nth-of-type(5) .eyebrow": "How I work",
                ".section-padding:nth-of-type(5) .section-title": "A clear process to detect opportunities and turn them into real improvements",
                ".process-card:nth-child(1) h3": "Audit and diagnosis",
                ".process-card:nth-child(1) p": "I review your website, tools and the points where you lose time, sales or visibility.",
                ".process-card:nth-child(2) h3": "Prioritized roadmap",
                ".process-card:nth-child(2) p": "I define what should be tackled first so the effort produces a faster return.",
                ".process-card:nth-child(3) h3": "Implementation",
                ".process-card:nth-child(3) p": "I develop, design, connect and optimize what is needed with a technical and commercial focus.",
                ".process-card:nth-child(4) h3": "Continuous improvement",
                ".process-card:nth-child(4) p": "We analyze results and refine the solution so you can keep growing without improvising.",
                ".faq-section .eyebrow": "Frequently asked questions",
                ".faq-section .section-title": "Quick answers before we start",
                ".faq-item:nth-child(1) .faq-question span": "Do you only work with clients from Spain?",
                ".faq-item:nth-child(1) .faq-answer p": "No. I work remotely with clients from Spain, Europe and other countries, adapting communication and planning to the time zone each project needs.",
                ".faq-item:nth-child(2) .faq-question span": "Can you improve an existing website without rebuilding it from scratch?",
                ".faq-item:nth-child(2) .faq-answer p": "Yes. Very often the biggest impact comes from reorganizing content, improving SEO, speed, visual design or conversions without starting over.",
                ".faq-item:nth-child(3) .faq-question span": "What kind of AI automations do you build?",
                ".faq-item:nth-child(3) .faq-answer p": "Automations for email, lead capture, information classification, answer generation, tool integration and internal business flows.",
                ".faq-item:nth-child(4) .faq-question span": "Do you also build internal software for businesses?",
                ".faq-item:nth-child(4) .faq-answer p": "Yes. I build applications and custom CRM systems for sectors that need their own workflows, centralized data and screens adapted to their real operations."
            },
            es: {
                ".about-copy .eyebrow": "Experiencia internacional",
                ".about-copy h2": "Consultoría técnica con visión de negocio y ejecución práctica",
                ".about-copy p:nth-of-type(1)": "He trabajado con empresas de distintos sectores y países, adaptando soluciones a realidades operativas muy diferentes. Esa experiencia me permite traducir necesidades complejas en proyectos concretos, medibles y sostenibles.",
                ".about-copy p:nth-of-type(2)": "Mi enfoque combina estrategia, desarrollo y mejora continua. No se trata solo de tener una web bonita o una automatización puntual: se trata de construir un sistema digital que te ayude a vender, organizarte y escalar mejor.",
                ".about-copy .check-list li:nth-child(1)": "Arquitectura web más clara para SEO y conversiones",
                ".about-copy .check-list li:nth-child(2)": "Automatizaciones conectadas con tus herramientas reales",
                ".about-copy .check-list li:nth-child(3)": "Desarrollo a medida sin depender de soluciones cerradas",
                ".about-copy .check-list li:nth-child(4)": "Comunicación directa, rápida y orientada a resultados",
                ".section-padding:nth-of-type(5) .eyebrow": "Cómo trabajo",
                ".section-padding:nth-of-type(5) .section-title": "Un proceso claro para detectar oportunidades y convertirlas en mejoras reales",
                ".process-card:nth-child(1) h3": "Auditoría y diagnóstico",
                ".process-card:nth-child(1) p": "Reviso tu web, tus herramientas y los puntos de fuga de tiempo, ventas o visibilidad.",
                ".process-card:nth-child(2) h3": "Hoja de ruta priorizada",
                ".process-card:nth-child(2) p": "Defino qué conviene atacar primero para que el esfuerzo tenga retorno rápido.",
                ".process-card:nth-child(3) h3": "Implementación",
                ".process-card:nth-child(3) p": "Desarrollo, diseño, conecto y optimizo lo necesario con foco técnico y comercial.",
                ".process-card:nth-child(4) h3": "Mejora continua",
                ".process-card:nth-child(4) p": "Analizamos resultados y ajustamos la solución para seguir creciendo sin improvisar.",
                ".faq-section .eyebrow": "Preguntas frecuentes",
                ".faq-section .section-title": "Respuestas rápidas antes de empezar",
                ".faq-item:nth-child(1) .faq-question span": "¿Trabajas solo con clientes de España?",
                ".faq-item:nth-child(1) .faq-answer p": "No. Trabajo en remoto con clientes de España, Europa y otros países, adaptando la comunicación y la planificación al huso horario que necesite cada proyecto.",
                ".faq-item:nth-child(2) .faq-question span": "¿Puedes mejorar una web ya existente sin rehacerla completa?",
                ".faq-item:nth-child(2) .faq-answer p": "Sí. Muchas veces el mayor impacto viene de reorganizar contenido, mejorar SEO, velocidad, diseño visual o conversiones sin empezar desde cero.",
                ".faq-item:nth-child(3) .faq-question span": "¿Qué tipo de automatizaciones con IA desarrollas?",
                ".faq-item:nth-child(3) .faq-answer p": "Automatizaciones para correos, captación de leads, clasificación de información, generación de respuestas, integración entre herramientas y flujos internos de negocio.",
                ".faq-item:nth-child(4) .faq-question span": "¿También desarrollas software interno para negocios?",
                ".faq-item:nth-child(4) .faq-answer p": "Sí. Desarrollo aplicaciones y CRM a medida para sectores que necesitan procesos propios, datos centralizados y pantallas adaptadas a su operativa real."
            }
        },
        "servicios-ia.html": {
            en: {
                ".service-item:nth-child(1) .eyebrow": "Smart workflows",
                ".service-item:nth-child(1) h2": "Workflow automation",
                ".service-item:nth-child(1) p": "I analyze your daily operations to detect repetitive tasks, bottlenecks and manual actions that can be delegated to AI-assisted systems.",
                ".service-item:nth-child(1) .check-list li:nth-child(1)": "Automatic classification of emails, leads and requests",
                ".service-item:nth-child(1) .check-list li:nth-child(2)": "Assisted generation of replies, summaries and reports",
                ".service-item:nth-child(1) .check-list li:nth-child(3)": "Faster internal processes with fewer human errors",
                ".service-item:nth-child(2) .eyebrow": "Real integration",
                ".service-item:nth-child(2) h2": "Connection between CRM, billing, email and management tools",
                ".service-item:nth-child(2) p": "AI has more value when it works with the systems you already use. I design integrations that share data, trigger actions and keep continuity between tools.",
                ".service-item:nth-child(2) .check-list li:nth-child(1)": "More consistent commercial follow-up",
                ".service-item:nth-child(2) .check-list li:nth-child(2)": "More agile administrative processes",
                ".service-item:nth-child(2) .check-list li:nth-child(3)": "Better traceability for clients, quotes and tasks",
                ".service-item:nth-child(3) .eyebrow": "Solid foundation",
                ".service-item:nth-child(3) h2": "Custom API development",
                ".service-item:nth-child(3) p": "If you need two or more systems to communicate securely and reliably, I build APIs prepared for stronger automations and better connected business processes.",
                ".service-item:nth-child(3) .check-list li:nth-child(1)": "Data synchronization between applications",
                ".service-item:nth-child(3) .check-list li:nth-child(2)": "Architecture ready to grow",
                ".service-item:nth-child(3) .check-list li:nth-child(3)": "Greater control over critical business processes",
                ".bg-panel .eyebrow": "Direct benefits",
                ".bg-panel .section-title": "What you can achieve when AI is integrated in a practical way",
                ".feature-card:nth-child(1) h3": "Less manual workload",
                ".feature-card:nth-child(1) p": "The team spends less time repeating tasks and more time selling, serving or making decisions.",
                ".feature-card:nth-child(2) h3": "Better customer response",
                ".feature-card:nth-child(2) p": "Reaction times drop and important information moves faster across systems.",
                ".feature-card:nth-child(3) h3": "Scalability",
                ".feature-card:nth-child(3) p": "Processes grow with your company without multiplying administrative work."
            },
            es: {
                ".service-item:nth-child(1) .eyebrow": "Flujos inteligentes",
                ".service-item:nth-child(1) h2": "Automatización de flujos de trabajo",
                ".service-item:nth-child(1) p": "Analizo tu operativa diaria para detectar tareas repetitivas, cuellos de botella y acciones manuales que pueden delegarse en sistemas asistidos por IA.",
                ".service-item:nth-child(1) .check-list li:nth-child(1)": "Clasificación automática de correos, leads y solicitudes",
                ".service-item:nth-child(1) .check-list li:nth-child(2)": "Generación asistida de respuestas, resúmenes e informes",
                ".service-item:nth-child(1) .check-list li:nth-child(3)": "Procesos internos más rápidos y con menos errores humanos",
                ".service-item:nth-child(2) .eyebrow": "Integración real",
                ".service-item:nth-child(2) h2": "Conexión entre CRM, facturación, email y herramientas de gestión",
                ".service-item:nth-child(2) p": "La IA tiene más valor cuando trabaja con los sistemas que ya usas. Diseño integraciones que permiten compartir datos, activar acciones y mantener un flujo continuo entre herramientas.",
                ".service-item:nth-child(2) .check-list li:nth-child(1)": "Seguimiento comercial más consistente",
                ".service-item:nth-child(2) .check-list li:nth-child(2)": "Procesos administrativos más ágiles",
                ".service-item:nth-child(2) .check-list li:nth-child(3)": "Mejor trazabilidad de clientes, presupuestos y tareas",
                ".service-item:nth-child(3) .eyebrow": "Base sólida",
                ".service-item:nth-child(3) h2": "Desarrollo de APIs a medida",
                ".service-item:nth-child(3) p": "Si necesitas que dos o más sistemas se comuniquen de forma segura y estable, desarrollo APIs pensadas para soportar automatizaciones más potentes y procesos empresariales bien conectados.",
                ".service-item:nth-child(3) .check-list li:nth-child(1)": "Sincronización de datos entre aplicaciones",
                ".service-item:nth-child(3) .check-list li:nth-child(2)": "Arquitectura preparada para crecer",
                ".service-item:nth-child(3) .check-list li:nth-child(3)": "Mayor control sobre procesos críticos del negocio",
                ".bg-panel .eyebrow": "Beneficios directos",
                ".bg-panel .section-title": "Qué puedes conseguir al integrar IA de forma práctica",
                ".feature-card:nth-child(1) h3": "Menos carga manual",
                ".feature-card:nth-child(1) p": "El equipo dedica menos tiempo a repetir tareas y más a vender, atender o tomar decisiones.",
                ".feature-card:nth-child(2) h3": "Mejor respuesta al cliente",
                ".feature-card:nth-child(2) p": "Los tiempos de reacción bajan y la información importante se mueve más rápido entre sistemas.",
                ".feature-card:nth-child(3) h3": "Escalabilidad",
                ".feature-card:nth-child(3) p": "Los procesos crecen contigo sin multiplicar el trabajo administrativo."
            }
        },
        "desarrollo-web.html": {
            en: {
                ".service-item:nth-child(1) .eyebrow": "Strong digital presence",
                ".service-item:nth-child(1) h2": "Custom websites and online stores",
                ".service-item:nth-child(1) p": "I design corporate websites, catalogs and ecommerce experiences with clear structure, reasonable loading times and calls to action that are well resolved.",
                ".service-item:nth-child(1) .check-list li:nth-child(1)": "Architecture designed for SEO and usability",
                ".service-item:nth-child(1) .check-list li:nth-child(2)": "Responsive design for mobile, tablet and desktop",
                ".service-item:nth-child(1) .check-list li:nth-child(3)": "Experience focused on trust and conversion",
                ".service-item:nth-child(2) .eyebrow": "Real customization",
                ".service-item:nth-child(2) h2": "WordPress, PrestaShop and custom features",
                ".service-item:nth-child(2) p": "If you work with WordPress or PrestaShop, I can build modules, configurations and custom pieces so the platform truly fits your project.",
                ".service-item:nth-child(2) .check-list li:nth-child(1)": "Integrations with payments, shipping or external tools",
                ".service-item:nth-child(2) .check-list li:nth-child(2)": "Product configurators and private areas",
                ".service-item:nth-child(2) .check-list li:nth-child(3)": "Performance, security and purchase experience improvements",
                ".service-item:nth-child(3) .eyebrow": "Immersive content",
                ".service-item:nth-child(3) h2": "Digital magazines, interactive catalogs and visual experiences",
                ".service-item:nth-child(3) p": "I turn static publications into more attractive digital pieces, with refined navigation and a presentation that invites users to explore more content.",
                ".service-item:nth-child(3) .check-list li:nth-child(1)": "More memorable and current visual formats",
                ".service-item:nth-child(3) .check-list li:nth-child(2)": "Experiences designed for any device",
                ".service-item:nth-child(3) .check-list li:nth-child(3)": "More time on site and a stronger brand perception",
                ".bg-panel .eyebrow": "What I protect in every web project",
                ".bg-panel .section-title": "I do not just design pages: I build a more competitive digital base",
                ".feature-card:nth-child(1) h3": "On-page SEO",
                ".feature-card:nth-child(1) p": "Semantic structure, content hierarchy, metadata and internal linking planned more carefully.",
                ".feature-card:nth-child(2) h3": "Performance",
                ".feature-card:nth-child(2) p": "Resource optimization, lighter visual loading and a better mobile experience.",
                ".feature-card:nth-child(3) h3": "Conversion",
                ".feature-card:nth-child(3) p": "Clearer messaging, visible CTAs and a navigation that helps the user decide."
            },
            es: {
                ".service-item:nth-child(1) .eyebrow": "Presencia digital sólida",
                ".service-item:nth-child(1) h2": "Páginas web y tiendas online a medida",
                ".service-item:nth-child(1) p": "Diseño webs corporativas, catálogos y ecommerce con una estructura clara, tiempos de carga razonables y llamadas a la acción bien resueltas.",
                ".service-item:nth-child(1) .check-list li:nth-child(1)": "Arquitectura pensada para SEO y usabilidad",
                ".service-item:nth-child(1) .check-list li:nth-child(2)": "Diseño adaptable a móvil, tablet y escritorio",
                ".service-item:nth-child(1) .check-list li:nth-child(3)": "Experiencia enfocada en confianza y conversión",
                ".service-item:nth-child(2) .eyebrow": "Personalización real",
                ".service-item:nth-child(2) h2": "WordPress, PrestaShop y funcionalidades a medida",
                ".service-item:nth-child(2) p": "Si trabajas con WordPress o PrestaShop, puedo desarrollar módulos, configuraciones y piezas personalizadas para que la plataforma se adapte de verdad a tu proyecto.",
                ".service-item:nth-child(2) .check-list li:nth-child(1)": "Integraciones con pagos, envíos o herramientas externas",
                ".service-item:nth-child(2) .check-list li:nth-child(2)": "Configuradores de producto y áreas privadas",
                ".service-item:nth-child(2) .check-list li:nth-child(3)": "Mejoras de rendimiento, seguridad y experiencia de compra",
                ".service-item:nth-child(3) .eyebrow": "Contenidos inmersivos",
                ".service-item:nth-child(3) h2": "Revistas digitales, catálogos interactivos y experiencias visuales",
                ".service-item:nth-child(3) p": "Transformo publicaciones estáticas en piezas digitales más atractivas, con navegación cuidada y una presentación visual que invita a explorar más contenido.",
                ".service-item:nth-child(3) .check-list li:nth-child(1)": "Formatos visuales más actuales y memorables",
                ".service-item:nth-child(3) .check-list li:nth-child(2)": "Experiencias pensadas para cualquier dispositivo",
                ".service-item:nth-child(3) .check-list li:nth-child(3)": "Mayor tiempo de permanencia y mejor percepción de marca",
                ".bg-panel .eyebrow": "Qué cuido en cada proyecto web",
                ".bg-panel .section-title": "No solo diseño páginas: construyo una base digital más competitiva",
                ".feature-card:nth-child(1) h3": "SEO on-page",
                ".feature-card:nth-child(1) p": "Estructura semántica, jerarquía de contenidos, metadatos y enlazado interno mejor planteados.",
                ".feature-card:nth-child(2) h3": "Rendimiento",
                ".feature-card:nth-child(2) p": "Optimización de recursos, carga visual más eficiente y una experiencia móvil más cuidada.",
                ".feature-card:nth-child(3) h3": "Conversión",
                ".feature-card:nth-child(3) p": "Mensajes más claros, CTAs visibles y una navegación que ayuda al usuario a decidir."
            }
        },
        "aplicaciones-crm.html": {
            en: {
                ".service-item:nth-child(1) .eyebrow": "Internal control",
                ".service-item:nth-child(1) h2": "Custom management software",
                ".service-item:nth-child(1) p": "I design tools to control clients, billing, appointments, inventory or tasks without forcing you into rigid third-party structures.",
                ".service-item:nth-child(1) .check-list li:nth-child(1)": "Screens and processes adapted to your business",
                ".service-item:nth-child(1) .check-list li:nth-child(2)": "Greater operational speed with fewer unnecessary steps",
                ".service-item:nth-child(1) .check-list li:nth-child(3)": "More control over data and internal operations",
                ".service-item:nth-child(2) .eyebrow": "Specific sectors",
                ".service-item:nth-child(2) h2": "Solutions for clinics, retail, hospitality, salons and more",
                ".service-item:nth-child(2) p": "Some businesses need very specific workflows. I build tools that respond to those needs without filling the system with irrelevant features.",
                ".service-item:nth-child(2) .check-list li:nth-child(1)": "Management of bookings, schedules and client records",
                ".service-item:nth-child(2) .check-list li:nth-child(2)": "Inventory, supplier and cash control",
                ".service-item:nth-child(2) .check-list li:nth-child(3)": "Commercial and administrative processes better connected",
                ".bg-panel .eyebrow": "When custom development makes sense",
                ".bg-panel .section-title": "Your business usually needs its own software when one of these things happens",
                ".feature-card:nth-child(1) h3": "Your current tool forces you to adapt to it",
                ".feature-card:nth-child(1) p": "Instead of making work easier, it imposes steps and limitations that slow the team down.",
                ".feature-card:nth-child(2) h3": "You have data spread across too many places",
                ".feature-card:nth-child(2) p": "That creates mistakes, duplicates and little visibility into what is really happening.",
                ".feature-card:nth-child(3) h3": "You need very specific processes",
                ".feature-card:nth-child(3) p": "When operations are special, generic tools usually fall short or become more expensive over time."
            },
            es: {
                ".service-item:nth-child(1) .eyebrow": "Control interno",
                ".service-item:nth-child(1) h2": "Software de gestión personalizado",
                ".service-item:nth-child(1) p": "Diseño herramientas para controlar clientes, facturación, citas, inventario o tareas sin obligarte a encajar en estructuras rígidas de terceros.",
                ".service-item:nth-child(1) .check-list li:nth-child(1)": "Pantallas y procesos adaptados a tu negocio",
                ".service-item:nth-child(1) .check-list li:nth-child(2)": "Mayor rapidez operativa y menos pasos innecesarios",
                ".service-item:nth-child(1) .check-list li:nth-child(3)": "Más control sobre datos y funcionamiento interno",
                ".service-item:nth-child(2) .eyebrow": "Sectores específicos",
                ".service-item:nth-child(2) h2": "Soluciones para clínicas, retail, hostelería, peluquerías y más",
                ".service-item:nth-child(2) p": "Hay negocios que necesitan lógicas de trabajo muy concretas. Desarrollo herramientas que responden a esas necesidades sin inflar el sistema con funciones irrelevantes.",
                ".service-item:nth-child(2) .check-list li:nth-child(1)": "Gestión de reservas, agendas y fichas de cliente",
                ".service-item:nth-child(2) .check-list li:nth-child(2)": "Control de inventario, proveedores o caja",
                ".service-item:nth-child(2) .check-list li:nth-child(3)": "Procesos comerciales y administrativos mejor conectados",
                ".bg-panel .eyebrow": "Cuándo compensa un desarrollo a medida",
                ".bg-panel .section-title": "Tu negocio suele necesitar software propio cuando pasa alguna de estas cosas",
                ".feature-card:nth-child(1) h3": "La herramienta actual te obliga a adaptarte a ella",
                ".feature-card:nth-child(1) p": "En lugar de facilitar el trabajo, te impone pasos y limitaciones que ralentizan al equipo.",
                ".feature-card:nth-child(2) h3": "Tienes datos repartidos en demasiados sitios",
                ".feature-card:nth-child(2) p": "Eso genera errores, duplicidades y poca visibilidad sobre lo que ocurre realmente.",
                ".feature-card:nth-child(3) h3": "Necesitas procesos muy concretos",
                ".feature-card:nth-child(3) p": "Cuando la operativa es especial, lo genérico suele quedarse corto o sale más caro a medio plazo."
            }
        },
        "contacto.html": {
            en: {
                ".contact-card:nth-child(1) .contact-note": "Ideal for explaining your case in more detail.",
                ".contact-card:nth-child(2) .contact-note": "A quick way to make first contact.",
                ".contact-card:nth-child(3) h3": "Remote work",
                ".contact-card:nth-child(3) p:nth-of-type(1)": "Available for projects in Spain and international clients.",
                ".contact-card:nth-child(3) .contact-note": "Adapted to different time zones depending on the project.",
                ".section-padding.bg-panel .eyebrow": "What you can ask about",
                ".section-padding.bg-panel .section-title": "Areas where I can help from the first conversation",
                ".feature-card:nth-child(1) h3": "SEO and website structure",
                ".feature-card:nth-child(1) p": "Review of content, hierarchy, indexing, metadata and ranking opportunities.",
                ".feature-card:nth-child(2) h3": "AI automation",
                ".feature-card:nth-child(2) p": "Detection of repetitive tasks, tools to connect and flows worth automating.",
                ".feature-card:nth-child(3) h3": "CRM or custom software",
                ".feature-card:nth-child(3) p": "Evaluation of whether it makes more sense to adapt an existing solution or build your own tool.",
                ".cta-shell .eyebrow": "Fast reply",
                ".cta-shell h2": "If you write with your goal and current problem, we will move much faster",
                ".cta-shell p": "Tell me whether your priority is attracting clients, saving internal time, integrating tools or building a specific platform.",
                ".cta-actions a:nth-child(1)": "Send email",
                ".cta-actions a:nth-child(2)": "Message on WhatsApp"
            },
            es: {
                ".contact-card:nth-child(1) .contact-note": "Ideal para contar tu caso con más detalle.",
                ".contact-card:nth-child(2) .contact-note": "Vía rápida para una primera toma de contacto.",
                ".contact-card:nth-child(3) h3": "Trabajo remoto",
                ".contact-card:nth-child(3) p:nth-of-type(1)": "Disponible para proyectos en España y clientes internacionales.",
                ".contact-card:nth-child(3) .contact-note": "Adaptación a distintas zonas horarias según proyecto.",
                ".section-padding.bg-panel .eyebrow": "Qué puedes consultar",
                ".section-padding.bg-panel .section-title": "Áreas en las que puedo ayudarte desde la primera conversación",
                ".feature-card:nth-child(1) h3": "SEO y estructura web",
                ".feature-card:nth-child(1) p": "Revisión de contenidos, jerarquía, indexación, metadatos y puntos de mejora para posicionar mejor.",
                ".feature-card:nth-child(2) h3": "Automatización con IA",
                ".feature-card:nth-child(2) p": "Detección de tareas repetitivas, herramientas a conectar y flujos que conviene automatizar.",
                ".feature-card:nth-child(3) h3": "CRM o software propio",
                ".feature-card:nth-child(3) p": "Valoración de si te compensa adaptar una solución existente o construir una herramienta a medida.",
                ".cta-shell .eyebrow": "Respuesta rápida",
                ".cta-shell h2": "Si me escribes con tu objetivo y el problema actual, podremos avanzar mucho más rápido",
                ".cta-shell p": "Cuéntame si tu prioridad es captar clientes, ahorrar tiempo interno, integrar herramientas o desarrollar una plataforma específica.",
                ".cta-actions a:nth-child(1)": "Enviar email",
                ".cta-actions a:nth-child(2)": "Escribir por WhatsApp"
            }
        }
    };

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

        Object.entries(globalTranslations[lang]).forEach(([selector, value]) => {
            document.querySelectorAll(selector).forEach((element) => {
                setElementText(element, value);
            });
        });

        const translationsForPage = pageTranslations[normalizedPage]?.[lang];
        if (translationsForPage) {
            Object.entries(translationsForPage).forEach(([selector, value]) => {
                document.querySelectorAll(selector).forEach((element) => {
                    setElementText(element, value);
                });
            });
        }

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
