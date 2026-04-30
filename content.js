const params = new URLSearchParams(window.location.search);
const returnTo = params.get('returnTo');
const returnLink = document.getElementById('returnLink');

if (returnTo && returnLink) {
  const normalized = returnTo.startsWith('/') ? returnTo.slice(1) : returnTo;
  returnLink.href = normalized || 'index.html#slide-1';
}
