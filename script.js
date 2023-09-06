function scrollSmoothly(target) {
    document.querySelector(target).scrollIntoView({
       behavior: 'smooth',
    });
 }
 
 document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
       e.preventDefault();
       const target = link.getAttribute('href');
       scrollSmoothly(target);
    });
 });