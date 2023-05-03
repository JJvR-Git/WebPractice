export default function loadIndex(){
    
    console.log('Home loaded');

    document.getElementById("home").style.backgroundColor = "rgba(26, 154, 126, 0.592)";

    let body = document.getElementById("content");

    let heading = document.createElement("h1");
    heading.innerText = "Fancy Fancy Food"

    let fluf = document.createElement("p");
    fluf.innerText = "This might just be the fanciest food you ever did see";

    body.appendChild(heading);
    body.appendChild(fluf);
}