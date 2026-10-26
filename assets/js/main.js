const menuToggle = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primaryNav');
if (menuToggle && primaryNav) {
  const closeNav = () => {
    primaryNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  };
  menuToggle.addEventListener('click', () => {
    const open = primaryNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  primaryNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });
}
const filters = Array.from(document.querySelectorAll('[data-filter]'));
const projects = Array.from(document.querySelectorAll('[data-category]'));
filters.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filters.forEach(item => {
    const active = item === button;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  projects.forEach(card => { card.hidden = selected !== 'all' && card.dataset.category !== selected; });
}));
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
