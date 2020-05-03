const collectionSortFn = function (a, b) {
  return b.date - a.date;
};

const collectionFilterByFn = (key, value) => {
  return (obj) => {
    if (Array.isArray(obj.data[key])) return obj.data[key].includes(value);
    return obj.data[key] === value;
  };
};

const sortByOrderFn = function (a, b) {
  if (a.data.order > b.data.order) {
    return -1;
  }
  if (a.data.order > b.data.order) {
    return 1;
  }

  return 0;
};

module.exports = {
  products: function (collection) {
    return collection
      .getAll()
      .filter(collectionFilterByFn("tags", "products"))
      .sort(sortByOrderFn);
  },

  jaPosts: function (collection) {
    return collection
      .getAll()
      .filter(collectionFilterByFn("tags", "posts"))
      .filter(collectionFilterByFn("locale", "ja"))
      .sort(collectionSortFn);
  },

  enPosts: function (collection) {
    return collection
      .getAll()
      .filter(collectionFilterByFn("tags", "posts"))
      .filter(collectionFilterByFn("locale", "en"))
      .sort(collectionSortFn);
  },

  orderedTeam: function (collection) {
    return collection
      .getAll()
      .filter(collectionFilterByFn("tags", "team"))
      .sort(sortByOrderFn);
  },
};
