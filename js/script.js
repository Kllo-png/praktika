document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider-range');
    const afterImage = document.querySelector('.after-image');
    const sliderButton = document.querySelector('.slider-button');
  
    const updateView = (value) => {
      afterImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
      sliderButton.style.left = `${value}%`;
    };
  
    slider.addEventListener('input', (e) => {
      updateView(e.target.value);
    });
  
    updateView(slider.value);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const phoneInputs = document.querySelectorAll('.phone-input');

    phoneInputs.forEach(input => {
      input.addEventListener('input', function (e) {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        e.target.value = !x[2] ? '+7' : '+7 (' + x[2] + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
      });
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const reviewItems = document.querySelectorAll('.review-item');
    const dots = document.querySelectorAll('.dot');
  
    let currentIndex = 1; // старт с первого настоящего
    let itemWidth = 0;
    let interval = null;
    const totalSlides = 5;
  
    function updateItemWidth() {
      // Определяем количество видимых элементов
      const visibleItems = window.innerWidth < 768 ? 2 : 4;
      itemWidth = track.offsetWidth / visibleItems;
    }
  
    function updatePosition(animate = true) {
      track.style.transition = animate ? 'transform 0.5s ease' : 'none';
      track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      updateDots();
    }
  
    function updateDots() {
      let dotIndex = currentIndex - 1;
      if (dotIndex < 0) dotIndex = totalSlides - 1;
      if (dotIndex >= totalSlides) dotIndex = 0;
  
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === dotIndex);
      });
    }
  
    function goNext() {
      currentIndex++;
      updatePosition();
  
      if (currentIndex === reviewItems.length - 1) {
        setTimeout(() => {
          currentIndex = 1;
          updatePosition(false);
        }, 500);
      }
    }
  
    function goToDot(index) {
      clearInterval(interval);
      currentIndex = index + 1;
      updatePosition();
  
      if (currentIndex === reviewItems.length - 1) {
        setTimeout(() => {
          currentIndex = 1;
          updatePosition(false);
        }, 500);
      }
  
      startAutoSlide();
    }
  
    function startAutoSlide() {
      interval = setInterval(goNext, 4000);
    }
  
    window.addEventListener('resize', () => {
      updateItemWidth();
      updatePosition(false);
    });
  
    updateItemWidth();
    updatePosition(false);
    startAutoSlide();
  
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => goToDot(i));
    });
  });

  document.querySelectorAll('.dropdown-submenu a.dropdown-toggle').forEach(function(element) {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var submenu = this.nextElementSibling;
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
  });