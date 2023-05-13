// Select the :root pseudo-class
const root = document.documentElement;
var show = document.querySelector("#show");
var range = document.querySelector("#range");
var container = document.querySelector(".earth_container");

/**
 * fillEarth 
 * 
 * gives the percentage of carcentage of carbon
 * 
 */
const fillEarth = () => {
    root.style.setProperty('--circle-fill', range.value + "%");
    show.innerHTML = range.value + "%"
    //root.style.setProperty('--show-percentage', range.value + "%");


}


const app = () => {
    range.addEventListener("input", fillEarth);
}
app();


