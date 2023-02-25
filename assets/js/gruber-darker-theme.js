// gruber-darker-theme.js

// Switch to darker mode if user prefers dark color-scheme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
    const logElem = document.querySelector('header > h1 > a');
    logElem.innerHTML = '🌙';
}

function switchMode(el) {
  const bodyClass = document.body.classList;
  bodyClass.contains('dark')
    ? (el.innerHTML = '☀️', bodyClass.remove('dark'))
    : (el.innerHTML = '🌙', bodyClass.add('dark'));
}
