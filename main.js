const slider = document.querySelector('.slider');
const sliderItems = Array.from(slider.children);
const navigationSlider = document.querySelectorAll('.about-navigation__item');
const rowRight = document.getElementById('right');
const rowLeft = document.getElementById('left');
const indicators = document.querySelectorAll('.arrow');
const firstSlide = document.getElementById('1')
const secondSlide = document.getElementById('2')
const threeSlide = document.getElementById('3')
const firstArrow = document.getElementById('once')
const secondArrow = document.getElementById('two')
const threeArrow = document.getElementById('three')



const handeClickRight = (event) => {  
  const currentSlide = slider.querySelector('[data-active]');
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add('hidden');
  currentSlide.removeAttribute('data-active');
  const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1 ;
  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
  nextSlide.classList.remove('hidden');
  nextSlide.setAttribute('data-active', '');
};

const handeClickLeft = (event) => {  
  const currentSlide = slider.querySelector('[data-active]');
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add('hidden');
  currentSlide.removeAttribute('data-active');
  const nextSlideIndex = currentSlideIndex  === 0 ? sliderItems.length - 1 : currentSlideIndex - 1 ;
  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
  nextSlide.classList.remove('hidden');
  nextSlide.setAttribute('data-active', '');
};

sliderItems.forEach(function (slide, index) {
  if (index !==0) {
    slide.classList.add('hidden');
  }
  slide.dataset.index = index;
  sliderItems[0].setAttribute('data-active', '');
});

const showSlides = (event) => {
 
  const firstSlide = document.getElementsByTagName('li')[0];
  const secondSlide = document.getElementsByTagName('li')[1];
  const threeSlide = document.getElementsByTagName('li')[2];
  const info = document.querySelectorAll('.informations');
  const slide = document.querySelectorAll('img')
  const arrow = document.querySelectorAll('.arrow')
  slide[0].classList.add('hidden');
  slide[1].classList.add('hidden');
  slide[2].classList.add('hidden');
  firstSlide.classList.remove('active')
  secondSlide.classList.remove('active')
  threeSlide.classList.remove('active')
  info[1].classList.remove('active')
  info[0].classList.remove('active')
  info[2].classList.remove('active')
  slide[0].removeAttribute('data-active');
  slide[1].removeAttribute('data-active');
  slide[2].removeAttribute('data-active');
  arrow[0].classList.remove('active')
  arrow[1].classList.remove('active')
  arrow[2].classList.remove('active')

  if (event.target.parentElement.id === '1') {
    firstSlide.classList.add('active')
    info[0].classList.add('active')
    slide[0].classList.remove('hidden')
    slide[0].setAttribute('data-active', '');
    arrow[0].classList.add('active')
  }

  if (event.target.parentElement.id === '2') {
    secondSlide.classList.add('active')
    info[1].classList.add('active')
    slide[1].classList.remove('hidden')
    slide[1].setAttribute('data-active', '');
    arrow[1].classList.add('active')
  }

  if (event.target.parentElement.id === '3') {
    threeSlide.classList.add('active')
    info[2].classList.add('active')
    slide[2].classList.remove('hidden')
    slide[2].setAttribute('data-active', '');
    arrow[2].classList.add('active')
  }
};


const arrowSlides = (event) => {
  const firstArrow = document.getElementById('once')
  const secondArrow = document.getElementById('two')
  const threeArrow = document.getElementById('three')
  const info = document.querySelectorAll('.informations');
  const slide = document.querySelectorAll('img')
  const navigationSlider = document.querySelectorAll('.about-navigation__item');
  firstArrow.classList.remove('active')
  secondArrow.classList.remove('active')
  threeArrow.classList.remove('active')
  info[0].classList.remove('active')
  info[1].classList.remove('active')
  info[2].classList.remove('active')
  navigationSlider[0].classList.remove('active');
  navigationSlider[1].classList.remove('active');
  navigationSlider[2].classList.remove('active');
  slide[0].classList.add('hidden');
  slide[1].classList.add('hidden');
  slide[2].classList.add('hidden');
  slide[0].removeAttribute('data-active');
  slide[1].removeAttribute('data-active');
  slide[2].removeAttribute('data-active');

  if (event.target.id === 'once') {
    console.log('дура')
    firstArrow.classList.add('active')
    info[0].classList.add('active')
    navigationSlider[0].classList.add('active');
    slide[0].classList.remove('hidden');
    slide[0].setAttribute('data-active', '');
  
  }
  
  if (event.target.id === 'two') {
    secondArrow.classList.add('active')
    info[1].classList.add('active')
    navigationSlider[1].classList.add('active');
    slide[1].classList.remove('hidden');
    slide[1].setAttribute('data-active', '');
  }

  if (event.target.id === 'three') {
    threeArrow.classList.add('active')
    info[2].classList.add('active')
    navigationSlider[2].classList.add('active');
    slide[2].classList.remove('hidden');
    slide[2].setAttribute('data-active', '');
  }
};



rowRight.addEventListener('click', handeClickRight);
rowLeft.addEventListener('click', handeClickLeft);
firstSlide.addEventListener('click', showSlides);
secondSlide.addEventListener('click', showSlides);
threeSlide.addEventListener('click', showSlides);
firstArrow.addEventListener('click', arrowSlides);
secondArrow.addEventListener('click', arrowSlides);
threeArrow.addEventListener('click', arrowSlides);
