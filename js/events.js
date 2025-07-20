  window.addEventListener("load", () => {
    const logo = document.querySelector("img[src*='logo']");
    if (logo) {
      logo.style.transition = "transform 1s ease";
      logo.style.transform = "rotate(360deg) scale(1.1)";
      setTimeout(() => {
        logo.style.transform = "scale(1)";
      }, 1000);
    }
  });

//   الكتابه المتحركه

function typeWriter(element, text, i = 0) {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      setTimeout(() => typeWriter(element, text, i + 1), 25);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const subtitle = document.querySelector(".subtitle");
    const text = subtitle.getAttribute("data-ar") || subtitle.textContent;
    subtitle.textContent = "";
    typeWriter(subtitle, text);
  });

 

