const elList = document.querySelector(".xizmatlar__list");
const elItems = document.querySelectorAll(".xizmatlar__itms");
elList.addEventListener("click", (evt) => {
  elItems.forEach((item) => {
    if (item.classList[1]) {
      item.classList.remove("aktiv-class");
    }
  });
  if (evt.target.matches(".xizmatlar__itms")) {
    evt.target.classList.toggle("aktiv-class");
  }
});
