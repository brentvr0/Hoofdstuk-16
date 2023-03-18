const setup = () => {
    let element = document.querySelectorAll("p")[0];
    y = element.childNodes[0];
    element.removeChild(y);
    let text = document.createTextNode("Good Job!");
    element.appendChild(text);
}
window.addEventListener("load", setup);