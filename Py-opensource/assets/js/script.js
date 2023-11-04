// This js queries written by Yash Joshi(Logics, full functions)

'use strict';

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navLinks = document.querySelectorAll("[data-navbar-link]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("nav-active");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}



/**
 * header scroll active state & go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 100) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


const starsContainer = document.querySelector('.stars');

for (let i = 0; i < 50; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  const size = Math.random() * 4 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  const delay = Math.random() * 5 + 1;
  star.style.animationDelay = `${delay}s`;
  starsContainer.appendChild(star);
}

const hero = document.querySelector('.hero');
const cursor = document.querySelector('.cursor');

hero.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

cursor.addEventListener('animationiteration', () => {
  cursor.style.animation = 'none';
  void cursor.offsetWidth;
  cursor.style.animation = 'cursorAnimation 1s infinite';
});

