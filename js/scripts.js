document.addEventListener('DOMContentLoaded', function() {
    // Función para cargar componentes HTML
    function loadComponent(url, elementId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
                
                // Si el componente contiene scripts, los ejecutamos
                const scripts = document.getElementById(elementId).getElementsByTagName('script');
                for (let script of scripts) {
                    eval(script.innerHTML);
                }
            })
            .catch(error => console.error(`Error cargando ${url}:`, error));
    }

    // Cargar header
    if (document.getElementById('header')) {
        loadComponent('templates/header.html', 'header');
    }

    // Cargar footer
    if (document.getElementById('footer')) {
        loadComponent('templates/footer.html', 'footer');
    }
});

const scrollToTopButton = document.getElementById('scrollToTop');

// Función para verificar la posición del scroll
function toggleScrollButton() {
    if (window.scrollY > 200) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
}

// Función para volver arriba
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Event listeners
window.addEventListener('scroll', toggleScrollButton);
scrollToTopButton.addEventListener('click', scrollToTop);


// Verificar si las cookies han sido aceptadas previamente
document.addEventListener('DOMContentLoaded', function() {
    var cookieBanner = document.getElementById('cookie-banner');
    var acceptButton = document.getElementById('accept-cookies');

    // Mostrar el banner solo si las cookies no han sido aceptadas
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.classList.remove('hide');
    }

    // Aceptar cookies y ocultar el banner
    acceptButton.addEventListener('click', function() {
        // Guardar la preferencia en localStorage
        localStorage.setItem('cookiesAccepted', 'true');
        // Ocultar el banner
        cookieBanner.classList.add('hide');
    });
});

