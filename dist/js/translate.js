const langpl=document.querySelector(".lang-switcher__btn--pl"),langen=document.querySelector(".lang-switcher__btn--en");function test(){i18next.init({lng:"pl",debug:!0,resources:{pl:{translation:{key:"hello world"}}},function(n,e){updateContent()}})}function updateContent(){document.querySelector(".copyright__paragraph").innerHTML=i18next.t("key")}function changeLng(n){i18next.changeLanguage(n),updateContent()}i18next.init({lng:"en",debug:!0,resources:{en:{translation:{key:"hello worldooo"}}}}).then((function(n){updateContent()})),i18next.on("languageChanged",()=>{updateContent()}),langpl.addEventListener("click",test);