// Variables globales
let currentTab = 'inicio';
let currentSlide = 0;
let slideInterval;
let touchStartX = 0;
let touchEndX = 0;

// Cargar funciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar pestañas
    setupTabs();
    
    // Inicializar carrusel
    setupCarousel();
    
    // Configurar menú móvil
    setupMobileMenu();
    
    // Inicializar validación de formulario
    setupFormValidation();
    
    // Configurar eventos touch para carrusel
    setupTouchEvents();
});

// Configuración de pestañas
function setupTabs() {
    // Inicializar la primera pestaña como activa
    openTab('inicio');
    
    // Agregar eventos click a botones de pestaña
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.textContent.toLowerCase();
            openTab(tabId);
        });
    });
}

// Función para abrir pestañas
function openTab(tabName) {
    // Ocultar todos los contenidos de pestaña
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Desactivar todos los botones de pestaña
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Mostrar el contenido de la pestaña seleccionada
    document.getElementById(tabName).classList.add('active');
    
    // Activar el botón de la pestaña seleccionada
    document.querySelector(`.tab-button[onclick="openTab('${tabName}')"]`).classList.add('active');
    
    // Actualizar pestaña actual
    currentTab = tabName;
    
    // Reiniciar carrusel si estamos en la pestaña inicio
    if (tabName === 'inicio') {
        resetCarousel();
    }
}

// Configuración del carrusel
function setupCarousel() {
    const reel = document.querySelector('.reel');
    if (!reel) return;
    
    const slides = document.querySelectorAll('.reel-item');
    const indicators = document.querySelector('.reel-indicators');
    
    // Crear indicadores para cada slide
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicators.appendChild(indicator);
    });
    
    // Configurar botones de navegación
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Iniciar autoplay
    startAutoplay();
    
    // Pausar autoplay en hover
    reel.addEventListener('mouseenter', stopAutoplay);
    reel.addEventListener('mouseleave', startAutoplay);
}

// Funciones del carrusel
function goToSlide(index) {
    const reel = document.querySelector('.reel');
    const slides = document.querySelectorAll('.reel-item');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!reel || slides.length === 0) return;
    
    currentSlide = index;
    
    // Evitar índices fuera de rango
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    
    // Mover el carrusel
    reel.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Actualizar indicadores
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

function startAutoplay() {
    stopAutoplay(); // Evitar intervalos duplicados
    slideInterval = setInterval(nextSlide, 5000); // Cambiar cada 5 segundos
}

function stopAutoplay() {
    clearInterval(slideInterval);
}

function resetCarousel() {
    currentSlide = 0;
    goToSlide(0);
    stopAutoplay();
    startAutoplay();
}

// Configuración de eventos touch para el carrusel
function setupTouchEvents() {
    const reel = document.querySelector('.reel-container');
    if (!reel) return;
    
    reel.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoplay();
    }, false);
    
    reel.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoplay();
    }, false);
}

function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe hacia la izquierda
        nextSlide();
    } else if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe hacia la derecha
        prevSlide();
    }
}

// Configuración del menú móvil
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const tabs = document.querySelector('.tabs');
    
    if (!menuToggle || !tabs) return;
    
    menuToggle.addEventListener('click', function() {
        tabs.classList.toggle('active');
    });
    
    // Cerrar menú al seleccionar una opción
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                tabs.classList.remove('active');
            }
        });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.main-nav') && tabs.classList.contains('active')) {
            tabs.classList.remove('active');
        }
    });
}

// Validación del formulario de contacto
function setupFormValidation() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener campos
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        // Validar campos
        if (nombre === '' || email === '' || mensaje === '') {
            showFormMessage('Por favor, completa todos los campos.', 'error');
            return;
        }
        
        // Validar formato de email
        if (!isValidEmail(email)) {
            showFormMessage('Por favor, introduce un correo electrónico válido.', 'error');
            return;
        }
        
        // Si la validación es exitosa, enviar el formulario con AJAX
        sendFormData(nombre, email, mensaje);
    });
}

// Validar formato de email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Mostrar mensajes del formulario
function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (!formMessage) return;
    
    formMessage.textContent = message;
    formMessage.className = 'form-message';
    formMessage.classList.add(type);
    
    // Desaparecer el mensaje después de 5 segundos
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    }, 5000);
}

// Enviar datos del formulario con AJAX
function sendFormData(nombre, email, mensaje) {
    // Crear objeto FormData
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('email', email);
    formData.append('mensaje', mensaje);
    
    // Crear y configurar solicitud AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'send_email.php', true);
    
    // Gestionar respuesta
    xhr.onload = function() {
        if (xhr.status === 200) {
            try {
                const response = JSON.parse(xhr.responseText);
                if (response.success) {
                    showFormMessage(response.message, 'success');
                    document.getElementById('contactForm').reset();
                } else {
                    showFormMessage(response.message || 'Error al enviar el mensaje.', 'error');
                }
            } catch (e) {
                showFormMessage('Error al procesar la respuesta.', 'error');
            }
        } else {
            showFormMessage('Error en la comunicación con el servidor.', 'error');
        }
    };
    
    // Gestionar errores de red
    xhr.onerror = function() {
        showFormMessage('Error de conexión con el servidor.', 'error');
    };
    
    // Enviar solicitud
    xhr.send(formData);
    
    // Mostrar mensaje de carga
    showFormMessage('Enviando mensaje...', 'info');
}

// Hacer que el carrusel sea responsivo al redimensionar la ventana
window.addEventListener('resize', function() {
    if (currentTab === 'inicio') {
        // Ajustar posición del carrusel al tamaño actual de la ventana
        goToSlide(currentSlide);
    }
    
    // Ajustar menú móvil según tamaño de pantalla
    const tabs = document.querySelector('.tabs');
    if (window.innerWidth > 768 && tabs) {
        tabs.classList.remove('active');
    }
});
