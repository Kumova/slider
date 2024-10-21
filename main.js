
const tabs = document.querySelectorAll('.about-navigation__item')
const tabContents = document.querySelectorAll('.informations')
const arrowTabs = document.querySelectorAll('.arrow')
const imageSlide = document.querySelectorAll('img')
const slider = document.querySelector('.slider');
const sliderItems = Array.from(slider.children);
const nextButtons = document.querySelectorAll('#right');
const prevButtons = document.querySelectorAll('#left');


tabs.forEach(tab => {
  tab.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      showTab(tabId);
      
  });
});

arrowTabs.forEach(arrow => {
  arrow.addEventListener('click', function() {
      const arrowId = this.getAttribute('data-tab-arrow');
      showTab(arrowId);
  });
});


nextButtons.forEach(button => {
  button.addEventListener('click', function() {
      const slidesArrow = Array.from(this.parentElement.querySelectorAll('.arrow'));
      let currentIndex = slidesArrow.findIndex(arrow => arrow.classList.contains('active'));
      
      if (currentIndex !== -1) {
          slidesArrow[currentIndex].classList.remove('active');

          if (currentIndex + 1 < slidesArrow.length) {
              currentIndex++;
          } else {
              currentIndex = 0; 
          }

          slidesArrow[currentIndex].classList.add('active');

          switch (currentIndex) {
              case 0:
                  showTab('tab-1');
                  break;
              case 1:
                  showTab('tab-2');
                  break;
              case 2:
                  showTab('tab-3');
                  break;
          }
      }
  });
});


prevButtons.forEach(button => {
  button.addEventListener('click', function() {
      const slidesArrow = Array.from(this.parentElement.querySelectorAll('.arrow'));
      let currentIndex = slidesArrow.findIndex(arrow => arrow.classList.contains('active'));
      
      if (currentIndex !== -1) {
          slidesArrow[currentIndex].classList.remove('active');
          currentIndex = (currentIndex - 1 + slidesArrow.length) % slidesArrow.length;
          slidesArrow[currentIndex].classList.add('active');

          switch (currentIndex) {
              case 0:
                  showTab('tab-1');
                  break;
              case 1:
                  showTab('tab-2');
                  break;
              case 2:
                  showTab('tab-3');
                  break;
          }
      }
  });
});


function showTab(tabId) {
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  
  tabContents.forEach(content => {
    content.classList.remove('active');
  });

  arrowTabs.forEach(arrow => {
    arrow.classList.remove('active');
  });

  imageSlide.forEach(image => {
    image.classList.add('hidden');
  });

  switch (tabId) {
      case 'tab-1':
          document.getElementById('tab-01').classList.add('active');
          document.getElementById('tab-1').classList.add('active');
          document.getElementById('tab1').classList.add('active');
          document.getElementById('img1').classList.remove('hidden');
          document.getElementById('img1').setAttribute('data-active', '');
          break;
      case 'tab-2':
          document.getElementById('tab-02').classList.add('active');
          document.getElementById('tab-2').classList.add('active');
          document.getElementById('tab2').classList.add('active');
          document.getElementById('img2').classList.remove('hidden');
          document.getElementById('img2').setAttribute('data-active', '');
          break;
      case 'tab-3':
          document.getElementById('tab-03').classList.add('active');
          document.getElementById('tab-3').classList.add('active');
          document.getElementById('tab3').classList.add('active');
          document.getElementById('img3').classList.remove('hidden');
          document.getElementById('img3').classList.add('active');
          break;
  }
}



function showArrow(arrowId) {
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  tabContents.forEach(content => {
    content.classList.remove('active');
  });

  arrowTabs.forEach(arrow => {
    arrow.classList.remove('active');
  });

  imageSlide.forEach(image => {
    image.classList.add('hidden');
  });

  
  switch (arrowId) {
      case 'tab1':
          document.getElementById('tab-1').classList.add('active');
          document.getElementById('tab1').classList.add('active');
          document.getElementById('img1').classList.remove('hidden');
          document.getElementById('img1').setAttribute('data-active', '');
          break;
      case 'tab2':
          document.getElementById('tab-2').classList.add('active');
          document.getElementById('tab2').classList.add('active');
          document.getElementById('img2').classList.remove('hidden');
          document.getElementById('img2').setAttribute('data-active', '');
          break;
      case 'tab3':
          document.getElementById('tab-3').classList.add('active');
          document.getElementById('tab3').classList.add('active');
          document.getElementById('img3').classList.remove('hidden');
          document.getElementById('img3').classList.add('active');
          break;
  }
}


showTab('tab-1');
showArrow('tab1');




