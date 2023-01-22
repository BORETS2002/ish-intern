const elList = document.querySelector(".xizmatlar__list");
const elItems = document.querySelectorAll(".xizmatlar__itms");
const elMiniText = document.querySelector(".xizmatlar__mini-texr");
const elBigText = document.querySelector(".xizmatlar__mobil-ilova");

const elXizmatItms = document.querySelectorAll(".xizmalar-text-items");
const oneList = document.querySelector(".one-list");
const twooList = document.querySelector(".twoo-list");
const threeList = document.querySelector(".three-list");

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
    // elBigText.textContent = "ilova";
    elMiniText.textContent =
      "Hozirgi kunda O’zbekistondagi 70% internet foydalanuvchilari internetga Androidli mobil qurilmalar yordamida chiqishmoqda. Agar siz doimo mijozlaringiz “kaftida” bo’lishni hohlasangiz, u holda biznes uchun mobil ilova – aynan sizga uchun kerak. Android uchun mobil ilovaga buyurtma berib, mobile-texnologiyaning biznesingiz uchun beradigan imkoniyatlaridan foydalaning.";

    oneList.classList.add("d-block");
    oneList.classList.remove("d-none");
    twooList.classList.add("d-none");
    threeList.classList.add("d-none");
  }

  if (evt.target.value == 3) {
    // elBigText.textContent = "Web Saytlar";
    elMiniText.textContent =
      "Bu olamda mavjudligingizni isbotlang! Veb-sayt — kompaniyangiz imidji. Oʻz biznesingizni internet tarmoqlarida sifatli targʻib qiling. Bu orqali mijozlaringiz soni oshadi. Axborot almashinuvi yuzaga keladi. Xizmat koʻrsatish sifati oshadi.";

    oneList.classList.add("d-none");
    twooList.classList.remove("d-none");
    twooList.classList.add("d-block");

    threeList.classList.add("d-none");
  }
  if (evt.target.value == 4) {
    // elBigText.textContent = "Web Dizayn";
    elMiniText.textContent =
      "UX/UI dizaynerining maqsadi foydalanuvchi interfeysini ba'zi mantiqiy nuqtaga olib kelishdir. Shunday qilish kerakki, foydalanuvchi o’z maqsadiga erishsin.UX/UI dizayn - bu har qanday foydalanuvchi interfeyslarini foydalanishga qulay qilish va tashqi ko’rinishini hisobga olib loyihalashtirish hisoblanadi.";

    threeList.classList.add("d-none");
    threeList.classList.remove("d-none");

    twooList.classList.add("d-none");
    oneList.classList.add("d-none");
  }
});

const elSiteheaderToggleBtn = document.querySelector(".btn-open");
const elHeader = document.querySelector(".site-header");
const elsiteNav = document.querySelector(".sitenav");

elSiteheaderToggleBtn.addEventListener("click", function () {
  elHeader.classList.toggle("site-header__open");
  elsiteNav.classList.toggle("site-hader__open");
});
