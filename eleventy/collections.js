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

  if (a.data.order < b.data.order) {
    return 1;
  }

  return 0;
};

module.exports = {
  products(collection) {
    return collection
      .getAll()
      .filter(collectionFilterByFn("tags", "products"))
      .sort(sortByOrderFn);
  },

  jaPosts(collection) {
    return collection
      .getAll()
      .filter(collectionFilterByFn("tags", "posts"))
      .filter(collectionFilterByFn("locale", "ja"))
      .sort(collectionSortFn);
  },

  enPosts(collection) {
    return collection
      .getAll()
      .filter(collectionFilterByFn("tags", "posts"))
      .filter(collectionFilterByFn("locale", "en"))
      .sort(collectionSortFn);
  },

  orderedTeam(collection) {
    return collection
      .getAll()
      .filter(collectionFilterByFn("tags", "team"))
      .sort(sortByOrderFn);
  },

  orderedCoFounders(collection) {
    return collection
      .getAll()
      .filter(collectionFilterByFn("tags", "co-founder"))
      .sort(sortByOrderFn);
  },

  orderedAdvisors(collection) {
    return collection
      .getAll()
      .filter(collectionFilterByFn("tags", "advisor"))
      .sort(sortByOrderFn);
  },
};
