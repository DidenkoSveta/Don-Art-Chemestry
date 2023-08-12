//animate components
function onEntry(entry) {
   entry.forEach(change => {
     if (change.isIntersecting) {
       change.target.classList.add('element-show');
     }
   });
 }
 
 let options = {
   threshold: [0.5]
 };
 let observer = new IntersectionObserver(onEntry, options);
 let elements = document.querySelectorAll('h2, h3, h5, .home__services-card, .home__about-text, .about-img, .home__quiz, .context__about-img, .home__privilege-card, .context__about-list, .context__steps-card, .context__additional-card, .seo__additional-card, .faq__block-card, .my__cases-link, .my__cases-grid a');
 
 for (let elm of elements) {
   observer.observe(elm);
 };

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

//faq
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}