

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

document.querySelectorAll(".nav-tab").forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const section = document.getElementById(targetId);
    if (section) {
      // إظهار القسم المطلوب وإخفاء البقية
      document.querySelectorAll(".menu-category").forEach((cat) => {
        cat.style.display = "none";
      });
      section.style.display = "block";

      // التمرير السلس إلى القسم
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});


 