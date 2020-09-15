const langpl = document.querySelector(".lang-switcher__btn--pl")
const langen = document.querySelector(".lang-switcher__btn--en")

function test () {
  i18next.init({
    lng: "pl",
    debug: true,
    resources: {
      pl: {
        translation: {
          key: "hello world",
        },
      },
    },
    function(err, t) {
      updateContent();
    },
  });
}

  i18next.init({
    lng: "en",
    debug: true,
    resources: {
      en: {
        translation: {
          key: "hello worldooo",
        },
      },
    },
  }).then(function(t) {
    updateContent();
  })

function updateContent() {
  // document.querySelector(".copyright__paragraph").innerHTML = i18next.t("key");
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
  updateContent();
}

i18next.on("languageChanged", () => {
  updateContent();
});

langpl.addEventListener("click", test)
// langen.addEventListener("click", test2)