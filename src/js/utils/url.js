export const getSearchValue = (param) => {
  const regex = new RegExp(`${param}=([A-Za-z0-9%]*)(&|$)`);
  const { search } = window.location;
  const result = search.match(regex);
  if (result && result.length >= 2) {
    return decodeURI(result[1]);
  }
};
