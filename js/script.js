document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('[data-burger]');
  const nav = document.querySelector('[data-nav]');
  const body = document.body;

  burger.addEventListener('click', () => {
    const isOpen = burger.classList.contains('burger_active');
    if (isOpen) {
      burger.classList.remove('burger_active');
      burger.setAttribute('aria-expanded', false);
      burger.setAttribute('aria-label', 'Open Menu');
      nav.classList.remove('nav_active');
      body.classList.remove('fix-scroll');
    } else {
      burger.classList.add('burger_active');
      burger.setAttribute('aria-expanded', true);
      burger.setAttribute('aria-label', 'Close Menu');
      nav.classList.add('nav_active');
      body.classList.add('fix-scroll');
    }
  });
});
