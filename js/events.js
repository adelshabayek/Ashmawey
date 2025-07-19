

//   الكتابه المتحركه

function typeWriter(element, text, i = 0) {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      setTimeout(() => typeWriter(element, text, i + 1), 80);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    const text = title.getAttribute("data-en") || title.textContent;
    title.textContent = "";
    typeWriter(title, text);
  });

