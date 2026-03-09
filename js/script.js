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

console.log("=== Пример объекта в JavaScript ===");

const furniture = {
    type: "Диван",
    color: "Серый",
    price: 15000,
    dimensions: {
        width: 200,
        height: 90,
        depth: 100
    },
    showInfo: function () {
        console.log(`Тип: ${this.type}, Цвет: ${this.color}, Цена: ${this.price} руб.`);
    }
};

// 2. Доступ к свойствам
console.log("=== Доступ к свойствам ===");
console.log(furniture.type);           // Точечная нотация
console.log(furniture["color"]);       // Скобочная нотация
console.log(furniture.dimensions.width); // Вложенный объект
furniture.showInfo();                  // Вызов метода

// 3. Удаление свойства
console.log("=== Удаление свойства ===");
delete furniture.price;
console.log(furniture.price); // undefined

// 4. Проверка существования свойства
console.log("=== Проверка существования свойства ===");
console.log("type" in furniture);              // true
console.log(furniture.hasOwnProperty("color")); // true
console.log("price" in furniture);             // false

// 5. Перебор свойств
console.log("=== Перебор свойств объекта ===");
for (let key in furniture) {
    if (typeof furniture[key] !== 'function') {
        console.log(`${key}: ${furniture[key]}`);
    }
}

// 6. Создание объекта через конструктор
console.log("=== Объект через конструктор ===");
function Order(client, furnitureType, cost) {
    this.client = client;
    this.furnitureType = furnitureType;
    this.cost = cost;
    this.getOrderInfo = function () {
        return `Заказ от ${this.client}: ${this.furnitureType} (${this.cost} руб.)`;
    };
}

const order1 = new Order("Иван Петров", "Перетяжка дивана", 8000);
console.log(order1.getOrderInfo());

// 7. Использование Object.keys(), Object.values(), Object.entries()
console.log("=== Object.keys(), values(), entries() ===");
const keys = Object.keys(furniture);
console.log("Ключи:", keys);

const values = Object.values(furniture);
console.log("Значения:", values);

const entries = Object.entries(furniture);
console.log("Пары ключ-значение:", entries);

// 8. Добавление нового свойства
console.log("=== Добавление нового свойства ===");
furniture.material = "Ткань";
furniture.isNew = true;
console.log(furniture);

// 9. Копирование объекта
console.log("=== Копирование объекта ===");
const furnitureCopy = Object.assign({}, furniture);
console.log("Копия:", furnitureCopy);

// 10. Пример встроенного объекта Math
console.log("=== Встроенный объект Math ===");
console.log("Math.PI:", Math.PI);
console.log("Округление 4.7:", Math.round(4.7));
console.log("Случайное число:", Math.random());

// 11. Пример работы с объектом Date
console.log("=== Объект Date ===");
const now = new Date();
console.log("Текущая дата:", now.toLocaleDateString());
console.log("Часы:", now.getHours());
console.log("День недели:", now.getDay());

class FurnitureGame {
  constructor() {
    this.score = 0;
    this.timeLeft = 60;
    this.gameActive = false;
    this.timer = null;
    this.currentFurniture = null;
    this.furnitureTypes = ['Диван', 'Кресло', 'Стул', 'Пуфик'];
    this.fabrics = [
      { name: 'Велюр', color: '#8B4513', suitableFor: ['Диван', 'Кресло'] },
      { name: 'Кожа', color: '#A0522D', suitableFor: ['Диван', 'Кресло'] },
      { name: 'Хлопок', color: '#F5F5DC', suitableFor: ['Стул', 'Пуфик'] },
      { name: 'Микрофибра', color: '#4682B4', suitableFor: ['Диван', 'Кресло', 'Стул'] },
      { name: 'Шенилл', color: '#2E8B57', suitableFor: ['Диван', 'Пуфик'] },
      { name: 'Жаккард', color: '#D2691E', suitableFor: ['Диван', 'Кресло'] }
    ];
  }

  startGame() {
    this.score = 0;
    this.timeLeft = 60;
    this.gameActive = true;
    
    document.getElementById('score').textContent = this.score;
    document.getElementById('timer').textContent = this.timeLeft;
    document.getElementById('start-game').disabled = true;
    document.getElementById('reset-game').disabled = false;
    
    this.updateGameDisplay();
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.timeLeft--;
      document.getElementById('timer').textContent = this.timeLeft;
      
      if (this.timeLeft <= 0) {
        this.endGame();
      }
    }, 1000);
  }

  updateGameDisplay() {
    const container = document.getElementById('game-container');
    container.innerHTML = '';
    
    // Генерируем случайную мебель
    const randomType = this.furnitureTypes[Math.floor(Math.random() * this.furnitureTypes.length)];
    this.currentFurniture = randomType;
    
    // Отображаем мебель
    const furnitureDiv = document.createElement('div');
    furnitureDiv.className = 'mb-4 p-3 border rounded bg-white';
    furnitureDiv.innerHTML = `
      <h4 class="fw-bold">${randomType}</h4>
      <div class="furniture-visual mb-3" style="
        width: 200px; 
        height: 100px; 
        background: linear-gradient(45deg, #8B7355, #A0522D);
        margin: 0 auto;
        border-radius: 10px;
        position: relative;
      ">
        <div style="
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          bottom: 10px;
          background: #D2B48C;
          border-radius: 5px;
        "></div>
      </div>
      <p>Выберите подходящую ткань для перетяжки:</p>
    `;
    container.appendChild(furnitureDiv);
    
    // Отображаем варианты тканей
    const fabricsContainer = document.createElement('div');
    fabricsContainer.className = 'row g-3 justify-content-center';
    
    // Выбираем 4 случайные ткани
    const shuffledFabrics = [...this.fabrics].sort(() => Math.random() - 0.5).slice(0, 4);
    
    shuffledFabrics.forEach(fabric => {
      const fabricCol = document.createElement('div');
      fabricCol.className = 'col-6 col-md-3';
      
      const fabricCard = document.createElement('div');
      fabricCard.className = 'card h-100 fabric-card';
      fabricCard.style.cursor = 'pointer';
      fabricCard.style.transition = 'transform 0.2s';
      
      fabricCard.innerHTML = `
        <div class="card-body text-center">
          <div class="fabric-sample mb-2" style="
            width: 80px; 
            height: 80px; 
            background-color: ${fabric.color};
            margin: 0 auto;
            border-radius: 5px;
            border: 2px solid #ddd;
          "></div>
          <h6 class="card-title">${fabric.name}</h6>
        </div>
      `;
      
      fabricCard.addEventListener('click', () => this.selectFabric(fabric));
      fabricCard.addEventListener('mouseenter', () => {
        fabricCard.style.transform = 'scale(1.05)';
      });
      fabricCard.addEventListener('mouseleave', () => {
        fabricCard.style.transform = 'scale(1)';
      });
      
      fabricCol.appendChild(fabricCard);
      fabricsContainer.appendChild(fabricCol);
    });
    
    container.appendChild(fabricsContainer);
  }

  selectFabric(selectedFabric) {
    if (!this.gameActive) return;
    
    const isCorrect = selectedFabric.suitableFor.includes(this.currentFurniture);
    const fabricCards = document.querySelectorAll('.fabric-card');
    
    // Подсвечиваем выбранную ткань
    fabricCards.forEach(card => {
      card.style.transition = 'all 0.3s';
    });
    
    // Находим выбранную карточку
    const selectedCard = Array.from(fabricCards).find(card => 
      card.querySelector('.card-title').textContent === selectedFabric.name
    );
    
    if (selectedCard) {
      if (isCorrect) {
        selectedCard.style.backgroundColor = '#d4edda';
        selectedCard.style.borderColor = '#c3e6cb';
        this.score += 10;
      } else {
        selectedCard.style.backgroundColor = '#f8d7da';
        selectedCard.style.borderColor = '#f5c6cb';
        this.score = Math.max(0, this.score - 5);
      }
    }
    
    // Обновляем счет
    document.getElementById('score').textContent = this.score;
    
    // Показываем результат
    setTimeout(() => {
      if (this.gameActive) {
        this.updateGameDisplay();
      }
    }, 1000);
  }

  endGame() {
    this.gameActive = false;
    clearInterval(this.timer);
    
    const container = document.getElementById('game-container');
    container.innerHTML = `
      <div class="game-result p-4">
        <h3 class="fw-bold ${this.score >= 50 ? 'text-success' : 'text-warning'}">Игра окончена!</h3>
        <p>Ваш итоговый счет: <strong>${this.score}</strong></p>
        <p>${this.getResultMessage()}</p>
        <div class="mt-3">
          <div class="progress" style="height: 25px;">
            <div class="progress-bar ${this.score >= 50 ? 'bg-success' : 'bg-warning'}" 
                 role="progressbar" 
                 style="width: ${Math.min(this.score, 100)}%">
              ${this.score}%
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.getElementById('start-game').disabled = false;
  }

  getResultMessage() {
    if (this.score >= 80) {
      return 'Отличный результат! Вы настоящий мастер по перетяжке мебели!';
    } else if (this.score >= 50) {
      return 'Хороший результат! Вы хорошо разбираетесь в тканях!';
    } else if (this.score >= 30) {
      return 'Неплохо, но есть куда расти! Продолжайте практиковаться!';
    } else {
      return 'Попробуйте еще раз! Вы обязательно научитесь!';
    }
  }

  resetGame() {
    clearInterval(this.timer);
    this.gameActive = false;
    document.getElementById('start-game').disabled = false;
    document.getElementById('reset-game').disabled = true;
    
    const container = document.getElementById('game-container');
    container.innerHTML = '<p class="text-muted">Нажмите "Начать игру" для старта</p>';
    document.getElementById('score').textContent = '0';
    document.getElementById('timer').textContent = '60';
  }
}

// Инициализация игры при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  const game = new FurnitureGame();
  
  document.getElementById('start-game').addEventListener('click', () => {
    game.startGame();
  });
  
  document.getElementById('reset-game').addEventListener('click', () => {
    game.resetGame();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Подсветка кнопки расчёта стоимости при наведении
  const calcBtn = document.querySelector('.btn-gold');
  if (calcBtn) {
      calcBtn.addEventListener('mouseenter', () => {
          calcBtn.style.boxShadow = '0 0 15px rgba(247, 200, 115, 0.7)';
      });
      
      calcBtn.addEventListener('mouseleave', () => {
          calcBtn.style.boxShadow = 'none';
      });
  }
});

document.addEventListener('keydown', (e) => {
  // Alt + 1 - Перейти к Услугам
  if (e.altKey && e.key === '1') {
      e.preventDefault();
      const services = document.getElementById('uslugi');
      if (services) {
          services.scrollIntoView({ behavior: 'smooth' });
      }
  }
  
  // Alt + 2 - Перейти к Стоимости
  if (e.altKey && e.key === '2') {
      e.preventDefault();
      const price = document.getElementById('rascenki');
      if (price) {
          price.scrollIntoView({ behavior: 'smooth' });
      }
  }
  
  // Alt + 3 - Перейти к Контактам
  if (e.altKey && e.key === '3') {
      e.preventDefault();
      const contacts = document.getElementById('kontakti');
      if (contacts) {
          contacts.scrollIntoView({ behavior: 'smooth' });
      }
  }
  
  // Esc - Вернуться наверх
  if (e.key === 'Escape') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});



document.addEventListener('DOMContentLoaded', () => {
  const benefits = document.querySelectorAll('.benefits-section div[style*="flex: 1 1 25%"]');
  
  benefits.forEach(benefit => {
      benefit.addEventListener('pointerdown', () => {
          benefit.style.transform = 'scale(0.98)';
      });
      
      benefit.addEventListener('pointerup', () => {
          benefit.style.transform = 'scale(1)';
      });
      
      benefit.addEventListener('pointerleave', () => {
          benefit.style.transform = 'scale(1)';
      });
  });
});

let scrollToTopBtn;

window.addEventListener('scroll', () => {
    if (!scrollToTopBtn) {
        scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.innerHTML = '↑';
        scrollToTopBtn.className = 'btn btn-warning position-fixed';
        scrollToTopBtn.style.cssText = 'bottom: 20px; right: 20px; z-index: 1000; display: none; width: 50px; height: 50px; border-radius: 50%;';
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        document.body.appendChild(scrollToTopBtn);
    }
    
    if (window.scrollY > 500) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const reviewCarousel = document.querySelector('.review-carousel');
  if (reviewCarousel) {
      let startX = 0;
      let endX = 0;
      let currentIndex = 1;
      const track = document.querySelector('.carousel-track');
      const reviewItems = document.querySelectorAll('.review-item');
      
      function updateItemWidth() {
          const visibleItems = window.innerWidth < 768 ? 2 : 4;
          return track.offsetWidth / visibleItems;
      }
      
      function goNextSwipe() {
          currentIndex++;
          const itemWidth = updateItemWidth();
          track.style.transition = 'transform 0.3s ease';
          track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
          
          // Сброс к началу если достигли конца
          if (currentIndex === reviewItems.length - 1) {
              setTimeout(() => {
                  currentIndex = 1;
                  track.style.transition = 'none';
                  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
              }, 300);
          }
          
          // Обновление точек
          updateDotsSwipe();
      }
      
      function goPrevSwipe() {
          currentIndex--;
          const itemWidth = updateItemWidth();
          track.style.transition = 'transform 0.3s ease';
          track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
          
          // Сброс к концу если достигли начала
          if (currentIndex === 0) {
              setTimeout(() => {
                  currentIndex = reviewItems.length - 2;
                  track.style.transition = 'none';
                  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
              }, 300);
          }
          
          // Обновление точек
          updateDotsSwipe();
      }
      
      function updateDotsSwipe() {
          const dots = document.querySelectorAll('.carousel-dots .dot');
          let dotIndex = currentIndex - 1;
          if (dotIndex < 0) dotIndex = reviewItems.length - 3;
          if (dotIndex >= dots.length) dotIndex = 0;
          
          dots.forEach((dot, i) => {
              dot.classList.toggle('active', i === dotIndex);
          });
      }
      
      reviewCarousel.addEventListener('touchstart', (e) => {
          startX = e.touches[0].clientX;
          e.preventDefault();
      });
      
      reviewCarousel.addEventListener('touchmove', (e) => {
          endX = e.touches[0].clientX;
          e.preventDefault();
      });
      
      reviewCarousel.addEventListener('touchend', () => {
          const diff = startX - endX;
          const threshold = 50; // Минимальное расстояние свайпа
          
          if (Math.abs(diff) > threshold) {
              if (diff > 0) {
                  // Свайп влево - следующий отзыв
                  goNextSwipe();
              } else {
                  // Свайп вправо - предыдущий отзыв
                  goPrevSwipe();
              }
          }
          
          // Сброс значений
          startX = 0;
          endX = 0;
      });
      
      // Предотвращаем скролл страницы при свайпе по карусели
      reviewCarousel.addEventListener('touchmove', (e) => {
          if (Math.abs(startX - endX) > 10) {
              e.preventDefault();
          }
      }, { passive: false });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const discountSection = document.getElementById('skidka');
  if (discountSection) {
      const timerElement = document.createElement('div');
      timerElement.className = 'text-center mt-3';
      timerElement.innerHTML = `
          <div class="fw-bold text-danger">Акция заканчивается через:</div>
          <div id="discount-timer" class="fs-4 fw-bold">10:00</div>
      `;
      discountSection.querySelector('.col-lg-6').appendChild(timerElement);
      
      let timeLeft = 20;
      
      const timerInterval = setInterval(() => {
          timeLeft--;
          if (timeLeft <= 0) {
              clearInterval(timerInterval);
              timerElement.innerHTML = '<div class="text-danger fw-bold">Акция завершена!</div>';
              return;
          }
          
          const minutes = Math.floor(timeLeft / 60);
          const seconds = timeLeft % 60;
          document.getElementById('discount-timer').textContent = 
              `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      }, 1000);
  }
});

// ЗАДАНИЕ 123
document.addEventListener('DOMContentLoaded', function() {
    
    // --------------------------------------------------------
    // ЗАДАНИЕ 12
    // --------------------------------------------------------
    const form = document.getElementById('simple-form');
    const resultDiv = document.getElementById('simple-result');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // HTML5 валидация
            if (!form.checkValidity()) {
                form.classList.add('was-validated');
                alert('❌ Заполните обязательные поля!');
                return;
            }
            
            // ---------- ПОЛУЧАЕМ ДАННЫЕ ИЗ ФОРМЫ ----------
            // Текстовые поля
            const name = document.getElementById('simple-name').value;
            const phone = document.getElementById('simple-phone').value;
            
            // Список
            const furniture = document.getElementById('simple-furniture').value;
            
            // Переключатели (radio)
            let service = 'не выбрано';
            const radios = document.querySelectorAll('input[name="simple-service"]');
            for (let radio of radios) {
                if (radio.checked) {
                    service = radio.value;
                    break;
                }
            }
            
            // Флажки (checkbox)
            const delivery = document.getElementById('simple-delivery').checked ? 'Доставка' : '';
            const express = document.getElementById('simple-express').checked ? 'Срочно' : '';
            let additional = [];
            if (delivery) additional.push(delivery);
            if (express) additional.push(express);
            
            // ---------- ВЫВОД НА СТРАНИЦУ ----------
            let html = '<h6 class="fw-bold">✅ Данные заявки:</h6>';
            html += `<p><strong>Имя:</strong> ${name}<br>`;
            html += `<strong>Телефон:</strong> ${phone}<br>`;
            html += `<strong>Мебель:</strong> ${furniture}<br>`;
            html += `<strong>Услуга:</strong> ${service}<br>`;
            html += `<strong>Дополнительно:</strong> ${additional.join(', ') || 'нет'}</p>`;
            html += `<small class="text-muted">Отправлено: ${new Date().toLocaleTimeString()}</small>`;
            
            resultDiv.innerHTML = html;
            
            // ---------- ВЫВОД В ДИАЛОГОВОЕ ОКНО ----------
            alert(`✅ ЗАЯВКА ПРИНЯТА!
            
Имя: ${name}
Телефон: ${phone}
Мебель: ${furniture}
Услуга: ${service}
Доп. услуги: ${additional.join(', ') || 'нет'}

Спасибо! Мы свяжемся с вами.`);
        });
        
        // Кнопка очистки
        document.getElementById('simple-reset').addEventListener('click', function() {
            form.reset();
            form.classList.remove('was-validated');
            resultDiv.innerHTML = '<p class="text-muted mb-0">Форма очищена</p>';
        });
    }
    
    // --------------------------------------------------------
    // ЗАДАНИЕ 2.2: JS ВАЛИДАЦИЯ (БЕЗ РЕГУЛЯРОК - ПРОСТО)
    // --------------------------------------------------------
    document.getElementById('simple-validate')?.addEventListener('click', function() {
        let errors = [];
        
        // Проверка имени
        const name = document.getElementById('simple-name').value.trim();
        if (name === '') {
            errors.push('Имя обязательно');
        } else if (name.length < 2) {
            errors.push('Имя слишком короткое');
        }
        
        // Проверка телефона
        const phone = document.getElementById('simple-phone').value.trim();
        if (phone === '') {
            errors.push('Телефон обязателен');
        } else if (!phone.startsWith('+7')) {
            errors.push('Телефон должен начинаться с +7');
        } else if (phone.length < 16) {
            errors.push('Телефон неполный');
        }
        
        // Проверка выбора мебели
        const furniture = document.getElementById('simple-furniture').value;
        if (furniture === '') {
            errors.push('Выберите тип мебели');
        }
        
        // Проверка выбора услуги
        let serviceChecked = false;
        const radios = document.querySelectorAll('input[name="simple-service"]');
        for (let radio of radios) {
            if (radio.checked) serviceChecked = true;
        }
        if (!serviceChecked) {
            errors.push('Выберите услугу');
        }
        
        // Вывод результата
        if (errors.length === 0) {
            alert('✅ JS-валидация пройдена! Все поля заполнены верно.');
        } else {
            alert('❌ Ошибки:\n- ' + errors.join('\n- '));
        }
    });
    
    // --------------------------------------------------------
    // ЗАДАНИЕ 2.3 + 3: РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ
    // --------------------------------------------------------
    
    // 1. Валидация через регулярные выражения
    const phoneInput = document.getElementById('simple-phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            // Простая валидация в реальном времени
            const phoneRegex = /^\+7\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
            if (this.value.length > 5) {
                if (phoneRegex.test(this.value)) {
                    this.classList.add('is-valid');
                    this.classList.remove('is-invalid');
                } else {
                    this.classList.add('is-invalid');
                    this.classList.remove('is-valid');
                }
            }
        });
    }
    
    // 2. Демонстрация методов RegExp и String
    const regexText = document.getElementById('regex-text');
    const regexResult = document.getElementById('regex-simple-result');
    
    if (regexText) {
        // test() - проверка наличия цифр
        document.getElementById('regex-test-btn')?.addEventListener('click', function() {
            const text = regexText.value;
            const hasNumber = /\d+/.test(text);
            regexResult.innerHTML = `🔍 test(): Есть цифры? <strong>${hasNumber ? 'ДА' : 'НЕТ'}</strong> (${hasNumber ? text.match(/\d+/) : ''})`;
        });
        
        // match() - найти все числа
        document.getElementById('regex-match-btn')?.addEventListener('click', function() {
            const text = regexText.value;
            const numbers = text.match(/\d+/g);
            if (numbers) {
                regexResult.innerHTML = `📊 match(): Найдены числа: <strong>${numbers.join(', ')}</strong> (${numbers.length} шт.)`;
            } else {
                regexResult.innerHTML = `📊 match(): Числа не найдены`;
            }
        });
        
        // replace() - замена текста
        document.getElementById('regex-replace-btn')?.addEventListener('click', function() {
            const text = regexText.value;
            // Замена диван -> ДИВАН (с флагом i - без учета регистра)
            const replaced = text.replace(/диван/i, 'ДИВАН');
            regexResult.innerHTML = `✏️ replace(): "${replaced}"`;
        });
    }
    
    // --------------------------------------------------------
    // ДОПОЛНИТЕЛЬНЫЕ ПРИМЕРЫ REGEXP (ДЛЯ ЗАДАНИЯ 3)
    // --------------------------------------------------------
    console.log('=== RegExp Демонстрация ===');
    
    // Разные флаги
    const text = 'Диван, диван, ДИВАН';
    console.log('1. Флаг i (регистр):', text.match(/диван/gi));
    
    // test() - проверка email
    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]{2,}$/i;
    console.log('2. test() email:', emailRegex.test('test@mail.ru'));
    
    // exec() - пошаговый поиск
    const regex = /\d+/g;
    const prices = 'Цены: 6000, 2500, 9780';
    let match;
    console.log('3. exec() в цикле:');
    while ((match = regex.exec(prices)) !== null) {
        console.log(`   Найдено: ${match[0]} на позиции ${match.index}`);
    }
    
    // split() - разделение строки
    const services = 'диван,кресло;стул|пуфик';
    console.log('4. split():', services.split(/[,;|]+/));
    
    // search() - поиск позиции
    console.log('5. search():', 'Перетяжка дивана'.search(/диван/));
});



// ========== ЗАДАНИЕ 1: JSON И КОРЗИНА ИНТЕРНЕТ-МАГАЗИНА ==========

// Класс для управления корзиной
class ShoppingCart {
    constructor() {
        this.items = this.loadCart() || [];
        this.init();
    }
    
    init() {
        this.renderCart();
        this.updateCartCount();
        this.updateCartTotal();
    }
    
    // Загрузка корзины из localStorage
    loadCart() {
        const cart = localStorage.getItem('furniture_cart');
        return cart ? JSON.parse(cart) : [];
    }
    
    // Сохранение корзины в localStorage
    saveCart() {
        localStorage.setItem('furniture_cart', JSON.stringify(this.items));
    }
    
    // Добавление товара
    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            if (existingItem.quantity < product.stock) {
                existingItem.quantity += 1;
            } else {
                alert('Достигнуто максимальное количество товара на складе');
                return;
            }
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                unit: product.unit,
                quantity: 1,
                maxStock: product.stock
            });
        }
        
        this.saveCart();
        this.init();
        this.showNotification(`Товар "${product.name}" добавлен в корзину`);
    }
    
    // Удаление товара
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.init();
    }
    
    // Изменение количества
    updateQuantity(productId, newQuantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (newQuantity <= 0) {
                this.removeItem(productId);
                return;
            }
            if (newQuantity <= item.maxStock) {
                item.quantity = newQuantity;
            } else {
                alert('Недостаточно товара на складе');
                item.quantity = item.maxStock;
            }
        }
        this.saveCart();
        this.init();
    }
    
    // Очистка корзины
    clearCart() {
        this.items = [];
        this.saveCart();
        this.init();
    }
    
    // Подсчет общего количества
    getTotalCount() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }
    
    // Подсчет общей суммы
    getTotalSum() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }
    
    // Обновление счетчика корзины
    updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            cartCount.textContent = this.getTotalCount();
        }
    }
    
    // Обновление общей суммы
    updateCartTotal() {
        const cartTotal = document.getElementById('cart-total');
        if (cartTotal) {
            cartTotal.textContent = this.getTotalSum();
        }
    }
    
    // Отображение корзины
    renderCart() {
        const cartContainer = document.getElementById('cart-items');
        if (!cartContainer) return;
        
        if (this.items.length === 0) {
            cartContainer.innerHTML = '<p class="text-muted text-center mb-0">Корзина пуста</p>';
            return;
        }
        
        let html = '';
        this.items.forEach(item => {
            html += `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">${item.price} руб. / ${item.unit}</div>
                    </div>
                    <div class="cart-item-controls">
                        <input type="number" 
                               class="form-control form-control-sm cart-item-quantity" 
                               value="${item.quantity}" 
                               min="1" 
                               max="${item.maxStock}"
                               data-id="${item.id}">
                        <span class="cart-item-remove" data-id="${item.id}">
                            <i class="bi bi-trash"></i>
                        </span>
                    </div>
                </div>
            `;
        });
        
        cartContainer.innerHTML = html;
        
        // Добавляем обработчики
        cartContainer.querySelectorAll('.cart-item-quantity').forEach(input => {
            input.addEventListener('change', (e) => {
                const id = parseInt(e.target.dataset.id);
                const quantity = parseInt(e.target.value);
                this.updateQuantity(id, quantity);
            });
        });
        
        cartContainer.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.closest('.cart-item-remove').dataset.id);
                this.removeItem(id);
            });
        });
    }
    
    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'position-fixed top-0 end-0 m-3 p-3 bg-success text-white rounded shadow';
        notification.style.zIndex = '9999';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Загрузка каталога из JSON
async function loadCatalog() {
    try {
        const catalogUrl = new URL('data/catalog.json', document.baseURI).toString();
        const response = await fetch(catalogUrl, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if (!data || !Array.isArray(data.products)) {
            throw new Error('Некорректный формат catalog.json (ожидается { "products": [] })');
        }
        renderCatalog(data.products);
    } catch (error) {
        console.error('Ошибка загрузки каталога:', error);
        showCatalogError(error);
    }
}

// Отображение каталога
function renderCatalog(products) {
    const container = document.getElementById('catalog-container');
    if (!container) return;
    
    let html = '';
    products.forEach(product => {
        html += `
            <div class="col-md-6 col-lg-3 col-6 mb-4">
                <div class="product-card">
                    <div class="product-img-container">
                        <img src="${product.image}" 
                             class="product-img" 
                             alt="${product.name}"
                             onerror="this.src='image/sofa.png'">
                    </div>
                    <div class="product-body">
                        <span class="product-category">${product.category}</span>
                        <h5 class="product-title">${product.name}</h5>
                        <p class="product-description small text-muted">${product.description}</p>
                        <div class="d-flex justify-content-between align-items-center mt-2">
                            <div>
                                <span class="product-price">${product.price}</span>
                                <span class="product-unit">руб./${product.unit}</span>
                            </div>
                            <span class="product-stock">${product.stock} шт.</span>
                        </div>
                    </div>
                    <div class="p-3 pt-0">
                        <button class="add-to-cart-btn w-100" 
                                data-product='${JSON.stringify(product)}'
                                ${product.stock === 0 ? 'disabled' : ''}>
                            ${product.stock === 0 ? 'Нет в наличии' : 'В корзину'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Инициализируем корзину
    window.cart = new ShoppingCart();
    
    // Добавляем обработчики на кнопки
    container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const product = JSON.parse(e.target.dataset.product);
            window.cart.addItem(product);
        });
    });
}

function showCatalogError(error) {
    const container = document.getElementById('catalog-container');
    if (container) {
        const isFileProtocol = window.location.protocol === 'file:';
        const hint = isFileProtocol
            ? 'Вы открыли страницу как файл (file://). В этом режиме браузер часто блокирует загрузку JSON через fetch. Запустите страницу через локальный сервер (например, расширение Live Server в VS Code/Cursor) и обновите.'
            : 'Проверьте, что файл `data/catalog.json` существует и доступен, затем обновите страницу.';

        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-exclamation-triangle fs-1 text-warning"></i>
                <h4 class="mt-3">Ошибка загрузки каталога</h4>
                <p class="text-muted mb-2">${hint}</p>
                <p class="small text-muted mb-0">Детали: ${String(error?.message || error || 'unknown')}</p>
            </div>
        `;
    }
}

// ========== ЗАДАНИЕ 2: РАБОТА С COOKIE ==========

// Функции для работы с Cookie
const CookieManager = {
    setCookie(name, value, days) {
        try {
            const serializedValue = JSON.stringify(value);
            const encodedValue = encodeURIComponent(serializedValue);
            
            let expires = '';
            if (days) {
                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = '; expires=' + date.toUTCString();
            }
            
            // Для file:// используем path=/ и SameSite
            let cookieString = name + '=' + encodedValue + expires + '; path=/';
            
            // Добавляем SameSite=None для кросс-доменной работы
            if (window.location.protocol === 'file:') {
                cookieString += '; SameSite=None';
            }
            
            document.cookie = cookieString;
            
            // Проверяем, сохранилась ли кука
            return this.getCookie(name) !== null;
        } catch (e) {
            console.error('Ошибка сохранения cookie:', e);
            return false;
        }
    },
    
    getCookie(name) {
        try {
            const nameEQ = name + '=';
            const cookies = document.cookie.split(';');
            
            for (let cookie of cookies) {
                cookie = cookie.trim();
                if (cookie.indexOf(nameEQ) === 0) {
                    const value = cookie.substring(nameEQ.length);
                    const decodedValue = decodeURIComponent(value);
                    return JSON.parse(decodedValue);
                }
            }
        } catch (e) {
            console.error('Ошибка чтения cookie:', e);
        }
        return null;
    },
    
    // Удалить cookie
    deleteCookie(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=None`;
    },
    
    // Очистить все cookie (кроме необходимых)
    clearAllCookies() {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const eqPos = cookie.indexOf('=');
            const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
            if (name) { // Проверяем, что имя не пустое
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=None`;
            }
        }
    }
};

// ========== ЗАДАНИЕ 3: РАБОТА С LOCAL STORAGE ==========

const StorageManager = {
    // Сохранить в Local Storage
    setItem(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Ошибка сохранения в Local Storage:', e);
            return false;
        }
    },
    
    // Получить из Local Storage
    getItem(key) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (e) {
            console.error('Ошибка чтения из Local Storage:', e);
            return null;
        }
    },
    
    // Удалить из Local Storage
    removeItem(key) {
        localStorage.removeItem(key);
    },
    
    // Очистить Local Storage
    clear() {
        localStorage.clear();
    }
};

// Инициализация форм для Cookie и Local Storage
function initUserDataForms() {
    // ===== COOKIE =====
    // Сохранение в Cookie
    document.getElementById('save-cookie')?.addEventListener('click', () => {
        const userData = {
            fio: document.getElementById('cookie-fio').value,
            email: document.getElementById('cookie-email').value,
            birthdate: document.getElementById('cookie-birthdate').value,
            birthplace: document.getElementById('cookie-birthplace').value,
            hobbies: document.getElementById('cookie-hobbies').value,
            savedAt: new Date().toLocaleString()
        };
        
        if (!userData.fio || !userData.email) {
            alert('Пожалуйста, заполните обязательные поля (ФИО и Email)');
            return;
        }
        
        CookieManager.setCookie('user_data', userData, 30);
        
        const resultDiv = document.getElementById('cookie-result');
        resultDiv.innerHTML = `
            <div class="alert alert-success mb-0">
                <strong>✅ Данные сохранены в Cookie!</strong><br>
                ФИО: ${userData.fio}<br>
                Email: ${userData.email}<br>
                Дата рождения: ${userData.birthdate || 'не указана'}<br>
                Место рождения: ${userData.birthplace || 'не указано'}<br>
                Увлечения: ${userData.hobbies || 'не указаны'}<br>
                <small class="text-muted">Сохранено: ${userData.savedAt}</small>
            </div>
        `;
    });
    
    // Загрузка из Cookie
    document.getElementById('load-cookie')?.addEventListener('click', () => {
        const userData = CookieManager.getCookie('user_data');
        const resultDiv = document.getElementById('cookie-result');
        
        if (userData) {
            document.getElementById('cookie-fio').value = userData.fio || '';
            document.getElementById('cookie-email').value = userData.email || '';
            document.getElementById('cookie-birthdate').value = userData.birthdate || '';
            document.getElementById('cookie-birthplace').value = userData.birthplace || '';
            document.getElementById('cookie-hobbies').value = userData.hobbies || '';
            
            resultDiv.innerHTML = `
                <div class="alert alert-info mb-0">
                    <strong>📂 Данные загружены из Cookie!</strong><br>
                    ФИО: ${userData.fio}<br>
                    Email: ${userData.email}<br>
                    Дата рождения: ${userData.birthdate || 'не указана'}<br>
                    Место рождения: ${userData.birthplace || 'не указано'}<br>
                    Увлечения: ${userData.hobbies || 'не указаны'}<br>
                    <small class="text-muted">Сохранено: ${userData.savedAt}</small>
                </div>
            `;
        } else {
            resultDiv.innerHTML = '<div class="alert alert-warning mb-0">❌ Данные в Cookie не найдены</div>';
        }
    });
    
    // Очистка Cookie
    document.getElementById('clear-cookie')?.addEventListener('click', () => {
        CookieManager.deleteCookie('user_data');
        
        document.getElementById('cookie-fio').value = '';
        document.getElementById('cookie-email').value = '';
        document.getElementById('cookie-birthdate').value = '';
        document.getElementById('cookie-birthplace').value = '';
        document.getElementById('cookie-hobbies').value = '';
        
        const resultDiv = document.getElementById('cookie-result');
        resultDiv.innerHTML = '<div class="alert alert-secondary mb-0">🧹 Cookie очищены</div>';
    });
    
    // ===== LOCAL STORAGE =====
    document.getElementById('save-local')?.addEventListener('click', () => {
        const userData = {
            fio: document.getElementById('local-fio').value,
            email: document.getElementById('local-email').value,
            birthdate: document.getElementById('local-birthdate').value,
            birthplace: document.getElementById('local-birthplace').value,
            hobbies: document.getElementById('local-hobbies').value,
            savedAt: new Date().toLocaleString()
        };
        
        if (!userData.fio || !userData.email) {
            alert('Пожалуйста, заполните обязательные поля (ФИО и Email)');
            return;
        }
        
        StorageManager.setItem('user_data', userData);
        
        const resultDiv = document.getElementById('local-result');
        resultDiv.innerHTML = `
            <div class="alert alert-success mb-0">
                <strong>✅ Данные сохранены в Local Storage!</strong><br>
                ФИО: ${userData.fio}<br>
                Email: ${userData.email}<br>
                Дата рождения: ${userData.birthdate || 'не указана'}<br>
                Место рождения: ${userData.birthplace || 'не указано'}<br>
                Увлечения: ${userData.hobbies || 'не указаны'}<br>
                <small class="text-muted">Сохранено: ${userData.savedAt}</small>
            </div>
        `;
    });
    
    // Загрузка из Local Storage
    document.getElementById('load-local')?.addEventListener('click', () => {
        const userData = StorageManager.getItem('user_data');
        const resultDiv = document.getElementById('local-result');
        
        if (userData) {
            document.getElementById('local-fio').value = userData.fio || '';
            document.getElementById('local-email').value = userData.email || '';
            document.getElementById('local-birthdate').value = userData.birthdate || '';
            document.getElementById('local-birthplace').value = userData.birthplace || '';
            document.getElementById('local-hobbies').value = userData.hobbies || '';
            
            resultDiv.innerHTML = `
                <div class="alert alert-info mb-0">
                    <strong>📂 Данные загружены из Local Storage!</strong><br>
                    ФИО: ${userData.fio}<br>
                    Email: ${userData.email}<br>
                    Дата рождения: ${userData.birthdate || 'не указана'}<br>
                    Место рождения: ${userData.birthplace || 'не указано'}<br>
                    Увлечения: ${userData.hobbies || 'не указаны'}<br>
                    <small class="text-muted">Сохранено: ${userData.savedAt}</small>
                </div>
            `;
        } else {
            resultDiv.innerHTML = '<div class="alert alert-warning mb-0">❌ Данные в Local Storage не найдены</div>';
        }
    });
    
    // Очистка Local Storage
    document.getElementById('clear-local')?.addEventListener('click', () => {
        StorageManager.removeItem('user_data');
        
        document.getElementById('local-fio').value = '';
        document.getElementById('local-email').value = '';
        document.getElementById('local-birthdate').value = '';
        document.getElementById('local-birthplace').value = '';
        document.getElementById('local-hobbies').value = '';
        
        const resultDiv = document.getElementById('local-result');
        resultDiv.innerHTML = '<div class="alert alert-secondary mb-0">🧹 Local Storage очищен</div>';
    });
}

// Обработчик для кнопки оформления заказа
function initCheckoutHandler() {
    document.getElementById('checkout-btn')?.addEventListener('click', () => {
        if (window.cart && window.cart.items.length > 0) {
            alert(`✅ Заказ оформлен!\n\nСумма заказа: ${window.cart.getTotalSum()} руб.\n\nСпасибо за покупку!`);
            window.cart.clearCart();
        } else {
            alert('Корзина пуста!');
        }
    });
    
    document.getElementById('clear-cart')?.addEventListener('click', () => {
        if (window.cart) {
            window.cart.clearCart();
        }
    });
}

// Инициализация всех новых функций
document.addEventListener('DOMContentLoaded', () => {
    // Загружаем каталог
    loadCatalog();
    
    // Инициализируем формы с пользовательскими данными
    initUserDataForms();
    
    // Инициализируем обработчик оформления заказа
    initCheckoutHandler();
    
    // Проверяем наличие секций в DOM
    if (!document.getElementById('catalog-section')) {
        console.warn('Секция каталога не найдена в DOM');
    }
    
    if (!document.getElementById('user-data-section')) {
        console.warn('Секция пользовательских данных не найдена в DOM');
    }
});

  function runObjectDemo() {
    // Очищаем консоль для удобства
    console.clear();
    
    // ВАШ КОД ИЗ ФАЙЛА (копируем сюда)
    console.log("=== Пример объекта в JavaScript ===");
    
    const furniture = {
      type: "Диван",
      color: "Серый",
      price: 15000,
      dimensions: {
        width: 200,
        height: 90,
        depth: 100
      },
      showInfo: function() {
        console.log(`Тип: ${this.type}, Цвет: ${this.color}, Цена: ${this.price} руб.`);
      }
    };
    // 2. Доступ к свойствам
console.log("=== Доступ к свойствам ===");
console.log(furniture.type);           // Точечная нотация
console.log(furniture["color"]);       // Скобочная нотация
console.log(furniture.dimensions.width); // Вложенный объект
furniture.showInfo();                  // Вызов метода

// 3. Удаление свойства
console.log("=== Удаление свойства ===");
delete furniture.price;
console.log(furniture.price); // undefined

// 4. Проверка существования свойства
console.log("=== Проверка существования свойства ===");
console.log("type" in furniture);              // true
console.log(furniture.hasOwnProperty("color")); // true
console.log("price" in furniture);             // false

// 5. Перебор свойств
console.log("=== Перебор свойств объекта ===");
for (let key in furniture) {
  if (typeof furniture[key] !== 'function') {
    console.log(`${key}: ${furniture[key]}`);
  }
}

// 6. Создание объекта через конструктор
console.log("=== Объект через конструктор ===");
function Order(client, furnitureType, cost) {
  this.client = client;
  this.furnitureType = furnitureType;
  this.cost = cost;
  this.getOrderInfo = function() {
    return `Заказ от ${this.client}: ${this.furnitureType} (${this.cost} руб.)`;
  };
}

const order1 = new Order("Иван Петров", "Перетяжка дивана", 8000);
console.log(order1.getOrderInfo());

// 7. Использование Object.keys(), Object.values(), Object.entries()
console.log("=== Object.keys(), values(), entries() ===");
const keys = Object.keys(furniture);
console.log("Ключи:", keys);

const values = Object.values(furniture);
console.log("Значения:", values);

const entries = Object.entries(furniture);
console.log("Пары ключ-значение:", entries);

// 8. Добавление нового свойства
console.log("=== Добавление нового свойства ===");
furniture.material = "Ткань";
furniture.isNew = true;
console.log(furniture);

// 9. Копирование объекта
console.log("=== Копирование объекта ===");
const furnitureCopy = Object.assign({}, furniture);
console.log("Копия:", furnitureCopy);

// 10. Пример встроенного объекта Math
console.log("=== Встроенный объект Math ===");
console.log("Math.PI:", Math.PI);
console.log("Округление 4.7:", Math.round(4.7));
console.log("Случайное число:", Math.random());

// 11. Пример работы с объектом Date
console.log("=== Объект Date ===");
const now = new Date();
console.log("Текущая дата:", now.toLocaleDateString());
console.log("Часы:", now.getHours());
console.log("День недели:", now.getDay());
    console.log("✅ Демонстрация завершена!");
  }

    
