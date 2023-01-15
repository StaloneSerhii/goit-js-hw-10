import { list } from "./inde";

export function fetchCountries(name) {
    const URL_NAME = `https://restcountries.com/v3.1/name/${name}?capital,population,languages,flags.svg,name.official`;

     
    return fetch(URL_NAME).then(resp => {
      if (!resp.ok) {
        throw new Error(resp.status);
      }
          return resp.json()
    })
}
