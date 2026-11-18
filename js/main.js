// Небольшой сценарий: он только улучшает удобство, страницы работают и без него
document.addEventListener("DOMContentLoaded", function () {
  // 1. Подсветка текущего пункта меню
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(function (a) {
    if (a.getAttribute("href") === here) a.setAttribute("aria-current", "page");
  });

  // 2. Текущий год в подвале
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // 3. Кнопка «Наверх» появляется после прокрутки
  var btn = document.getElementById("toTop");
  if (btn) {
    window.addEventListener("scroll", function () {
      btn.hidden = window.scrollY < 400;
    });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
