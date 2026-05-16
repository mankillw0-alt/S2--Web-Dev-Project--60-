/* HOLIDAE — script.js */

/* Navbar shrink on scroll */
var navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* Scroll reveal */
var revealEls = document.querySelectorAll('.reveal-up');
var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });
revealEls.forEach(function (el) { revealObserver.observe(el); });

/*-Back-top-*/
var backTopBtn =document.getElementById('back-top');
if (backTopBtn) {
    backTopBtn.addEventListener('click',function(){
        window.scrollTo({top:0, behavior: 'smooth'});
    })
}