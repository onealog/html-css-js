const container = document.querySelector('.container');
const openButton = document.getElementById('open');
const circle = document.querySelector('.circle');

openButton.addEventListener('click', () => {
  circle.style.transform = 'rotate(-90deg)';
  container.classList.add('show-nav');
});
