document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario para mostrar el pop-up
    
    // Muestra el pop-up
    document.getElementById('popup').style.display = 'flex';
});

// Función para cerrar el pop-up
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}