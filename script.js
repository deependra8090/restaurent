// Slideshow logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slideshow img');
const dots = document.querySelectorAll('.dots span');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
      dots[i].classList.add('active');
    }
  });
  currentSlide = index;
}

setInterval(() => {
  showSlide((currentSlide + 1) % slides.length);
}, 4000);

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
