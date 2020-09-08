i18next.init(
  {
    lng: "pl",
    debug: true,
    resources: {
      pl: {
        translation: {
          key: "hello welt",
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
