const URL = "https://restcountries.com/v3.1/";

export const getCountries = async (userSearch = null, region = null) => {
  let url;
  if (!userSearch.length && !region) {
    url = URL + "all";
  } else if (userSearch.length) {
    url = URL + "name/" + userSearch;
  } else if (region) {
    url = URL + "region/" + region;
  }
  const res = await fetch(url);
  return res.json();
};

export const getCountryDetails = async (code) => {
  const res = await fetch(`${URL}alpha/${code}`);
  return res.json();
};
