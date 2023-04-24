import Icon from '../assets/icon.jpg';

export default function loadIndex(){
    
    let body = document.getElementById("content");

    let heading = document.createElement("h1");
    heading.innerText = "Fancy Fancy Food"

    let icon = new Image();
    icon.src = Icon;
    icon.setAttribute('id', 'icon');

    let fluf = document.createElement("p");
    fluf.innerText = "This might just be the fanciest food you ever did see";

    body.appendChild(heading);
    body.appendChild(icon);
    body.appendChild(fluf);
}