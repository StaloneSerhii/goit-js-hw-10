import _ from 'lodash';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const inputValue = document.querySelector("#search-box")
export const list = document.querySelector(".country-list")
const dataInput = {
    nameCity: ''
};

inputValue.addEventListener("input", _.debounce(valueData, DEBOUNCE_DELAY, {leading: false}))

function valueData(e) {

    dataInput.nameCity = e.target.value
    const { nameCity } = dataInput;

    fetchCountries(nameCity.trim()).then(nameCity => 

       { 
        
        if(nameCity.length === 1) {
       
        const {capital,name,languages,population,flags} = nameCity[0]
        const keyLanguage = Object.values(languages)

        const showCity =  `<li style = "list-style: none"><h2 style="display:flex;/* margin: 0px; */align-items: center;"><img style = "margin: 10px" 
        src="${flags.png}" alt="${name.common}" width = 50px> ${name.official}</h2>
        <h3>Capital: <span style = "font-weight: 400">${capital}</span> </h3>
        <h3>Population: <span style = "font-weight: 400">${population}</span>
        </h3><h3>Language: <span style = "font-weight: 400">${keyLanguage}</span></h3></li>`
        list.innerHTML =''
        list.innerHTML += showCity
        

       } else if (nameCity.length < 10 && nameCity.length >= 2) {
        
        list.innerHTML =''
        for (const city of nameCity) {
            const {name, flags} = city
            const showCitys = `<h2 style="font-weight: 400;font-size: 15px;"><img src="${flags.png}" alt="${name.common}" width = 30px style = "margin-right: 10px">${name.official}</h2>`
           
         list.innerHTML += showCitys

        } 
        } else {
            Notiflix.Notify.info("Too many matches found. Please enter a more specific name.") 
        } })
        .catch(error => {Notiflix.Notify.failure("Oops, there is no country with that name");
    list.innerHTML=''})
} 















