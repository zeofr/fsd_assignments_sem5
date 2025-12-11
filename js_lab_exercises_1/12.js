// Q12: Prompt for names until cancel, sort them, and display as an ordered list.
// Note: This requires a browser environment with prompt() and DOM access.
function collectNames() {
  const names = [];
  while (true) {
    const value = prompt('Enter a name (Cancel to finish):');
    if (value === null) break;
    const trimmed = value.trim();
    if (trimmed) names.push(trimmed);
  }
  names.sort((a, b) => a.localeCompare(b));
  const ol = document.createElement('ol');
  names.forEach((n) => {
    const li = document.createElement('li');
    li.textContent = n;
    ol.appendChild(li);
  });
  document.body.innerHTML = '';
  document.body.appendChild(ol);
}

// Test: Uncomment in browser console or HTML page
// collectNames();
