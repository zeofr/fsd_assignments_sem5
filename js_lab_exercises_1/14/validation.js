// Q14: Client-side validation logic for registration form requirements.
(function () {
  const form = document.getElementById('regForm');
  const errorsEl = document.getElementById('errors');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorsEl.innerHTML = '';
    const data = new FormData(form);
    const password = data.get('password') || '';
    const confirm = data.get('confirm') || '';
    const yob = data.get('yob');
    const yearOk = /^\d{4}$/.test(yob) && Number(yob) >= 1900 && Number(yob) <= 2000;
    const errs = [];

    ['username', 'password', 'confirm', 'email'].forEach((field) => {
      if (!data.get(field)) errs.push(`${field} is required`);
    });

    if (password !== confirm) errs.push('Passwords must match');
    if (!emailPattern.test(data.get('email'))) errs.push('Email format is invalid');
    if (!yearOk) errs.push('Year of birth must be a four-digit year between 1900 and 2000');
    if (!form.elements.terms.checked) errs.push('Terms must be accepted');

    if (errs.length) {
      errs.forEach((msg) => {
        const li = document.createElement('li');
        li.textContent = msg;
        errorsEl.appendChild(li);
      });
      return;
    }

    errorsEl.innerHTML = '';
    alert('Registration successful!');
    form.reset();
  });
})();
