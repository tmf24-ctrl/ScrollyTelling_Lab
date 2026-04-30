const steps = Array.from(document.querySelectorAll('.step'));
const stageTag = document.getElementById('stageTag');
const stageTitle = document.getElementById('stageTitle');
const stageText = document.getElementById('stageText');

function setActiveStep(step) {
  steps.forEach((item) => item.classList.remove('active'));
  step.classList.add('active');

  stageTag.textContent = step.dataset.tag || 'Slide';
  stageTitle.textContent = step.dataset.title || '';
  stageText.textContent = step.dataset.text || '';
}

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (visible.length > 0) {
      setActiveStep(visible[0].target);
    }
  },
  {
    threshold: [0.35, 0.6, 0.85],
    rootMargin: '-10% 0px -35% 0px'
  }
);

steps.forEach((step) => observer.observe(step));

if (location.hash) {
  const target = document.querySelector(location.hash);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
