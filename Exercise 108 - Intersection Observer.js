const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if(entry.isIntersecting) console.log('Element is visible');
}));
observer.observe(document.querySelector('#targetElement'));