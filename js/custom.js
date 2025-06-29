  let currentLang = 'en';

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });

    document.getElementById('langBtn').textContent = lang === 'en' ? 'العربية' : 'English';
  }

  document.getElementById('langBtn').addEventListener('click', function () {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(currentLang);
  });

  // Set default language
  setLanguage(currentLang);