// Mostrar/ocultar el menú desplegable al hacer clic en el ícono
document.getElementById('menu-icon').addEventListener('click', function () {
  const dropdownMenu = document.getElementById('dropdown-menu');
  dropdownMenu.classList.toggle('show');
});

// Alternar la visibilidad del submenú "Reseñas" al hacer clic
document.getElementById('resenas-link').addEventListener('click', function (e) {
  e.preventDefault(); // Evita la redirección
  const submenu = document.getElementById('submenu-resenas');
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
});

// Cerrar el menú si se hace clic fuera del menú
document.addEventListener('click', function (event) {
  const dropdownMenu = document.getElementById('dropdown-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (!dropdownMenu.contains(event.target) && !menuIcon.contains(event.target)) {
    dropdownMenu.classList.remove('show');
  }
});
  // -------------------------------------------------------------
// ICONOS HEADER Y FOOTER

  // Se seleccionalos íconos por su id
  document.addEventListener('DOMContentLoaded', function() {
    // Se selecciona los íconos del header
    document.getElementById('facebook-icon').addEventListener('click', function() {
      window.open('https://www.facebook.com', '_blank');
    });
  
    document.getElementById('instagram-icon').addEventListener('click', function() {
      window.open('https://www.instagram.com', '_blank');
    });
  
    document.getElementById('twitter-icon').addEventListener('click', function() {
      window.open('https://x.com/home?lang=es', '_blank');
    });
  // -------------------------------------------------------------
    // Se selecciona los íconos del footer
    const footerFacebookIcon = document.querySelector('.footer-social .fi.fi-brands-facebook');
    const footerInstagramIcon = document.querySelector('.footer-social .fi.fi-brands-instagram');
    const footerTwitterIcon = document.querySelector('.footer-social .fi.fi-brands-twitter-alt');
  
    footerFacebookIcon.addEventListener('click', function() {
      window.open('https://www.facebook.com', '_blank');
    });
  
    footerInstagramIcon.addEventListener('click', function() {
      window.open('https://www.instagram.com', '_blank');
    });
  
    footerTwitterIcon.addEventListener('click', function() {
      window.open('https://x.com/home?lang=es', '_blank');
    });
  });





