const langpl = document.querySelector(".lang-switcher__btn--pl");
const langen = document.querySelector(".lang-switcher__btn--en");
const faq = document.querySelector(".translate__faq");
const about = document.querySelector(".translate__about");
const gallery = document.querySelector(".translate__gallery");
const contact = document.querySelector(".translate__contact");
const aboutHeaderSection = document.querySelector(".about__heading");
const aboutSection = document.querySelector(".about__paragraph");
const contactHeaderSection = document.querySelector(".contact__heading");
const contactSection = document.querySelector(".contact__paragraph");
const contactBtn = document.querySelector(".contact__button");
const collabHeader = document.querySelector(".collaborate__heading");
const collabParagraph = document.querySelector(".collaborate__paragraph");
const collabCv = document.querySelector(".collaborate__cv");
const namePlaceholder = document.querySelector(".contact__input");
const messagePlaceholder = document.querySelector(".contact__area");

// TRANSLATIONS --------------------------------- //
i18next.init({
  // lng: "en",
  debug: true,
  resources: {
    en: {
      translation: {
        faq: "FAQ",
        about: "about",
        gallery: "gallery",
        contact: "contact",
        aboutHeaderSection: "About",
        aboutSection: `Welcome, my name is Tomasz, I'm a <a href="https://www.instagram.com/tomasz_przyborowski/" target="_blank"><span class="highlight">photographer</span></a> and <a href="https://github.com/Lynthius" target="_blank"> <span class="highlight">web developer</span></a> from Poznań. I've shot hundreds of photos of products of various types and sizes. When it comes to my other passion - programming, I'm still learning but I've fallen in love with front-end technologies, especially JavaScript and React.`,
        contactHeaderSection: "want to <br />grab a coffee?",
        contactSection: "Start by sending a message.",
        contactBtn: "send",
        collabHeader: "let’s collaborate",
        collabParagraph: "If you are interested in hiring me, just download my cv below, check my skills and then send me a message!",
        collabCv: "download cv",
        namePlaceholder: "Name",
        messagePlaceholder: "Type your message here...",
      },
    },
    pl: {
      translation: {
        faq: "FAQ",
        about: "o mnie",
        gallery: "galeria",
        contact: "kontakt",
        aboutHeaderSection: "O mnie",
        aboutSection: `Cześć! Mam na imię Tomasz i jestem <a href="https://www.instagram.com/tomasz_przyborowski/" target="_blank"><span class="highlight">fotografem</span></a> oraz <a href="https://github.com/Lynthius" target="_blank"> <span class="highlight">web developerem</span></a> z Poznania. Mam na swoim koncie mnóstwo zdjęć produktowych różnego rodzaju. Jeśli chodzi o moją drugą pasję - programowanie, nadal się uczę, ale zakochałem się we front-endzie, szczególnie w technologii JavaScript oraz React.`,
        contactHeaderSection: "Wyskoczymy <br /> na kawę?",
        contactSection: "Wyślij do mnie wiadomość.",
        contactBtn: "wyślij",
        collabHeader: "zacznijmy współpracę",
        collabParagraph: "Jeśli jesteś zainteresowany współpracą, pobierz poniższe cv, sprawdź moje umiejętności i wyślij mi wiadomość!",
        collabCv: "pobierz cv",
        namePlaceholder: "Imię",
        messagePlaceholder: "Tu wpisz swoją wiadomość...",
      },
    },
  },
  function(err, t) {
    updateContent();
  },
});
// ----------------------------------------------- //

function updateContent() {
  faq.innerHTML = i18next.t("faq");
  about.innerHTML = i18next.t("about");
  gallery.innerHTML = i18next.t("gallery");
  contact.innerHTML = i18next.t("contact");
  aboutHeaderSection.innerHTML = i18next.t("aboutHeaderSection");
  aboutSection.innerHTML = i18next.t("aboutSection");
  contactHeaderSection.innerHTML = i18next.t("contactHeaderSection");
  contactSection.innerHTML = i18next.t("contactSection");
  contactBtn.innerHTML = i18next.t("contactBtn");
  collabHeader.innerHTML = i18next.t("collabHeader");
  collabParagraph.innerHTML = i18next.t("collabParagraph");
  collabCv.innerHTML = i18next.t("collabCv");
  namePlaceholder.placeholder = i18next.t("namePlaceholder");
  messagePlaceholder.placeholder = i18next.t("messagePlaceholder");
}

function switchToPl() {
  i18next.changeLanguage("pl");
}

function switchToEn() {
  i18next.changeLanguage("en");
}

i18next.on("languageChanged", () => {
  updateContent();
});

langpl.addEventListener("click", switchToPl);
langen.addEventListener("click", switchToEn);
