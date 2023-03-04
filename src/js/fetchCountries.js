const BASE_URL = 'https://restcountries.com/v3.1/name/';
const searchPrams = new URLSearchParams({
  fields: 'name,capital,population,flags,languages,',
});

export const fetchCountries = name => {
  return fetch(`${BASE_URL}${name}?${searchPrams}`).then(response => {
    if (response.status === 404) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
