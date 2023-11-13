// Translation and Language

let language = localStorage.getItem("language") || "en";

const translation = {
  en: {
    "link.use": "How to Use it",
    "link.about": "About Us",
    "link.support": "Support Us",
    to_top: "Up",
    "page.use.title": "How to Use it",
    "page.use.run_code": "Run this code here, in a console or from any site:",
    "page.use.api_resource": "API Resource",
    "page.use.allowed_methods": "Allowed Methods:",
    "page.use.send_query": "Send query to modify the response",
    "page.use.amount": "Number of users to return",
    "page.use.attributes": "Attributes to return specific attributes",
    "page.use.document_pattern": "Return specific document pattern",
    "page.use.age": "Return specific age",
    "page.use.lastname": "Return specific lastname",
    "page.use.firstname": "Return specific firstname",
    "page.use.ip": "Return specific ip",
    "page.use.email": "Return specific email",
    "page.use.birth_day": "Return specific birthDay",
    "page.about.title": "About JSONUser",
    "page.about.p_one": `This site is a simple API that returns JSON data for testing and development
    purposes. As of now there is only one endpoint that returns a list of users.
    However, I plan to add more endpoints in the future. If you have any
    suggestions for endpoints, please let me know.`,
    "page.support.title": "Support Us",
    "page.support.s_one": "If you have any questions or suggestions, please feel free to contact me at",
    "page.support.s_two": "Or you can contact me via",

  },
  ru: {
    "link.use": "Как пользоваться",
    "link.about": "О нас",
    "link.support": "Поддержать",
    to_top: "Вверх",
    "page.use.title": "Как пользоваться",
    "page.use.run_code":
      "Запустите этот код здесь, в консоли или с любого сайта:",
    "page.use.api_resource": "API Ресурс",
    "page.use.allowed_methods": "Доступные методы:",
    "page.use.send_query": "Отправьте запрос для изменения ответа",
    "page.use.amount": "Количество пользователей для возврата",
    "page.use.attributes": "Атрибуты для возврата конкретных атрибутов",
    "page.use.document_pattern": "Вернуть конкретный шаблон документа",
    "page.use.age": "Вернуть конкретный возраст",
    "page.use.lastname": "Вернуть конкретную фамилию",
    "page.use.firstname": "Вернуть конкретное имя",
    "page.use.ip": "Вернуть конкретный ip",
    "page.use.email": "Вернуть конкретный email",
    "page.use.birth_day": "Вернуть конкретный день рождения",
    "page.about.title": "О JSONUser",
    "page.about.p_one": `Этот сайт представляет собой простой API, который возвращает данные в формате JSON для целей тестирования и разработки. На данный момент существует только один контроллер, который возвращает список пользователей. Однако в будущем я планирую добавить больше функционала. Если у вас есть какие-либо предложения по функционалу, пожалуйста, дайте мне знать.`,
    "page.support.title": "Поддержать",
    "page.support.s_one": "Если у вас есть какие-либо вопросы или предложения, пожалуйста, не стесняйтесь обращаться ко мне по адресу",
    "page.support.s_two": "Или вы можете связаться со мной через",
  },
};

// Get All Elements
const navLinks = document.querySelectorAll(".nav-link");
const buttonsUp = document.querySelectorAll(".to_top");
const sectionUse = document.getElementById("use");
const sectionUseChildren = sectionUse.querySelectorAll("*");
const sectionAbout = document.getElementById("about");
const sectionAboutChildren = sectionAbout.querySelectorAll("*");
const sectionSupport = document.getElementById("support");
const sectionSupportChildren = sectionSupport.querySelectorAll("*");

// Set Translations
const setTranslation = () => {
  [
    navLinks,
    buttonsUp,
    sectionUseChildren,
    sectionAboutChildren,
    sectionSupportChildren,
  ].forEach((section) => {
    section.forEach((link) => {
      const translationKey = link.dataset.translationkey;
      if (translationKey) {
        link.innerText = translation[language][translationKey];
      }
    });
  });
};

setTranslation();

// Choose Current Language
if (!localStorage.getItem("language")) {
  localStorage.setItem("language", "en");
}

const handleLanguagePick = (lang) => {
  localStorage.setItem("language", lang);
  language = localStorage.getItem("language");
};

document.getElementById("language-picker").addEventListener("click", (e) => {
  const language = e.target.dataset.language;
  if (language) {
    handleLanguagePick(language);
    setTranslation();
  }
});
