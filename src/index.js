import _ from 'lodash';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const inputValue = document.querySelector("#search-box")

inputValue.addEventListener("input", _.throttle(valueData, DEBOUNCE_DELAY, {leading: false}))


function valueData(e) {

    console.log(e.data);
   fetchCountries(e.data)
    .then(city => console.log(city))
} 














