const setup = () => {
    let item = document.getElementsByTagName('li');
    for (let i = 0; i < item.length; i++){
        item[i].setAttribute("class", "listItem");
    }
    let myPic = document.createElement('img');
    myPic.setAttribute("src", `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMY6vszJe0KnZq9RMy35_Kwy5oDLufr1IyeQ&usqp=CAU`)
    myPic.setAttribute("alt", "olifant");
    document.querySelector("body").appendChild(myPic);
}
window.addEventListener("load", setup);