const reveals = document.querySelectorAll(".reveal") ;
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible") ;
        revealObserver.unobserve(entry.target) ;
      }
    });
  },
  { threshold: 0.2 }
) ;
reveals.forEach(el => revealObserver.observe(el)) ;

const sections = document.querySelectorAll("div.section") ;
const navLinks = document.querySelectorAll(".nav-links a") ;
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove("active")) ;
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`) ;
      if (active) active.classList.add("active") ;
    }
  }) ;
}, {
  rootMargin: "-50% 0px -50% 0px",
  threshold: 0
}) ;
sections.forEach(section => sectionObserver.observe(section)) ;