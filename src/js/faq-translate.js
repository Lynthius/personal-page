const langpl = document.querySelector(".lang-switcher__btn--pl");
const langen = document.querySelector(".lang-switcher__btn--en");
const about = document.querySelector(".translate__about");
const gallery = document.querySelector(".translate__gallery");
const contact = document.querySelector(".translate__contact");
const collabHeader = document.querySelector(".collaborate__heading");
const collabParagraph = document.querySelector(".collaborate__paragraph");
const collabCv = document.querySelector(".collaborate__cv");

i18next.init({
  lng: "en",
  debug: true,
  resources: {
    en: {
      translation: {
        about: "about",
        gallery: "gallery",
        contact: "contact",
        collabHeader: "let’s collaborate",
        collabParagraph:
          "If you are interested in hiring me, just download my cv below, check my skills and then send me a message!",
        collabCv: "download cv",
      },
    },
    pl: {
      translation: {
        about: "o mnie",
        gallery: "galeria",
        contact: "kontakt",
        collabHeader: "zacznijmy współpracę",
        collabParagraph:
          "Jeśli jesteś zainteresowany współpracą, pobierz poniższe cv, sprawdź moje umiejętności i wyślij mi wiadomość!",
        collabCv: "pobierz cv",
      },
    },
  },
  function(err, t) {
    updateContent();
  },
});

function updateContent() {
  about.innerHTML = i18next.t("about");
  gallery.innerHTML = i18next.t("gallery");
  contact.innerHTML = i18next.t("contact");
  collabHeader.innerHTML = i18next.t("collabHeader");
  collabParagraph.innerHTML = i18next.t("collabParagraph");
  collabCv.innerHTML = i18next.t("collabCv");
}

function switchToPl() {
  i18next.changeLanguage("pl");
  window.localStorage.setItem("lang", window.i18next.language);
}

function switchToEn() {
  i18next.changeLanguage("en");
  window.localStorage.setItem("lang", window.i18next.language);
}

i18next.on("languageChanged", () => {
  updateContent();
});

langpl.addEventListener("click", switchToPl);
langen.addEventListener("click", switchToEn);

window.onload = function () {
  i18next.changeLanguage(window.localStorage.lang);
};
