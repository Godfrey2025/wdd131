const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
  hamburger.textContent = navMenu.classList.contains('hidden') ? '☰' : '✖'; // ☰ or X
});


// Get the current date and time
const yearSpan = document.querySelector('#year');
const modifiedSpan = document.querySelector('#lastModified');

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;
