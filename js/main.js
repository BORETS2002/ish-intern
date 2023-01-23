const elList = document.querySelector(".xizmatlar__list");
const elItems = document.querySelectorAll(".xizmatlar__itms");
const elMiniText = document.querySelector(".xizmatlar__mini-texr");
const elBigText = document.querySelector(".xizmatlar__mobil-ilova");

const elXizmatItms = document.querySelectorAll(".xizmalar-text-items");
const oneList = document.querySelector(".one-list");
const twooList = document.querySelector(".twoo-list");
const threeList = document.querySelector(".three-list");
const LangBotton = document.querySelector(".header__language-button");
var styleElem = document.head.appendChild(document.createElement("style"));

const HeaderList = document.querySelectorAll(".header__item");
const murojat = document.querySelector(".header__murojat");
const Biz = document.querySelector(".hero__mini-text");
const QisqachaBig = document.querySelector(".qisqacha__big-text");
const Qisqachamini = document.querySelector(".qisqacha__mini-text");
const QisqachaList = document.querySelectorAll(".qisqacha__items");
const XizmatlarItmsLeft = document.querySelectorAll(".xizmatlar__itms");
const XizmatRight = document.querySelectorAll(".xizmalar-text-items");
const Xizboton = document.querySelector(".xizmatlar__button");
const XizmatlarBig = document.querySelector(".hizmatlar__big-text");

const portsmall = document.querySelectorAll(".portfolio__smaill-texts");
const portfolioBig = document.querySelector(".portfolio__big-text");

const haqimizdaBig = document.querySelector(".haqimizda__big-text");
const haqimizdamini = document.querySelector(".haqimizda__mini-tekst");

const aloqaBig = document.querySelector(".aloqa__big-text");
const aloqaMini = document.querySelector(".aloqa__mini-tex");
const aloqaformT = document.querySelector(".aloqa__form-text");
const aloqaforminp = document.querySelector(".aloqa__form-input");
const aloqaformArea = document.querySelector(".aloqa__textarea");
const aloqaformButon = document.querySelector(".form__button");

const savollarBig = document.querySelector(".savollar-text-big");
// class="accordion-button collapsed"
const savollaracardion = document.querySelectorAll(".accordion-button");
const savollaraAcJavob = document.querySelectorAll(".accordion-body");

const footerAdres = document.querySelector(".footer__adres");

const footerKopaniya = document.querySelector(".footer__kompaniya-text");
const footerxizmatlar = document.querySelector(".footer__xizmatlar-text");
const footerQushimcha = document.querySelector(".footer__qushimcha-text");

const footerkompList = document.querySelectorAll(".footer__kompaniya-href");
const footeroptom = document.querySelectorAll(".footer__items-href");

const biznesman = document.querySelector(".haqimizda__bizesman");
const loyihaSvg = document.querySelector(".haqimizda__loyiha");
const malakaliSvg = document.querySelector(".haqimizda__malakali");

console.log();

console.log(footeroptom[0].outerText);
const data = {
  uzb: {
    three: [
      "Разработка мобильных приложений",
      "веб-сайты",
      "Дизайнерские услуги",
      "свяжитесь с нами",
    ],
    headerList: [
      "Bosh Sahifa",
      "Xizmatlar",
      "Portfolio",
      "Biz haqimizda",
      "Aloqa",
    ],
    Murojaat: "Murojaat uchun",
    biz: "Biz nima qilamiz?",
    QisqachaBig: "Qisqacha Malumot",
    qisqachaMini:
      "2+ yildan beri yordam berib kelayotgan raqamli agentlik. Internetda brendlar va kompaniyalarni rivojlantirish.",

    acardionBos: [
      " Veb-saytga qanday qo'shimcha qo'shish mumkin?",
      "Sizda Veb-sayt dizayni bormi?",
      "Toshkentda sayt yaratish qancha turadi?",
    ],

    portsmaill: [
      "Ushbu sayt dasturlashga qiziquvchi yosh dasturchilar uchun ishlab chiqilgan bo'lib, siz ushbu sayt yordamida dasturlashni online, uyingizdan chiqmagan holda o'rganib olishingiz mumkin, xususan: Web dasturlash, Mobile Dasturlash, Malumotlar bazasi, .NET dasturlash UI/UX Dizayn",
      "Mantiqiy Savollar ilovasi Mantiqan o'ylashga majbur qiladigan va har xil viktorinalar yechishga qiziqadigan ham-yurtdoshlarimiz uchun ishlab chiqilgan ilova bo'lib, hozirda ilova bazasi ichida 400 ga yaqin bir biridan ajoyib har xil savollar bo'lib sizni Mantiqiy fikrlashingiz o'stiribgina qolmay, do'stlaringiz bilan yoki Maktabda sinfdoshlaringiz bilan birga har xil Mantiqiy va Test savollarga javob berishingiz mumkin.",
      "Yaqin o'tmishdan bizga malumki yozuvchilar, shoirlar, adabiyot yoki ona-tili fani qiziquvchilari yoki bo'lmasa oddiy insonlar ham Kiril yozuvidagi so'zlarni Lotin yozuviga yoki aksincha Lotin yozuvidagi so'zlarni Kiril yozuviga qo'l bilan yozib o'tkashizgan va hozirda bu narsaga hojat qolmagan, chunki 21-asr texnologiyalar asrida yashamoqdamiz va biz sizlar uchun bu muammo yechimi deb qarashingiz mumkin bo'lgan Mobil ilovani ishlab chiqdik.",
      "Uzbekistonga qulay pul o'tkazish Rossiya da ishlovchi hamyurtlarimiz yaqinlari uchun Uzbekistonga pul yuborishi uchun Halolpay ilovasini ishlab chiqdik va bu ilova yordamida siz Rossiyadan turib Uzbekistonga pul yuboribgina qolmay Mobil aloqa hisoblarini to'ldirish, Internet providerlar(wifi), kommunal xizmatlar, Internet to'plamlar, IPTV to'lovlarini qulay va tez amalga oshirishingiz mumkin.",

      "Savolat Asxab: Salovat ilovasi mo'min musulmonlarga salovat aytishni eslatadigan ilova bo'lib, bu ilova telefoningizni qulfdan chiqarganingizda Payg'ambarimiz Muhammad S.A.V ga savolat aytishni eslatib turadi. Ilovani imkoniyatlaridan yana biri necha marta salovot aytayotganingizni, ya'ni ilova telefoningizni necha marta qulfdan chiqarganingizni va necha marta salovot aytishingiz mumkinligini hisoblab boradi.",
    ],
    qisqachaList: [
      "2+ Yil biznesda",
      `8 dan ortiq  Mutahassislar`,
      "Xizmatlar uchun 100% kafolat",
      "10dan ortiq Muvaffaqqiyatli loyihalar",
    ],
    xizLeft: [
      "Web sayt tuzish",
      "Mobile ilovalar tuzish",
      "Dizaynerlik xizmatlari",
    ],
    xizmatRigth: [
      "Landing page",
      " Vizitka sayt",
      "Korporativ sayt",
      "Internet do’kon",
      "Katalog sayt",
      "Web portal",
      "Turistik korxona uchun sayt",
      "SEO xizmati",
      "Qurilish korxonasi uchun sayt",

      "Internet magazin",
      "Taksi ilovasi",
      "Restoranlar uchun ilova",
      "Video streaming uchun ilova",
      "Avtosalon lar uchun ilova",
      "Elektron savdo ilovasi",
      "Onlayn kinoteatr",
      "Mehmonxonalar uchun ilova",
      "Ilova uchun dizayn",
      "Web sayt uchun dizayn",
      "Dizayn",
      "Logotip",
      " Brending",
      "Upakovka",
      "Ijtimoiy tarmoqlar va reklama uchun poster",
    ],
    twoo: ["Biz haqimizda", "Portfolio"],
    acardionJavob: [
      "Toshkent va mintaqalarda saytlarni ishlab chiqish qiymati ularning turiga va murakkablik darajasiga bog'liq. Har bir loyiha uchun umumiy miqdor sayt turini, texnik topshiriqning murakkabligini va funksionalligini hisobga olgan holda alohida hisoblanadi.",

      "Bizda sayt dizaynlari mavjud. Agar sizda sayt dizayni bo'lmasa, biz sizga o'z takliflarimizni beramiz.",
      "Veb-saytga qo'shimchalar veb-sayt yaratilishidan oldin kelishib olinadi. Agar sayt foydalanuvchiga topshirilsa, faqat saytdagi xatolarni tuzatish mumkin! Saytga qo'shimcha qo'shimchalar yangi kelishuvga bog'liq bo'ladi.",
    ],
    xizmatlarBig: "Bizning Xizmatlarimiz",
    elMiniText:
      "  Hozirgi kunda O’zbekistondagi 70% internet foydalanuvchilari internetga Androidli mobil qurilmalar yordamida chiqishmoqda. Agar siz doimo mijozlaringiz “kaftida” bo’lishni hohlasangiz, u holda biznes uchun mobil ilova – aynan sizga uchun kerak. Android uchun mobil ilovaga buyurtma berib, mobile-texnologiyaning biznesingiz uchun beradigan imkoniyatlaridan foydalaning.",
  },
  rus: {
    three: [
      "Mobile Ilova ishlab chiqish",
      "Web sayt tuzish",
      "Dizaynerlik xizmatlari ",
      "Biz bilan aloqa",
    ],
    headerList: [
      "Главная страница",
      "Услуги",
      "Портфолио",
      "о нас",
      "Коммуникация",
    ],
    Murojaat: "Для справки",
    biz: "Что мы делаем?",
    QisqachaBig: "Краткая информация",
    qisqachaMini:
      "Digital-агентство, которое помогает уже больше двух лет.Развитие брендов и компаний в Интернете",

    acardionBos: [
      " Какие добавки можно добавлять на веб-сайт",
      " У вас есть дизайн веб-сайта?",
      "  Сколько стоит создать сайт в Ташкенте?",
    ],

    acardionJavob: [
      " Стоимость разработки сайтов в Ташкенте и регионах зависит от их типа и уровня сложности. Общая сумма по каждому проекту рассчитывается отдельно с учетом типа сайта, сложности и функциональности технического задания.",
      "У нас есть дизайны сайтов. Если у вас нет дизайна сайта, мы дадим вам наши предложения",
      "Дополнения к сайту согласовываются до создания сайта. В случае передачи сайта пользователю, можно исправить только ошибки на сайте! Дополнительные дополнения к сайту будут подлежать новому соглашению",
    ],
    qisqachaList: [
      "больше двух лет в бизнесе",
      "Более 8 специалистов",
      "100% гарантия на услуги ",
      "Более 10 успешных проектов",
    ],
    xizLeft: [
      "Создание веб-сайта",
      "Создание мобильных приложений",
      "Дизайнерские услуги",
    ],
    xizmatRigth: [
      "Лендинг (одностраничный)",
      "Сайт-визитка",
      "Многостраничный (корпоративный)",
      "Интернет-магазин",
      "Создание сайта каталога",
      "Веб-порталы",
      "Сайт для туристической компании",
      "SEO продвижение сайта",
      "Сайт для строительных компаний",
      "Интернет-магазин",
      "Такси",
      "Приложения для ресторанов",
      "Видео стриминга",
      "Приложений для автосалонов",
      "Электронной торговли",
      "Онлайн кинотеатров",
      "Приложений для гостиниц",
      "Дизайн для приложение",
      "Дизайн для Web сайт",
      "Дизайн",
      "Логотип",
      "Брандинг",
      "Упаковка",
      "Постер для реклама и социальные сети",
    ],
    portsmaill: [
      "Этот сайт для молодых программистов, интересующихся программированием. Он разработан таким образом, что вы можете программировать с помощью этого сайта онлайн вы можете учиться, не выходя из дома, в частности:Веб-программирование, Мобильное программирование, База данных, .NET Программирование UI/UX-дизайн",
      " Приложение «Mantiqiy Savollar», которое заставит вас мыслить логически и наши соотечественники, которым интересно решать различные викторины это приложение, разработанное и в настоящее время находящееся в базе данных приложений  есть около 400 разных вопросов. Не только ваше логическое мышление будет расти, но и ваши друзья      или Различные логические и тестовые задания с одноклассниками в школе    вы можете ответить на вопросы. ",
      "Писатели, поэты, литература, известная нам из недавнего прошлого или те, кто интересуется наукой о родном языке, а если нет, то обычные люди Преобразование слов из кириллицы в латиницу или наоборот написали слова от руки кириллицей, а теперь к этой штуке незачем, ведь мы живем в век технологий 21 века и мы вы Мы разработали мобильное приложение, которое вы можете рассматривать как решение этой проблемы. ",
      "удобный денежный перевод в Узбекистан. Мы разработали приложение Halolpay для наших соотечественников, работающих в России, для отправки денег в Узбекистан, и с помощью этого приложения вы можете не только отправлять деньги из России в Узбекистан, но и пополнять счета мобильных, интернет провайдеров (WiFi), коммунальные услуги, Вы легко и быстро сможете оплачивать интернет-пакеты и IPTV.",
      "Asxab: Salovat Приложение напоминает верующим мусульманам о необходимости произнести салават, это приложение наш пророк, когда вы разблокируете свой телефон Это напоминает Мухаммаду САВу произнести салават. Кроме того, приложение подскажет, лько раз вы произносите салават, сколько раз используете свой телефон, раз вы разблокировали и сколько раз вы можете произносить салават.",
    ],

    twoo: ["насчет нас", "портфолио"],
    xizmatlarBig: "Наши услуги ",
    elMiniText:
      "В настоящее время 70% пользователей Интернета в Узбекистане выходят в Интернет с помощью мобильных устройств Android. Если вы хотите всегда быть «на ладони» у своих клиентов, то мобильное приложение для бизнеса — это именно то, что вам нужно. Закажите мобильное приложение для Android и воспользуйтесь возможностями мобильных технологий для своего бизнеса.",
  },
};

LangBotton.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (LangBotton.textContent == "Uzbek tili") {
    LangBotton.textContent = "русский язык";
    styleElem.innerHTML =
      "#butons:before {background-image: url('/images/BevelledRussia.svg')}";
    ("#butons:before {}");

    HeaderList.forEach((item, i) => {
      item.textContent = data.rus.headerList[i];
    });

    XizmatlarItmsLeft.forEach((item, i) => {
      item.textContent = data.rus.xizLeft[i];
    });
    QisqachaList.forEach((item, i) => {
      item.textContent = data.rus.qisqachaList[i];
    });

    XizmatRight.forEach((item, i) => {
      item.textContent = data.rus.xizmatRigth[i];
    });
    portsmall.forEach((item, i) => {
      item.textContent = data.rus.portsmaill[i];
    });
    savollaracardion.forEach((item, i) => {
      item.textContent = data.rus.acardionBos[i];
    });
    savollaraAcJavob.forEach((item, i) => {
      item.textContent = data.rus.acardionJavob[i];
    });
    biznesman.src = "/images/besplatna.svg";
    loyihaSvg.src = "/images/odelna.svg";
    malakaliSvg.src = "/images/komanda.svg";
    footerkompList.forEach((item, i) => {
      item.textContent = data.rus.twoo[i];
    });

    footeroptom.forEach((item, i) => {
      console.log(data.rus.three[i]);
      item.textContent = data.uzb.three[i];
    });

    murojat.textContent = data.rus.Murojaat;
    Biz.textContent = data.rus.biz;
    QisqachaBig.textContent = data.rus.QisqachaBig;
    Qisqachamini.textContent = data.rus.qisqachaMini;
    XizmatlarBig.textContent = data.rus.QisqachaBig;
    elMiniText.textContent = data.rus.elMiniText;
    Xizboton.textContent = "Разместить заказ";
    aloqaBig.textContent = "Свяжитесь с нами";
    portfolioBig.textContent = "Наше портфолио";
    haqimizdaBig.textContent = "о нас";
    aloqaformT.textContent = "Свяжитесь с нами";
    aloqaforminp.placeholder = "Ваше имя*";
    aloqaformButon.textContent = "Отправить сообщение";
    savollarBig.textContent = "Часто задаваемые вопросы";
    aloqaformArea.placeholder = "Оставьте сообщение здесь";
    footerAdres.textContent =
      "Ташкент, Узбекистан, Чиланзарский район, улица Чупан ота";
    footerKopaniya.textContent = "Компания";
    footerxizmatlar.textContent = "Услуги";
    footerQushimcha.textContent = "дополнительно";
    aloqaMini.textContent =
      "ONVETI – Мы любим то, что делаем, и ценим ваше желание развивать свой бизнес. Свяжитесь с нами, чтобы узнать, как мы можем вам помочь.";
    haqimizdamini.textContent =
      "ONVETI – IT-компания, расположенная в Ташкенте, мы работаем с клиентами не только в Узбекистане, но и в других странах. Основными направлениями нашей деятельности являются различные виды Мобильных приложений, дизайнерские решения, разработка и сопровождение интернет-проектов, интернет-маркетинг, дизайн и разработка сайтов, а также их поддержка и развитие.";
    //
    //
    //
    //
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
          "В настоящее время 70% пользователей Интернета в Узбекистане выходят в Интернет с помощью мобильных устройств Android. Если вы хотите всегда быть «на ладони» у своих клиентов, то мобильное приложение для бизнеса — это именно то, что вам нужно. Закажите мобильное приложение для Android и воспользуйтесь возможностями мобильных технологий для своего бизнеса.";
      }

      if (evt.target.value == 3) {
        // elBigText.textContent = "Web Saytlar";
        elMiniText.textContent =
          "  Докажи свое существование в этом мире! Сайт – это имидж вашей компании. Продвигайте свой бизнес в Интернете. Это увеличит количество ваших клиентов. Происходит обмен информацией. Качество обслуживания повысится.";
      }
      if (evt.target.value == 4) {
        // elBigText.textContent = "Web Dizayn";
        elMiniText.textContent =
          "Цель дизайнера UX/UI — довести пользовательский интерфейс до некоторой логической точки. Это нужно сделать так, чтобы пользователь достиг своей цели.UX/UI дизайн — это дизайн любого пользовательского интерфейса с учетом удобства использования и внешнего вида. ";
      }
    });
  } else {
    LangBotton.textContent = "Uzbek tili";

    styleElem.innerHTML =
      "#butons:before {background-image: url('/images/bayroq-uzbekistan.svg')}";
    HeaderList.forEach((item, i) => {
      item.textContent = data.uzb.headerList[i];
    });
    QisqachaList.forEach((item, i) => {
      item.textContent = data.uzb.qisqachaList[i];
    });
    XizmatlarItmsLeft.forEach((item, i) => {
      item.textContent = data.uzb.xizLeft[i];
    });
    XizmatRight.forEach((item, i) => {
      item.textContent = data.uzb.xizmatRigth[i];
    });
    portsmall.forEach((item, i) => {
      item.textContent = data.uzb.portsmaill[i];
    });
    footerkompList.forEach((item, i) => {
      item.textContent = data.uzb.twoo[i];
    });

    savollaracardion.forEach((item, i) => {
      item.textContent = data.uzb.acardionBos[i];
    });
    savollaraAcJavob.forEach((item, i) => {
      item.textContent = data.uzb.acardionJavob[i];
    });
    footeroptom.forEach((item, i) => {
      item.textContent = data.rus.three[i];

      biznesman.src = "/images/biznesingiz.svg";
      loyihaSvg.src = "/images/malakali.svg";
      malakaliSvg.src = "/images/har-bir-loiha.svg";
    });

    aloqaBig.textContent = "Biz bilan bog’laning ";

    murojat.textContent = data.uzb.Murojaat;
    Biz.textContent = data.uzb.biz;
    QisqachaBig.textContent = data.uzb.QisqachaBig;
    Qisqachamini.textContent = data.uzb.qisqachaMini;
    XizmatlarBig.textContent = data.uzb.QisqachaBig;
    elMiniText.textContent = data.uzb.elMiniText;
    Xizboton.textContent = "Buyurtma berish";
    portfolioBig.textContent = "Bizning portfolio";
    haqimizdaBig.textContent = "Biz haqimizda";
    aloqaformT.textContent = "Biz bilan bog’laning";
    aloqaforminp.placeholder = "Ismingiz*";
    aloqaformButon.textContent = "Xabar yuborish";
    aloqaformArea.placeholder = "Bu yerda xabar qoldiring…";
    savollarBig.textContent = "Tez-tez so‘raladigan savollar";
    footerAdres.textContent =
      " Tashkent, Uzbekistan, Chilonzor tumani, Cho’pon ota kuchasi";
    footerKopaniya.textContent = "Kompaniya";
    footerxizmatlar.textContent = "Xizmatlar";
    footerQushimcha.textContent = "Qo’shimcha";
    aloqaMini.textContent =
      "ONVETI – Biz o’z ishimizni sevamiz va sizning o’z biznesingizni rivojlantirishga bo’lgan xohishingizni qadrlaymiz. Sizga qanday yordam bera olishimizni bilish uchun biz bilan bog’laning. ";
    haqimizdamini.textContent =
      "ONVETI – Toshkentda joylashgan IT kompaniya bo‘lib, biz nafaqat O’zbekiston, balki boshqa davlatlardagi mijozlar bilan ham ishlaymiz. Asosiy faoliyatimiz har xil turdagi Mobil ilovalar, dizayn yechimlari, Internet-loyihalarni ishlab chiqish va ularga xizmat ko‘rsatish, Internet-marketing, veb-saytlarni loyihalash va ishlab chiqish, shuningdek, ularni qo‘llab-quvvatlash va rivojlantirish bilan ham shug’ullanamiz.";
    //
    //

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
      }

      if (evt.target.value == 3) {
        // elBigText.textContent = "Web Saytlar";
        elMiniText.textContent =
          "Bu olamda mavjudligingizni isbotlang! Veb-sayt — kompaniyangiz imidji. Oʻz biznesingizni internet tarmoqlarida sifatli targʻib qiling. Bu orqali mijozlaringiz soni oshadi. Axborot almashinuvi yuzaga keladi. Xizmat koʻrsatish sifati oshadi.";
      }
      if (evt.target.value == 4) {
        // elBigText.textContent = "Web Dizayn";
        elMiniText.textContent =
          "UX/UI dizaynerining maqsadi foydalanuvchi interfeysini ba'zi mantiqiy nuqtaga olib kelishdir. Shunday qilish kerakki, foydalanuvchi o’z maqsadiga erishsin.UX/UI dizayn - bu har qanday foydalanuvchi interfeyslarini foydalanishga qulay qilish va tashqi ko’rinishini hisobga olib loyihalashtirish hisoblanadi.";
      }
    });
  }
});

// Canvas
// Canvas

// Canvas
// Canvas

// const canvas = document.getElementById("sandbox");

// canvas.width = 1390;
// canvas.height = 690;
// if (window.matchMedia("(max-width: 1325px)").matches) {
//   canvas.width = 1200;
//   canvas.height = 690;
// }
// if (window.matchMedia("(max-width: 1300px)").matches) {
//   canvas.width = 1170;
// }
// if (window.matchMedia("(max-width: 1170px)").matches) {
//   canvas.width = 1050;
// }
// if (window.matchMedia("(max-width: 1050px)").matches) {
//   canvas.width = 970;
// }

// if (window.matchMedia("(max-width: 970px)").matches) {
//   canvas.width = 900;
// }

// if (window.matchMedia("(max-width: 900px)").matches) {
//   canvas.width = 810;
// }
// if (window.matchMedia("(max-width: 810px)").matches) {
//   canvas.width = 730;
// }
// if (window.matchMedia("(max-width: 730px)").matches) {
//   canvas.width = 640;
// }

// const ctx = canvas.getContext("2d");

// function Circle(x, y, r, c) {
//   this.x = x;
//   this.y = y;
//   this.r = r;
//   this.c = c;

//   this.dx = Math.random() * 4 + 1;
//   this.dx *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
//   this.dy = Math.random() * 4 + 1;
//   this.dx *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

//   this.draw = function () {
//     ctx.beginPath();
//     ctx.fillStyle = this.c;
//     ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
//     ctx.fill();
//   };
//   this.animate = function () {
//     this.x += this.dx;
//     this.y += this.dy;

//     if (this.x + this.r > canvas.width || this.x - this.r < 0) {
//       this.dx = -this.dx;
//     }
//     if (this.y + this.r > canvas.height || this.y - this.r < 0) {
//       this.dy = -this.dy;
//     }
//     this.draw();
//   };
// }

// const Balls = [];
// for (let i = 0; i < 50; i++) {
//   let r = Math.floor(Math.random() * 30) + 15;
//   let x = Math.random() * (canvas.width - r * 2) + r;
//   let y = Math.random() * (canvas.width - r * 2) + r;
//   let c = "#FF552D";
//   Balls.push(new Circle(x, y, r, c));
// }

// canvas.addEventListener("click", (e) => {
//   let r = Math.floor(Math.random() * 30) + 15;
//   Balls.push(new Circle(e.clientX, e.clientY, r, "blue"));
// });

// function update() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   for (let i = 0; i < Balls.length; i++) {
//     Balls[i].animate();
//   }
//   requestAnimationFrame(update);
// }
// update();
// Canvas
// Canvas

// Canvas
// Canvas

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
