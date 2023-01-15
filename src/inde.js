import _ from 'lodash';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const inputValue = document.querySelector("#search-box")
export const list = document.querySelector(".country-list")
const divRend = document.querySelector(".country-info")
const dataInput = {
    nameCity: ''
};

inputValue.addEventListener("input", _.debounce(valueData, DEBOUNCE_DELAY, {leading: false}))

function valueData(e) {
cleanData()
    dataInput.nameCity = e.target.value
    const { nameCity } = dataInput;
   const fixedInput = nameCity.trim()

     if(fixedInput === ''){
                
      return 
    }

        fetchCountries(nameCity).then(nameCity => {
            if (nameCity.length === 1) {
       
                const { capital, name, languages, population, flags } = nameCity[0]
                const keyLanguage = Object.values(languages)

                const showCity = `<span  style="list-style: none;/* display:flex;/* margin: 0px; */align-items: center;"><img style = "margin: 10px" 
        src="${flags.png}" alt="${name.common}" width = 50px> ${name.official}</span>
        <h3>Capital: <span style = "font-weight: 400">${capital}</span> </h3>
        <h3>Population: <span style = "font-weight: 400">${population}</span>
        </h3><h3>Language: <span style = "font-weight: 400">${keyLanguage}</span></h3>`
                
                divRend.innerHTML += showCity
        

            } else if (nameCity.length < 10 && nameCity.length >= 2) {
        
                
                for (const city of nameCity) {
                    const { name, flags } = city
                    const showCitys = `<li style="list-style: none;"> <img src="${flags.png}" alt="${name.common}" width = 30px style = "margin-right: 10px"><span style="font-weight: 400;font-size: 15px;">${name.official}</span></li>`
           
                    list.innerHTML += showCitys

                }
            } else {
                Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
             
            }
        })
            .catch(error => {
                Notiflix.Notify.failure("Oops, there is no country with that name");
              
            })
    
    function cleanData() {
        divRend.innerHTML = ''
        list.innerHTML = ""
    }
} 















