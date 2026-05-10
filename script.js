/* HOLIDAE — script.js */

/* Navbar shrink on scroll */
var navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* Hamburger menu */
var hamburger = document.getElementById('hamburger');
var navLinks  = document.getElementById('nav-links');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('open');
        });
    });
}

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

/* Counter animation */
var counters = document.querySelectorAll('.count');
function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var start  = null;
    function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / 1800, 1);
        var eased    = 1 - Math.pow(1 - progress, 3);
        var current  = Math.floor(eased * target);
        el.textContent = target >= 1000 ? (current / 1000).toFixed(1) + 'k' : current;
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            el.textContent = target >= 1000 ? (target / 1000) + 'k' : target;
        }
    }
    requestAnimationFrame(step);
}
var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });
counters.forEach(function (el) { counterObserver.observe(el); });

/*-Back-top-*/
var backTopBtn =document.getElementById('back-top');
if (backTopBtn) {
    backTopBtn.addEventListener('click',function(){
        window.scrollTo({top:0, behavior: 'smooth'});
    })
}

/*-Update form-*/
function handleSubscribe(event) {
    event.preventDefault();
    var msg = document.getElementById('subscribe-msg');
    if (msg) {
        msg.textContent = 'You are on the list! Expect great deals soon.';
    }
    event.target.reset();
}