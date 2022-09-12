const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('#progress');

let count = 0;
let width = 0;

nextButton.addEventListener('click', () => {
  count++;
  width += 30;

  if (count > 0) {
    prevButton.disabled = false;
  }

  progress.style.width = `${width}%`;
  circles[count].classList.add('active');

  if (count === 3) {
    nextButton.disabled = true;
    return;
  }
});

prevButton.addEventListener('click', () => {
  if (count === 0) {
    return;
  }

  if (count === 1) {
    prevButton.disabled = true;
    nextButton.disabled = false;
  }

  if (count > 1) {
    nextButton.disabled = false;
  }

  count--;
  width -= 30;

  progress.style.width = `${width}%`;
  circles[count + 1].classList.remove('active');
});
