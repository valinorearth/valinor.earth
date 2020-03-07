module.exports = {
  buildTime: new Date(),
  baseUrl: "https://sagri.co",
  name: "Sagri",
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
    ja: "SAgri株式会社",
  },
  description: {
    en:
      "We use satellite data and agricultural data to provide applications that optimize agriculture agriculturally with our proprietary technology.",
    ja:
      "弊社は衛星データと農業データを用いて、独自の技術で農学的に農業を最適化するアプリケーションの提供を行っております。",
  },
  primaryNav: [
    // contentIds from pages
    "company",
    "blog",
  ],
};
