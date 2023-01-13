import _ from 'lodash';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const inputValue = document.querySelector("#search-box")
const dataInput = {
    nameCity: ''
};

inputValue.addEventListener("input", _.debounce(valueData, DEBOUNCE_DELAY, {leading: false}))


function valueData(e) {

    dataInput.nameCity = e.target.value
    const { nameCity } = dataInput;
 

    if (nameCity.length > 2) {

        fetchCountries(nameCity).then(nameCity => {onFilter(nameCity[0])})
                 
    } else {
        console.log("low simbols");
    }

    function onFilter(nameCity) {
        const keys = Object.keys(nameCity.languages)
        console.log(nameCity.name.common)
        console.log(nameCity.capital[0])
        console.log(nameCity.population)
        for (const key of keys) {
            console.log(nameCity.languages[key])
        }
    }
} 















