const projectButton = document.querySelectorAll('.see-project');
const detailDiv = document.querySelector('.detail-popup');
const closeIcon = document.querySelectorAll('#x');

hamburger.addEventListener('click', () => {
  div.classList.toggle('show');
});

navItems.forEach((element) => {
  element.addEventListener('click', () => {
    div.classList.toggle('show');
  });
});
