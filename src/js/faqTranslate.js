const langpl = document.querySelector(".lang-switcher__btn--pl");
const langen = document.querySelector(".lang-switcher__btn--en");
const about = document.querySelector(".translate__about");
const gallery = document.querySelector(".translate__gallery");
const contact = document.querySelector(".translate__contact");
const collabHeader = document.querySelector(".collaborate__heading");
const collabParagraph = document.querySelector(".collaborate__paragraph");
const collabCv = document.querySelector(".collaborate__cv");
const photoTitleSection = document.querySelector(
  ".translate__title_photography"
);
const sectionDescLeft = document.querySelector(
  ".section-description-left_subtitle"
);
const sectionDescRight = document.querySelector(
  ".section-description-right_subtitle"
);
const webTitleSection = document.querySelector(".translate__title_web-dev");

const question1 = document.querySelector(".translate__question1");
const question2 = document.querySelector(".translate__question2");
const question3 = document.querySelector(".translate__question3");
const question4 = document.querySelector(".translate__question4");
const question5 = document.querySelector(".translate__question5");
const question6 = document.querySelector(".translate__question6");
const question7 = document.querySelector(".translate__question7");
const question8 = document.querySelector(".translate__question8");

const answer1 = document.querySelector(".translate__answer1");
const answer2 = document.querySelector(".translate__answer2");
const answer3 = document.querySelector(".translate__answer3");
const answer4 = document.querySelector(".translate__answer4");
const answer5 = document.querySelector(".translate__answer5");
const answer6 = document.querySelector(".translate__answer6");
const answer7 = document.querySelector(".translate__answer7");
const answer8 = document.querySelector(".translate__answer8");

i18next.init({
  lng: "en",
  debug: true,
  resources: {
    en: {
      translation: {
        about: "about",
        gallery: "gallery",
        contact: "contact",
        photoTitleSection: "photography",
        sectionDescLeft: "section",
        webTitleSection: "web development",
        sectionDescRight: "section",
        question1: `What is product photography?`,
        answer1: `<strong>Product photography</strong> aims to present the products catalog in the most favorable light, and <strong>light</strong> plays a huge role here. A well-chosen daylight or a well-chosen artificial light equipment is already half the battle. Often with <strong>packshots</strong>, various backgrounds are used, or so-called shadeless tents. Of course, you also have to take care of the post-processing of your photos - this is where the second half, if not most of my work begins.`,
        question2: `How do I start my product photography?`,
        answer2: `The simplest <strong>product photos</strong> can be taken at home using daylight. You can position the object properly and the sunlight coming through the window will serve as a natural <strong>blendę</strong>. It will also be necessary to use some smooth background - preferably white (e.g. a sheet of paper) in front of which the photographed object will be placed. It will be perfectly suitable for a private auction of an item or a photo for a blog.`,
        question3: `How much does a product session cost?`,
        answer3: `The prices for <strong>product sessions</strong> fluctuate quite significantly depending on the quality of a single processed photo and the amount of work that should be devoted to processing or preparing the object for photos. In my case, the prices start from PLN 25 for the simplest photo. If you are interested in photo session pricing, please contact me using <strong>the form in the footer</strong>.`,
        question4: `I'm interested in a photo session, what should I do?`,
        answer4: `If you are interested in a <strong>product session</strong>, go to the contact section in the footer or the menu in the upper right corner. Contact me and <strong>provide details about the session</strong> - product description, number of photos needed, and information on whether the photos are to be taken in the studio or at location, e.g. in a restaurant or store.`,
        question5: `Do you create websites?`,
        answer5: `Yes. Despite the fact that I’m still learning and developing my skills, I already have some experience in <strong>creating websites</strong>. I had the opportunity to work with <strong>WordPress</strong> (using <strong>Bootstrap</strong> library), the <strong>Hexo</strong> framework for creating blogs, but also pure <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. Currently I’m testing and checking other technologies or libraries - mainly <strong>React</strong>.`,
        question6: `Do you have a portfolio related to web development?`,
        answer6: `Almost all my projects can be found on <strong><a href="https://github.com/Lynthius" target="_blank"> <span class="highlight">github</span></a></strong> - not necessarily only those related to <strong>creating websites</strong>. The page you are on at the moment was also written by me using basic technologies and a few libraries.`,
        question7: `How much does it cost to make a simple website?`,
        answer7: `<strong>The pricing of a website project</strong> is quite a complicated matter. The price may depend on the complexity of the project, the number of subpages, logic, additional functions or the possibility of adding content editing. <strong>The website valuation</strong> is individual and can be determined only through the <strong>contact form</strong> and establishing details.`,
        question8: `I want to commission a website, what should I do?`,
        answer8: `If you are interested in the <strong>website</strong> go to the contact section in the footer or the menu in the upper right corner. Contact me and <strong>provide details about the project</strong> as far as possible - information about the purpose for which the website will be dedicated, and whether it will be a one-page website, multiple pages website, or maybe an online store or blog.`,
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
        photoTitleSection: "fotografia",
        sectionDescLeft: "sekcja",
        webTitleSection: "tworzenie stron",
        sectionDescRight: "sekcja",
        question1: `Na czym polega fotografia produktowa?`,
        answer1: `<strong>Fotografia produktowa</strong> ma na celu przedstawienie katalogu produktów w jak
        najkorzystniejszym świetle i właśnie <strong>światło</strong> odgrywa tu ogromną rolę. Dobrze dobrane światło dzienne, lub odpowiednio dobrany zestaw świateł sztucznych to już połowa sukcesu. Często przy <strong>packshotach</strong>, wykorzystuje się różne tła, czy tak zwane namioty bezcieniowe. Trzeba oczywiście zadbać również o obróbkę końcową zdjęć - to właśnie tutaj zaczyna się druga połowa, jeśli nie większość mojej pracy.`,
        question2: `Jak zacząć przygodę z fotografią produktową?`,
        answer2: `Najprostsze <strong>zdjęcia produktowe</strong> można wykonać w domu przy wykorzystaniu światła dziennego. Wystarczy ustawić odpowiednio przedmiot, a światło słoneczne wpadające przez okno posłuży jako naturalna <strong>blenda</strong>. Koniecznie będzie też wykorzystanie jakiegoś gładkiego tła - najlepiej białego
        (np. arkuszu papieru) przed którym ustawiony zostanie fotografowany przedmiot. Tak wykonane zdjęcie w zupełności nada się na prywatną aukcje przedmiotu, czy zdjęcie na potrzeby bloga.`,
        question3: `Ile kosztuje sesja produktowa?`,
        answer3: `Ceny za <strong>sesje produktowe</strong> wahają się dość mocno w zależności od jakości pojedyńczego
        obrobionego zdjęcia i ilości pracy jaką należy poświęcić na obróbkę, lub przygotowanie przedmiotu do zdjęć. W moim przypadku ceny zaczynają się od 25 PLN za najprostszą fotografię. Jeśli interesuje
        Cię dokładna wycena skontaktuj się ze mną za pomocą <strong>formularza w stopce</strong>.`,
        question4: `Chcę się umówić na sesję, co zrobić?`,
        answer4: `Jeśli interesuje Cię <strong>sesja produktowa</strong> przejdź do sekcji kontaktu w stopce, lub menu w
        prawym górnym rogu. Kontaktując się ze mną <strong>podaj szczegóły dotyczące sesji</strong> - opis
        produktów, ilość potrzebnych zdjęć, oraz informację na temat tego czy zdjęcia mają zostać wykonane w studio, czy na miejscu np. w restauracji czy sklepie.`,
        question5: `Czy zajmujesz się tworzeniem stron internetowych?`,
        answer5: `Tak. Pomimo tego, że nadal się uczę i rozwijam swoje umiejętności to mam już
        pewne doświadczenie w <strong>tworzeniu stron www</strong>. Miałem okazję pracować z
        pomocą <strong>WordPress</strong>'a, wykorzystując między innymi bibliotekę
        <strong>Bootstrap</strong>, framework'a <strong>Hexo</strong> do tworzenia blogów, ale również czystego <strong>HTML</strong>'a, <strong>CSS</strong>'a, oraz <strong>JavaScript</strong>'u. Obecnie testuję i sprawdzam inne technologie, czy biblioteki - głównie <strong>React</strong>.`,
        question6: `Czy posiadasz portfolio związane z web developmentem?`,
        answer6: `Prawie wszystkie moje projekty można znaleźć na <strong><a href="https://github.com/Lynthius" target="_blank"> <span class="highlight">githubie</span></a></strong> - niekoniecznie tylko te związane z <strong>tworzeniem stron www</strong>. Strona na której znajdujesz się w tej chwili również została napisana przeze mnie przy wykorzystaniu podstawowych technologii i kilku bibliotek.`,
        question7: `Ile kosztuje wykonanie prostej strony internetowej?`,
        answer7: `<strong>Wycena projektu strony internetowej</strong> to dość skomplikowana sprawa. Cena zależeć może od
        złożoności projektu, ilości podstron, logiki, dodatkowych funkcji, czy dodania możliwości edycji treści. <strong>Wycena strony</strong> jest indywidualna i możliwa do ustalenia jedynie poprzez <strong>formularz kontaktowy</strong> i ustalenie szczegółów.`,
        question8: `Chcę zlecić projekt strony internetowej, co zrobić?`,
        answer8: `Jeśli interesuje Cię <strong>strona internetowa</strong> przejdź do sekcji kontaktu w stopce, lub menu w prawym górnym rogu. Kontaktując się ze mną <strong>podaj szczegóły dotyczące projektu</strong> na ile to
        możliwe - informacje na temat działalności dla jakiej strona będzie dedykowana, oraz czy będzie to strona w formie one-page, wielu podstron, czy może sklep internetowy, albo blog.`,
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
  photoTitleSection.innerHTML = i18next.t("photoTitleSection");
  sectionDescLeft.innerHTML = i18next.t("sectionDescLeft");
  webTitleSection.innerHTML = i18next.t("webTitleSection");
  sectionDescRight.innerHTML = i18next.t("sectionDescRight");
  question1.innerHTML = i18next.t("question1");
  question2.innerHTML = i18next.t("question2");
  question3.innerHTML = i18next.t("question3");
  question4.innerHTML = i18next.t("question4");
  question5.innerHTML = i18next.t("question5");
  question6.innerHTML = i18next.t("question6");
  question7.innerHTML = i18next.t("question7");
  question8.innerHTML = i18next.t("question8");
  answer1.innerHTML = i18next.t("answer1");
  answer2.innerHTML = i18next.t("answer2");
  answer3.innerHTML = i18next.t("answer3");
  answer4.innerHTML = i18next.t("answer4");
  answer5.innerHTML = i18next.t("answer5");
  answer6.innerHTML = i18next.t("answer6");
  answer7.innerHTML = i18next.t("answer7");
  answer8.innerHTML = i18next.t("answer8");
}

function switchToPl() {
  i18next.changeLanguage("pl");
  langpl.classList.add("activeLang");
  langen.classList.remove("activeLang");
  window.localStorage.setItem("lang", window.i18next.language);
}

function switchToEn() {
  i18next.changeLanguage("en");
  langen.classList.add("activeLang");
  langpl.classList.remove("activeLang");
  window.localStorage.setItem("lang", window.i18next.language);
}

i18next.on("languageChanged", () => {
  updateContent();
});

langpl.addEventListener("click", switchToPl);
langen.addEventListener("click", switchToEn);

window.onload = function () {
  i18next.changeLanguage(window.localStorage.lang);
  if (window.localStorage.lang == "pl") {
    langpl.classList.add("activeLang");
    langen.classList.remove("activeLang");
  } else {
    langen.classList.add("activeLang");
    langpl.classList.remove("activeLang");
  }
};