const elList = document.querySelector(".xizmatlar__list");
const elItems = document.querySelectorAll(".xizmatlar__itms");
const elMiniText = document.querySelector(".xizmatlar__mini-texr");
const elBigText = document.querySelector(".xizmatlar__mobil-ilova");

elList.addEventListener("click", (evt) => {
  elItems.forEach((item) => {
    if (item.classList[1]) {
      item.classList.remove("aktiv-class");
    }
  });
  if (evt.target.matches(".xizmatlar__itms")) {
    evt.target.classList.toggle("aktiv-class");
  }

  if (evt.target.value == 1) {
    elBigText.textContent = "Mobile ilova";
    elMiniText.textContent =
      "Mobile Ilova lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  }
  if (evt.target.value == 2) {
    elBigText.textContent = "Mobile Dizayn";

    elMiniText.textContent =
      "Mobile Dizayn lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  onsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  }
  if (evt.target.value == 3) {
    elBigText.textContent = "Web Saytlar";
    elMiniText.textContent =
      "Web site lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  onsequat.   esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  }
  if (evt.target.value == 4) {
    elBigText.textContent = "Web Dizayn";
    elMiniText.textContent =
      "Web Dizayn lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  onsequat.   esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt  do eiusmod tempor incididunt ut  onsequat.   esse cillum dolore eu fugiat nulla pari in culpa qui officia deserunt mollit anim id est laborum";
  }
  // console.log(evt.target.value);
});
