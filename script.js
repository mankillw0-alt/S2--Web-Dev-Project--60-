const modeSwitch = document.getElementById('mode-switch');
const htmlEl = document.documentElement;

function updateThemeButton() {
    const theme = htmlEl.getAttribute('data-theme') || 'day';
    modeSwitch.textContent = theme === 'day' ? '🌙 Night' : '☀️ Day';
}

modeSwitch.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme') || 'day';
    const next = current === 'day' ? 'night' : 'day';
    htmlEl.setAttribute('data-theme', next);
    updateThemeButton();
});

// Initialize button text
updateThemeButton();