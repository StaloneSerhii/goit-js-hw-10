import { list } from "./inde";

export function fetchCountries(name) {
    const URL_NAME = `https://restcountries.com/v3.1/name/${name}?capital,population,languages,flags.svg,name.official`;
    const filtr = {
        method: "GET"
     }
     
  return  fetch(URL_NAME, filtr).then(resp => {
    if (!resp.ok) {
        throw new Error(response.status);
      }
          return resp.json()
    })
}
