const model1Section = document.querySelector('.model-1-section');
const model2Section = document.querySelector('.model-2-section');
const model3Section = document.querySelector('.model-3-section');
const model4Section = document.querySelector('.model-4-section');
const house1Section = document.querySelector('.house-1-section');
const house2Section = document.querySelector('.house-2-section');
const lastSection = document.querySelector('.last-section');

const model1Content = document.querySelector('.model-1-content');
const model2Content = document.querySelector('.model-2-content');
const model3Content = document.querySelector('.model-3-content');
const model4Content = document.querySelector('.model-4-content');
const house1Content = document.querySelector('.house-1-content');
const house2Content = document.querySelector('.house-2-content');
const connectorContent = document.querySelector('.connector-content');
const footer = document.querySelector('.footer');

const menuBtn = document.querySelector('.menu-btn');
const menuClose = document.querySelector('.menu__icon-close-box');

const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

// Snap scrolling effect

const showfirstModel = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    model1Content.classList.add('show');
  } else {
    model1Content.classList.remove('show');
  }
};

const firstModelObserver = new IntersectionObserver(showfirstModel, {
  root: null,
  threshold: 0.6,
});

firstModelObserver.observe(model1Section);

const showsecModel = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    model2Content.classList.add('show');
  } else {
    model2Content.classList.remove('show');
  }
};

const secModelObserver = new IntersectionObserver(showsecModel, {
  root: null,
  threshold: 0.6,
});

secModelObserver.observe(model2Section);

const showThirdModel = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    model3Content.classList.add('show');
  } else {
    model3Content.classList.remove('show');
  }
};

const thirdModelObserver = new IntersectionObserver(showThirdModel, {
  root: null,
  threshold: 0.6,
});

thirdModelObserver.observe(model3Section);

const showforthModel = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    model4Content.classList.add('show');
  } else {
    model4Content.classList.remove('show');
  }
};

const forthModelObserver = new IntersectionObserver(showforthModel, {
  root: null,
  threshold: 0.6,
});

forthModelObserver.observe(model4Section);

const showfirstHouse = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    house1Content.classList.add('show');
  } else {
    house1Content.classList.remove('show');
  }
};

const firstHouseObserver = new IntersectionObserver(showfirstHouse, {
  root: null,
  threshold: 0.6,
});

firstHouseObserver.observe(house1Section);

const showSecHouse = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    house2Content.classList.add('show');
  } else {
    house2Content.classList.remove('show');
  }
};

const secHouseObserver = new IntersectionObserver(showSecHouse, {
  root: null,
  threshold: 0.6,
});

secHouseObserver.observe(house2Section);

const showFooter = (entries) => {
  const [entry] = entries;
  console.log(entry);

  if (entry.isIntersecting) {
    footer.classList.add('show');
    connectorContent.classList.add('show');
  } else {
    footer.classList.remove('show');
    connectorContent.classList.remove('show');
  }
};

const lastSectionObserver = new IntersectionObserver(showFooter, {
  root: null,
  threshold: [0.6],
});

lastSectionObserver.observe(lastSection);

//

// Show side menu

menuBtn.addEventListener('click', () => {
  menu.classList.add('show');
  overlay.classList.add('show');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('show');
  overlay.classList.remove('show');
});

// Sliding effect on navigation bar

const slideAnimation = document.querySelector('.sliding-animation');
const itemAnimation = document.querySelector('.item-animation ');
const padding = document.querySelector('.header__nav-link-margin');
const paddingRight = window
  .getComputedStyle(padding)
  .getPropertyValue('padding-right');
console.log(paddingRight);

document.querySelector('.item-1-hover').addEventListener('mouseout', (e) => {
  if (
    e.relatedTarget.classList.contains('model-1-section') ||
    e.relatedTarget.classList.contains('hero__title') ||
    e.relatedTarget.classList.contains('header')
  ) {
    slideAnimation.style.removeProperty('left');
    slideAnimation.style.removeProperty('width');
  }
});
document.querySelector('.link-1').addEventListener('mouseover', (e) => {
  slideAnimation.style.width = '8.4rem';
  slideAnimation.style.left = '0';
  slideAnimation.style.opacity = '1';
});

document.querySelector('.link-1').addEventListener('mouseout', (e) => {
  slideAnimation.style.opacity = '0';
});

document.querySelector('.item-2-hover').addEventListener('mouseout', (e) => {
  if (
    e.relatedTarget.classList.contains('model-1-section') ||
    e.relatedTarget.classList.contains('hero__title') ||
    e.relatedTarget.classList.contains('header')
  ) {
    slideAnimation.style.removeProperty('left');
    slideAnimation.style.removeProperty('width');
  }
});

document.querySelector('.link-2').addEventListener('mouseover', () => {
  slideAnimation.style.width = '8.4rem';
  slideAnimation.style.left = '8.4rem';
  slideAnimation.style.opacity = '1';
});

document.querySelector('.link-2').addEventListener('mouseout', () => {
  slideAnimation.style.opacity = '0';
});

document.querySelector('.item-3-hover').addEventListener('mouseout', (e) => {
  if (
    e.relatedTarget.classList.contains('model-1-section') ||
    e.relatedTarget.classList.contains('hero__title') ||
    e.relatedTarget.classList.contains('header')
  ) {
    slideAnimation.style.removeProperty('left');
    slideAnimation.style.removeProperty('width');
  }
});

document.querySelector('.link-3').addEventListener('mouseover', () => {
  slideAnimation.style.width = '8.4rem';
  slideAnimation.style.left = '16.8rem';
  slideAnimation.style.opacity = '1';
});

document.querySelector('.link-3').addEventListener('mouseout', () => {
  slideAnimation.style.opacity = '0';
});

document.querySelector('.item-4-hover').addEventListener('mouseout', (e) => {
  if (
    e.relatedTarget.classList.contains('model-1-section') ||
    e.relatedTarget.classList.contains('hero__title') ||
    e.relatedTarget.classList.contains('header')
  ) {
    slideAnimation.style.removeProperty('left');
    slideAnimation.style.removeProperty('width');
  }
});

document.querySelector('.link-4').addEventListener('mouseover', () => {
  slideAnimation.style.width = '8.4rem';
  slideAnimation.style.left = '25.2rem';
  slideAnimation.style.opacity = '1';
});

document.querySelector('.link-4').addEventListener('mouseout', () => {
  slideAnimation.style.opacity = '0';
});

document.querySelector('.item-5-hover').addEventListener('mouseout', (e) => {
  if (
    e.relatedTarget.classList.contains('model-1-section') ||
    e.relatedTarget.classList.contains('hero__title') ||
    e.relatedTarget.classList.contains('header')
  ) {
    slideAnimation.style.removeProperty('left');
    slideAnimation.style.removeProperty('width');
  }
});

document.querySelector('.link-5').addEventListener('mouseover', () => {
  slideAnimation.style.width = '9.8rem';
  slideAnimation.style.left = '33.6rem';
  slideAnimation.style.opacity = '1';
});

document.querySelector('.link-5').addEventListener('mouseout', () => {
  slideAnimation.style.opacity = '0';
});

document.querySelector('.item-6-hover').addEventListener('mouseout', (e) => {
  if (
    e.relatedTarget.classList.contains('model-1-section') ||
    e.relatedTarget.classList.contains('hero__title') ||
    e.relatedTarget.classList.contains('header')
  ) {
    slideAnimation.style.removeProperty('left');
    slideAnimation.style.removeProperty('width');
  }
});

document.querySelector('.link-6').addEventListener('mouseover', () => {
  slideAnimation.style.width = '11rem';
  slideAnimation.style.left = '43.4rem';
  slideAnimation.style.opacity = '1';
});

document.querySelector('.link-6').addEventListener('mouseout', () => {
  slideAnimation.style.opacity = '0';
});

document.querySelector('.item-7-hover').addEventListener('mouseout', (e) => {
  if (
    e.relatedTarget.classList.contains('model-1-section') ||
    e.relatedTarget.classList.contains('hero__title') ||
    e.relatedTarget.classList.contains('header')
  ) {
    slideAnimation.style.removeProperty('left');
    slideAnimation.style.removeProperty('width');
  }
});

document.querySelector('.link-7').addEventListener('mouseover', () => {
  slideAnimation.style.width = '6rem';
  slideAnimation.style.opacity = '1';
  if (paddingRight === '450px') {
    slideAnimation.style.left = '89.4rem';
  }
  if (paddingRight === '380px') {
    slideAnimation.style.left = '82.4rem';
  }
  if (paddingRight === '320px') {
    slideAnimation.style.left = '76.4rem';
  }
  if (paddingRight === '250px') {
    slideAnimation.style.left = '69.4rem';
  }
  if (paddingRight === '200px') {
    slideAnimation.style.left = '64.4rem';
  }
});

document.querySelector('.link-7').addEventListener('mouseout', () => {
  slideAnimation.style.opacity = '0';
});

document.querySelector('.item-8-hover').addEventListener('mouseout', (e) => {
  if (
    e.relatedTarget.classList.contains('model-1-section') ||
    e.relatedTarget.classList.contains('hero__title') ||
    e.relatedTarget.classList.contains('header')
  ) {
    slideAnimation.style.removeProperty('left');
    slideAnimation.style.removeProperty('width');
  }
});

document.querySelector('.link-8').addEventListener('mouseover', () => {
  slideAnimation.style.width = '8.3rem';
  slideAnimation.style.opacity = '1';
  if (paddingRight === '450px') {
    slideAnimation.style.left = '95.4rem';
  }
  if (paddingRight === '380px') {
    slideAnimation.style.left = '88.4rem';
  }
  if (paddingRight === '320px') {
    slideAnimation.style.left = '82.4rem';
  }
  if (paddingRight === '250px') {
    slideAnimation.style.left = '75.4rem';
  }
  if (paddingRight === '200px') {
    slideAnimation.style.left = '70.4rem';
  }
});

document.querySelector('.link-8').addEventListener('mouseout', () => {
  slideAnimation.style.opacity = '0';
});

document.querySelector('.item-9-hover').addEventListener('mouseout', (e) => {
  if (
    e.relatedTarget.classList.contains('model-1-section') ||
    e.relatedTarget.classList.contains('hero__title') ||
    e.relatedTarget.classList.contains('header')
  ) {
    slideAnimation.style.removeProperty('left');
    slideAnimation.style.removeProperty('width');
  }
});

document.querySelector('.link-9').addEventListener('mouseover', () => {
  slideAnimation.style.width = '6.2rem';
  slideAnimation.style.opacity = '1';
  if (paddingRight === '450px') {
    slideAnimation.style.left = '103.7rem';
  }
  if (paddingRight === '380px') {
    slideAnimation.style.left = '96.7rem';
  }
  if (paddingRight === '320px') {
    slideAnimation.style.left = '90.7rem';
  }
  if (paddingRight === '250px') {
    slideAnimation.style.left = '83.7rem';
  }
  if (paddingRight === '200px') {
    slideAnimation.style.left = '78.7rem';
  }
});

document.querySelector('.link-9').addEventListener('mouseout', () => {
  slideAnimation.style.opacity = '0';
});
