const initialize = () =>{
    let btnSave = document.getElementById("btnSave");
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    update();
    btnSave.addEventListener("click", saveSwatch);
};
const saveSwatch = () =>{
    let swatchComponents = document.getElementById("swatchComponents");
    let swatch = buildSwatchComponent();
    swatchComponents.appendChild(swatch);
};
const configureSwatch = (swatch) =>{
    let red = document.getElementById("sldRed").value;
    swatch.setAttribute("data-red", red);
    let green = document.getElementById("sldGreen").value;
    swatch.setAttribute("data-green", green);
    let blue = document.getElementById("sldBlue").value;
    swatch.setAttribute("data-blue", blue);
    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";
};
const buildSwatchComponent = () =>{
    let swatch = document.createElement("div");
    let btnDelete = document.createElement("input");
    swatch.className = "swatch";
    configureSwatch(swatch);
    swatch.addEventListener("click", setColorPickerFromSwatch);
    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("value", "X");
    btnDelete.addEventListener("click", deleteSwatch);
    swatch.appendChild(btnDelete);
    return swatch;
};
const setColorPickerFromSwatch = (event) =>{
    let swatch = event.target;
    document.getElementById("sldRed").value = swatch.getAttribute("data-red");
    document.getElementById("sldGreen").value = swatch.getAttribute("data-green");
    document.getElementById("sldBlue").value = swatch.getAttribute("data-blue");
    update();
};
const deleteSwatch = (event) =>{
    let swatchComponents = document.getElementById("swatchComponents");
    let button = event.target;
    let swatch = button.parentNode;
    swatchComponents.removeChild(swatch);
    event.stopPropagation();
};
const update = () =>{
    let red = document.getElementById("sldRed").value;
    document.getElementById("lblRed").innerHTML = red;
    let green = document.getElementById("sldGreen").value;
    document.getElementById("lblGreen").innerHTML = green;
    let blue = document.getElementById("sldBlue").value;
    document.getElementById("lblBlue").innerHTML = blue;
    let swatch = document.getElementById("swatch");
    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";
};
window.addEventListener("load", initialize);