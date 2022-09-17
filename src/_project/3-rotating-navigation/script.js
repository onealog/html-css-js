const container = document.querySelector('.container');
const circle = document.querySelector('.circle');

const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');

openButton.addEventListener('click', () => {
  circle.style.transform = 'rotate(-90deg)';
  container.classList.add('show-nav');
});

closeButton.addEventListener('click', () => {
  circle.style.transform = 'rotate(0)';
  container.classList.remove('show-nav');
});
