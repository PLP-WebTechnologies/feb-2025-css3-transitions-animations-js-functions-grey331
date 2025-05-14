const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;
const goalInput = document.getElementById('goal');
const progressInput = document.getElementById('progress');
const saveBtn = document.getElementById('save-goal');
const goalText = document.getElementById('goal-text');
const progressFill = document.getElementById('progress-fill');

// Load saved theme and goal
function init() {
  const theme = localStorage.getItem('focusTheme') || 'light';
  body.classList.add(theme);
  body.classList.add('fade-in');

  const savedGoal = localStorage.getItem('goal');
  const savedProgress = localStorage.getItem('progress');

  if (savedGoal) {
    goalText.textContent = savedGoal;
  }
  if (savedProgress) {
    progressFill.style.width = `${savedProgress}%`;
  }
}

// Theme toggle
toggleBtn.addEventListener('click', () => {
  const newTheme = body.classList.contains('light') ? 'dark' : 'light';
  body.classList.remove('light', 'dark');
  body.classList.add(newTheme);
  localStorage.setItem('focusTheme', newTheme);
});

// Save goal & progress
saveBtn.addEventListener('click', () => {
  const goal = goalInput.value.trim();
  const progress = parseInt(progressInput.value.trim(), 10);

  if (!goal || isNaN(progress) || progress < 0 || progress > 100) {
    alert("Please enter a valid goal and progress (0-100).");
    return;
  }

  localStorage.setItem('goal', goal);
  localStorage.setItem('progress', progress);

  goalText.textContent = goal;
  progressFill.style.width = `${progress}%`;
});

// Initialize on load
window.onload = init;
