const primaryNav = [
  // ContentIds from pages
  "about",
  "blog",
  "contact",
];

const secondaryNav = [...primaryNav, "tools", "privacy"];
module.exports = {
  buildTime: new Date(),
  baseUrl: "https://valinor.earth",
  name: "Valinor Earth",
  email: "hello@valinor.earth",
  socialNetworks: {
    AngelList: "https://angel.co/company/valinor-earth/",
    LinkedIn: "https://www.linkedin.com/company/valinor-earth/",
    Twitter: "https://twitter.com/valinorearth",
  },
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
