// let currentLang = "ar";

// function setLanguage(lang) {
//   document.documentElement.lang = lang;
//   document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

//   document.querySelectorAll("[data-en]").forEach((el) => {
//     el.textContent = el.getAttribute(`data-${lang}`);
//   });

//   document.getElementById("langBtn").textContent =
//     lang === "en" ? "العربية" : "English";
// }

// document.getElementById("langBtn").addEventListener("click", function () {
//   currentLang = currentLang === "en" ? "ar" : "en";
//   setLanguage(currentLang);
// });

// Set default language
// setLanguage(currentLang);

// dropdown menu
////////////////////////////////////////////////////////



 const navTabs = document.querySelectorAll(".nav-tab");
      const menuSections = document.querySelectorAll(".menu-category");

      navTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          navTabs.forEach((t) => t.classList.remove("active-tab"));
          tab.classList.add("active-tab");

          const selected = tab.getAttribute("data-target");
          menuSections.forEach((section) => {
            section.style.display = section.id === selected ? "block" : "none";
            section.classList.remove("fadeInUp");
            void section.offsetWidth;
            section.classList.add("fadeInUp");
          });
        });
      });