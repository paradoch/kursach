let slideIndex1 = 0;
const pagination = document.querySelector('.pagination');

function showSlides() {
  const slides = document.querySelectorAll('.blocki-section5');

  if (slideIndex1 >= slides.length) {
    slideIndex1 = 0;
  }
  if (slideIndex1 < 0) {
    slideIndex1 = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[slideIndex1].classList.add('active');

  pagination.textContent = `${slideIndex1 + 1}/${slides.length}`;
}

function prevSlide() {
  slideIndex1--;
  showSlides();
}

function nextSlide() {
  slideIndex1++;
  showSlides();
}

showSlides();
