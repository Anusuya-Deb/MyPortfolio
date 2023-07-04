// Toggle navbar icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// Active link scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset;
  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (currentScroll >= offset && currentScroll < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', currentScroll > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
});

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.about-img, .services-container, .projects-box, .contact form', { origin: 'top' });
ScrollReveal().reveal('.about-content, .heading', { origin: 'bottom' });
ScrollReveal().reveal('.home-content, .heading', { origin: 'left' });
ScrollReveal().reveal('.home-img, .heading', { origin: 'right' });
ScrollReveal().reveal('.home-content h1 , .heading', { origin: 'right' });