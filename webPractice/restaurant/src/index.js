import loadIndex from "./loadIndex.js";
import loadMenu from "./loadMenu.js";
import loadContact from "./loadContact.js";
import clear from "./clear.js";

import './style.css';

loadIndex();

document.getElementById("home").addEventListener("click", homeClick);
document.getElementById("menu").addEventListener("click", menuClick);
document.getElementById("contact").addEventListener("click", contactClick);

function homeClick(){
    console.log('Home clicked');
    clear();
    loadIndex();
}

function menuClick(){
    console.log('Menu Clicked');
    clear();
    loadMenu();
}

function contactClick(){
    console.log('Contact Clicked');
    clear();
    loadContact();
}