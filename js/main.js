const log = console.log;
const warn = console.warn;
const delay = (wait = 1000) => {
  return new Promise((resolve, _) => {
    setTimeout(resolve, wait);
  });
};
document.addEventListener('DOMContentLoaded', init);
function init() {
  //DOM Ready

  document.querySelectorAll('.card').forEach((card) => {
    card.classList.add('card--enter');
    card.addEventListener('click', (ev) => {
      ev.target.classList.toggle('status-dot');
    });
  });

  document.querySelector('header').addEventListener('click', (ev) => {
    const nav = document.querySelector('nav');
    if (nav.firstElementChild) {
      nav.innerHTML = '';
    } else {
      nav.innerHTML = `<div class="spinner"></div>`;
    }
  });
}
