i18next.init(
  {
    lng: "en",
    debug: true,
    resources: {
      en: {
        translation: {
          key: "hello world",
        },
      },
      pl: {
        translation: {
          key: "witaj świecie",
        },
      },
    },
  },
  function (err, t) {
    updateContent();
  }
);

function updateContent() {
  document.querySelector(".copyright__paragraph").innerHTML = i18next.t("key");
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on("languageChanged", () => {
  updateContent();
});
