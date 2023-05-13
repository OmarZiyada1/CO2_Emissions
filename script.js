// Select the :root pseudo-class
const root = document.documentElement;
var show = document.querySelector("#show");
var range = document.querySelector("#range");


range.addEventListener("input",()=>{
    show.innerHTML=range.value + "%"

    root.style.setProperty('--circle-fill', range.value+"%");
})

