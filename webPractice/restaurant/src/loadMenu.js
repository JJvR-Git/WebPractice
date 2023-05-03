export default function loadMenu(){
    
    console.log('Menu loaded');

    document.getElementById("menu").style.backgroundColor = "rgba(26, 154, 126, 0.592)";

    let body = document.getElementById("content");

    let heading = document.createElement("h1");
    heading.innerText = "Menu"

    let fluf = document.createElement("p");
    fluf.innerText = "Many Menu Items";

    body.appendChild(heading);
    body.appendChild(fluf);
}