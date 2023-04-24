import loadIndex from "./loadIndex.js";

import './style.css';

import Ribon from "../assets/ribon.webp";

let ribon = new Image();
ribon.src = Ribon;
ribon.setAttribute('id', 'ribon');

document.getElementById("ribonCon").appendChild(ribon);

loadIndex();

