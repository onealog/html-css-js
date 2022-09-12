const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

let activeIndex = 1;

const updateProgress = () => {
  progress.style.width = `${(activeIndex - 1) / (circles.length - 1) * 100}%`;

  circles.forEach((circle, index) => {
    if (index < activeIndex) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  if (activeIndex === 4) {
    nextButton.disabled = true;
  } else if (activeIndex === 1) {
    prevButton.disabled = true;
  } else {
    nextButton.disabled = false;
    prevButton.disabled = false;
  }

};

nextButton.addEventListener('click', () => {
  activeIndex++;

  if (activeIndex > 4) {
    activeIndex = circles.length;
  }

  updateProgress();
});

prevButton.addEventListener('click', () => {
  activeIndex--;

  if (activeIndex < 1) {
    activeIndex = 1;
  }

  updateProgress();
});
