const menuBtn = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
menuBtn.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});
