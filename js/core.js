
const images = document.querySelectorAll('.main_img');


window.addEventListener('scroll', () => {
    images.style.right = "-" + (window.scrollX / 1.5) + "px";
})







let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;


  function showSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    const transformValue = -currentIndex * 30 + '%';
    document.querySelector('.slider').style.transform = 'translateX(' + transformValue + ')';
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

    
