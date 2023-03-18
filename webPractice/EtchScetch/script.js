let con = document.getElementById("container");

function genGrid(n){
    for(let i = 0; i < (n * n); i++){
        let newDiv = document.createElement("div");

        newDiv.classList.add("box");

        newDiv.style.width = `${100/n}%`;
        newDiv.style.paddingBottom = `${100/n}%`;
        newDiv.style.backgroundColor = "rgb(255, 255, 255)";

        con.appendChild(newDiv);
    }

    let boxes = document.getElementsByClassName("box");

    for(let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener("mouseover", function(){
            boxes[i].style.backgroundColor =  genCol(boxes[i].style.backgroundColor);
        });
    }
}

genGrid(4);

let genBut = document.getElementById("button");

genBut.addEventListener("click", function(){
    let grid = getNum();

    con.innerHTML = "";

    genGrid(grid);
});

function getNum(){
    let num = prompt("Enter a grid number under 100")

    if(num > 100 || num < 1){
        num = getNum();
    }

    return num;
}

function genCol(col){
    
    let rgb = col.substring(4, col.length - 1).replace(/ /g, '').split(",");

    if(rgb[0] == 255 || rgb[1] ==255  || rgb[2] == 255 ){
        rgb = [Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)]
    }
    else if(rgb[0] >= 0 || rgb[1] >= 0  || rgb[2] >= 0 ){
        rgb = [Math.floor(rgb[0] * 0.7), Math.floor(rgb[1] * 0.7), Math.floor(rgb[2] * 0.7)]
    }
    console.log(rgb);
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`

    console.log(rgb);
}
