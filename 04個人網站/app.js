let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    nav.style.boxShadow = "";
  } else {
    nav.style.boxShadow = "0 10px 6px -6px #777";
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const text = "嗨，我是 Yungzhi!";
  const target = document.querySelector("h1");
  let index = 0;

  function type() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(type, 150);
    }
  }

  target.textContent = ""; // 清空預設文字
  type();
});

IntersectionObserver;
