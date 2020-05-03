const primaryNav = [
  // contentIds from pages
  "about",
  "career",
  {
    title: "Blog",
    url: "https://sagri.blog/",
  },
  "contact",
];

const secondaryNav = [...primaryNav, "privacy"];
module.exports = {
  buildTime: new Date(),
  baseUrl: "https://sagri.co",
  name: "Sagri",
  email: "hello@sagri.co",
  twitter: "sagriearth",
  linkedin: "sagri-co-ltd",
  facebook: "SAgri-1831194850515104",
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
    en: "Sagri",
    ja: "Sagri株式会社",
  },
  description: {
    en:
      "We use satellite imagery data and soil testing technology to provide applications that optimize productivity for farmers.",
    ja:
      "弊社は衛星データと農業データを用いて、独自の技術で農学的に農業を最適化するアプリケーションの提供を行っております。",
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
