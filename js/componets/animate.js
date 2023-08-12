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
}