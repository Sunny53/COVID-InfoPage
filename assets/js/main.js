//Carousel Container

var currentSlide = 1;


function showSlide(slideIndex) {
  const slides = document.getElementsByClassName('carouselImgs');
  if (slideIndex > slides.length) { currentSlide = 1 }
  if (slideIndex < 1) { currentSlide = slides.length }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[currentSlide - 1].style.display = 'flex'
}


function nextSlide() {
  showSlide(currentSlide += 1);
}

function previousSlide() {
  showSlide(currentSlide -= 1);
}

window.onload = function () {
  showSlide(currentSlide);
  document.getElementById('prev').addEventListener('click', function () {
    previousSlide();
  })
  document.getElementById('next').addEventListener('click', function () {
    nextSlide();
  })
}

//Hamburger javascript//

var hamburger = document.getElementById('hamburger');
var nav = document.getElementById('nav_list');

hamburger.addEventListener('click', ()=>{
  nav.classList.toggle('tgl');
  hamburger.classList.toggle('close-tgl');
})