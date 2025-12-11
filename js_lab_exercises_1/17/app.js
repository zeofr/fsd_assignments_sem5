// Q17: Handle form submit to display birth year and hometown search link.
(function () {
  const form = document.getElementById('infoForm');
  const result = document.getElementById('result');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name')?.trim();
    const age = Number(data.get('age'));
    const hometown = data.get('hometown')?.trim();

    if (!name || !hometown || Number.isNaN(age)) return;

    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;

    const link = document.createElement('a');
    link.href = `https://www.google.com/search?q=${encodeURIComponent(hometown)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = `Search results for ${hometown}`;

    result.innerHTML = '';
    result.appendChild(document.createTextNode(`${name} was born in ${birthYear}. `));
    result.appendChild(link);
  });
})();
