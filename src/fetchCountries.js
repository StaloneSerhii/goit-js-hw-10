export function fetchCountries(name) {
    const URL_NAME = `https://restcountries.com/v2/name/${name}`;
console.log(URL_NAME);
  return  fetch(URL_NAME)
      .then(resp => {
            console.log(resp);
        if (!resp.ok) {
            throw new Error(resp.statusText)
        }
        return resp
    })
}
