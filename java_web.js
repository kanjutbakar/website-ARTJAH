// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
      });
    }
  });

  // Sticky navbar
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
};

// Remove toggle icon and navbar when click navbar link (scroll)
navLinks.forEach(link => {
  link.onclick = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  };
});



/*==================== scroll reveal ====================*/
ScrollReveal({
   //reset: true 
   distance: '80px',
   duration: 2000,
   delay: 200
});

ScrollReveal().reveal('.home-contect, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contect h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contect p, .about-content', { origin: 'right' });
/*==================== typed js ====================*/
var typed = new Typed(".text", {
  strings: ["Sejarah seni"], // Daftar teks yang berganti-ganti
  typeSpeed: 100,  // Kecepatan mengetik (ms per karakter)
  backSpeed: 100,  // Kecepatan menghapus (ms per karakter)
  backDelay: 1000, // Jeda sebelum teks dihapus (ms)
  loop: true       // Ulangi animasi
});


