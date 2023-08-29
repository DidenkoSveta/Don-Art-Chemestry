 //burger menu
 let menuOpenButton = document.querySelector('.burger');
 let menu = document.querySelector('.navigation__header');
 let menuCloseButton = document.querySelector('.close');

 menuOpenButton.addEventListener('click', () => {
   menu.classList.add('show');
 });

 document.addEventListener('click', (e) => {
   if (e.target.classList.contains('close')
       || !e.target.classList.contains('navigation__header')
       && !e.target.classList.contains('burger')) {
     menu.classList.remove('show');
   }
 });


 
//scroll up
function scrollTo(to, duration = 700) {
   const
      element = document.scrollingElement || document.documentElement,
      start = element.scrollTop,
      change = to - start,
      startDate = +new Date(),
      // t = current time
      // b = start value
      // c = change in value
      // d = duration
      easeInOutQuad = function (t, b, c, d) {
         t /= d / 2;
         if (t < 1) return c / 2 * t * t + b;
         t--;
         return -c / 2 * (t * (t - 2) - 1) + b;
      },
      animateScroll = function () {
         const currentDate = +new Date();
         const currentTime = currentDate - startDate;
         element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
         if (currentTime < duration) {
            requestAnimationFrame(animateScroll);
         }
         else {
            element.scrollTop = to;
         }
      };
   animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
   let btn = document.querySelector('#toTop');
   window.addEventListener('scroll', function () {
      // Если прокрутили дальше 599px, показываем кнопку
      if (pageYOffset > 100) {
         btn.classList.add('show');
         // Иначе прячем
      } else {
         btn.classList.remove('show');
      }
   });

   // При клике прокручиываем на самый верх
   btn.onclick = function (click) {
      click.preventDefault();
      scrollTo(0, 400);
   }
});


//slider our partners

document.addEventListener('DOMContentLoaded', function () {
   const partnersGrid = document.querySelector('.home__partners-grid');
   const backButton = document.querySelector('#back-btn');
   const nextButton = document.querySelector('#next-btn');
   const cardWidth = 416; // Assuming each card 
   const carouselWidth = 2080; // Total width of the carousel
   let currentPosition = 0;
   let autoScrollInterval;
 
   function moveLeft() {
     currentPosition -= cardWidth;
     if (currentPosition < -carouselWidth) {
       currentPosition = 0;
       updateCarouselPosition(false); // Update without animation
     } else {
       updateCarouselPosition(true); // Update with animation
     }
   }
 
   function moveRight() {
     currentPosition += cardWidth;
     if (currentPosition > 0) {
       currentPosition = -carouselWidth + cardWidth;
       updateCarouselPosition(false); // Update without animation
     } else {
       updateCarouselPosition(true); // Update with animation
     }
   }
 
   function updateCarouselPosition(withAnimation) {
     if (withAnimation) {
       partnersGrid.style.transition = 'transform 0.3s ease-in-out';
     } else {
       partnersGrid.style.transition = 'none';
     }
     partnersGrid.style.transform = `translateX(${currentPosition}px)`;
   }
 
   function startAutoScroll() {
     autoScrollInterval = setInterval(moveRight, 2000); // Auto-scroll every 2 seconds
   }
 
   function stopAutoScroll() {
     clearInterval(autoScrollInterval);
   }
 
   backButton.addEventListener('click', function () {
     moveLeft();
     stopAutoScroll();
   });
 
   nextButton.addEventListener('click', function () {
     moveRight();
     stopAutoScroll();
   });
 
   // Start auto-scrolling when the page loads
   startAutoScroll();
 
   // Pause auto-scrolling when the mouse is over the carousel
   partnersGrid.addEventListener('mouseover', stopAutoScroll);
 
   // Resume auto-scrolling when the mouse leaves the carousel
   partnersGrid.addEventListener('mouseout', startAutoScroll);
 });
 

 /// Sorting categories

 document.addEventListener("DOMContentLoaded", function () {
   const sortingButtons = document.querySelectorAll(".sorting-button");
   const triageButtons = document.querySelectorAll(".home__triage-card");
   const productCards = document.querySelectorAll(".product__block-card");

   function filterProducts(category) {
      productCards.forEach((card) => {
         const cardCategory = card.getAttribute("data-category");
         if (category === "all" || cardCategory.includes(category)) {
            card.style.display = "flex";
         } else {
            card.style.display = "none";
         }
      });
   }

   // Автоматически кликаем на кнопку соответствующей категории
   const urlParams = new URLSearchParams(window.location.search);
   const initialCategory = urlParams.get("category");
   if (initialCategory) {
      filterProducts(initialCategory);

      triageButtons.forEach((button) => {
         if (button.getAttribute("data-category") === initialCategory) {
            button.classList.add("active");
         } else {
            button.classList.remove("active");
         }
      });
   }

   // Добавляем обработчики событий для кнопок сортировки
   sortingButtons.forEach((button) => {
      button.addEventListener("click", () => {
         const category = button.getAttribute("data-category");
         filterProducts(category);

         sortingButtons.forEach((btn) => {
            if (btn === button) {
               btn.classList.add("active");
            } else {
               btn.classList.remove("active");
            }
         });

         triageButtons.forEach((triageButton) => {
            if (triageButton.getAttribute("data-category") === category) {
               triageButton.classList.add("active");
            } else {
               triageButton.classList.remove("active");
            }
         });
      });
   });

   // Добавляем обработчики событий для кнопок фильтрации
   triageButtons.forEach((button) => {
      button.addEventListener("click", () => {
         const category = button.getAttribute("data-category");
         filterProducts(category);

         triageButtons.forEach((btn) => {
            if (btn === button) {
               btn.classList.add("active");
            } else {
               btn.classList.remove("active");
            }
         });

         sortingButtons.forEach((sortingButton) => {
            if (sortingButton.getAttribute("data-category") === category) {
               sortingButton.classList.add("active");
            } else {
               sortingButton.classList.remove("active");
            }
         });
      });
   });
});


 