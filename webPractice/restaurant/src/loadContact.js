export default function loadContact(){

    console.log('Contact loaded');
    
    document.getElementById("contact").style.backgroundColor = "rgba(26, 154, 126, 0.592)";

    let body = document.getElementById("content");

    let heading = document.createElement("h1");
    heading.innerText = "Contact Details"

    let fluf = document.createElement("p");
    fluf.innerText = "Insert contact details here";

    body.appendChild(heading);
    body.appendChild(fluf);
}