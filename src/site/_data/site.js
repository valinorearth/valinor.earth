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
    Crunchbase: "https://www.crunchbase.com/organization/valinor-earth",
    Facebook: "https://www.facebook.com/ValinorEarth",
    LinkedIn: "https://www.linkedin.com/company/valinor-earth/",
    Twitter: "https://twitter.com/valinorearth",
  },
  mailchimp: {
    submissionUrl:
      "https://earth.us17.list-manage.com/subscribe/post?u=06016756bccc86ac6fbfe64b9&amp;id=3b2451a8f6",
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
