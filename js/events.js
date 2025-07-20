
//   الكتابه المتحركه

function typeWriter(element, text, i = 0) {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      setTimeout(() => typeWriter(element, text, i + 1), 15);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const subtitle = document.querySelector(".subtitle");
    const text = subtitle.getAttribute("data-ar") || subtitle.textContent;
    subtitle.textContent = "";
    typeWriter(subtitle, text);
  });

 

