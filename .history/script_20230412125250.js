const hamburger = document.querySelector('#nav');
const div = document.querySelector('.mobile-menu');
const navItems = document.querySelectorAll('.mobile-menu li');

hamburger.addEventListener('click', () => {
  div.classList.toggle('show');
});

navItems.forEach((element) => {
  element.addEventListener('click', () => {
    div.classList.toggle('show');
  });
});


const form = document.querySelector('#form');
const email = form.elements['']

form.addEventListener('submit', (event) => {

  // Stop the form from submitting
  event.preventDefault();
});