// Q18: Implement rollover behavior to swap images on hover.
(function () {
  const img = document.getElementById('rollImg');
  const base = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="120"><rect width="200" height="120" fill="%23ff9900"/><text x="100" y="65" font-size="20" text-anchor="middle" fill="white">Hover me</text></svg>';
  const hover = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="120"><rect width="200" height="120" fill="%230066ff"/><text x="100" y="65" font-size="20" text-anchor="middle" fill="white">Nice!</text></svg>';

  img.src = base;
  img.addEventListener('mouseover', () => (img.src = hover));
  img.addEventListener('mouseout', () => (img.src = base));
})();
