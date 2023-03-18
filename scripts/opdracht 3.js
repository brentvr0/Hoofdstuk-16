const create = () => {
    let par = document.createElement("p");
    let t = document.createTextNode("This is a paragraph");
    par.appendChild(t);
    document.getElementById("myDIV").appendChild(par);
}
const setup = () => {
    document.getElementById("btnClick").addEventListener("click", create);
}
window.addEventListener("load", setup);