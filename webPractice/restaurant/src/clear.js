export default function clear(){

    console.log('content Cleared');

    document.getElementById("home").style.backgroundColor = "rgba(0, 234, 255, 0.573)";
    document.getElementById("menu").style.backgroundColor = "rgba(0, 234, 255, 0.573)";
    document.getElementById("contact").style.backgroundColor = "rgba(0, 234, 255, 0.573)";

    document.getElementById("content").innerHTML = "";
}