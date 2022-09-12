const lastSection = document.querySelector('.last-section');
const footer = document.querySelector('.footer');

const showFooter = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    footer.style.opacity = 1;
    footer.style.visibility = 'visible';
  } else {
    footer.style.opacity = 0;
    footer.style.visibility = 'hidden';
  }
};

const lastSectionObserver = new IntersectionObserver(showFooter, {
  root: null,
  threshold: 0.6,
});

lastSectionObserver.observe(lastSection);
