const primaryNav = [
  // ContentIds from pages
  "about",
  "blog",
  "contact",
];

const secondaryNav = [...primaryNav, "privacy"];
module.exports = {
  buildTime: new Date(),
  baseUrl: "https://valinor.earth",
  name: "Valinor Earth",
  email: "hello@valinor.earth",
  twitter: "valinorearth",
  // Linkedin: "",
  // facebook: "",
  locales: [
    {
      code: "en",
      label: "English",
    },
    {
      code: "ja",
      label: "日本語",
    },
  ],
  title: {
    en: "Valinor Earth",
    ja: "Valinor Earth",
  },
  primaryNav,
  secondaryNav,
  textStrings: {
    "Learn more": {
      en: "Learn more",
      ja: "もっと詳しく知る",
    },
  },
};
