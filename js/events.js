// اشاره ترحيبيه 

  document.addEventListener("DOMContentLoaded", () => {
    const badge = document.createElement("div");
    badge.textContent = "أهلاً بك في كافيه فاكت!";
    badge.style.cssText = `
      position: fixed;
      top: 20px;
      left: 20px;
      background-color:#284831;
      color: white;
      padding: 10px 20px;
      border-radius: 30px;
      font-weight: bold;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      z-index: 9999;
      animation: fadeInOut 4s ease forwards;
    `;
    document.body.appendChild(badge);

    setTimeout(() => {
      badge.remove();
    }, 4000);
  });

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

