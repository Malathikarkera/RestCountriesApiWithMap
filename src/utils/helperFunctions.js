export function getDataFromLocalStorage(key = "countries") {
  let data = localStorage.getItem(key);
  return JSON.parse(data);
}

export const getSpecificCountryFromLocalStorage = (key, filter) => {
  const data = getDataFromLocalStorage(key).filter(
    (data) => data.alpha3Code === filter
  );
  return data;
};
