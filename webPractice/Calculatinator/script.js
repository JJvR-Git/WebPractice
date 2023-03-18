let disp = "";

let botscr = document.getElementById("botscr");

let allButs = Array.from(document.getElementsByClassName("but"));

let prevAwns;

// screen and mouse use
for(let i = 0; i < allButs.length; i++){
    allButs[i].addEventListener("click", () => {

        if(botscr.textContent != ""){
            clear();
        }

        let sim = allButs[i].textContent;

        switch(allButs[i].textContent){
            case "CLR": 
                clear();
            break;

            case "DEL": 
                disp = disp.slice(0, disp.length - 1);
                checkDots(); 
            break;

            case "=": 
                process();
            break;

            case "ANS": 
                disp += prevAwns;
            break;

            default:
                disp += sim;
                checkDots(); 
            break;
        }
        display();
    })
}

// key bindings
document.addEventListener("keypress", (e) => {
    switch(e.key){
        case "Delete": 
            clear();
        break;

        case "b": 
            disp = disp.slice(0, disp.length - 1);
            checkDots(); 
        break;

        case "=": 
            process();
        break;

        case "Enter": 
            process();
        break;

        case "p": 
            disp += prevAwns;
        break;

        case "*": 
            disp += " x ";
        break;

        default:
            if( !isNaN(e.key - 0) || e.key == "."){
                disp += e.key;
            }
            else if(e.key == "/" || e.key == "x" || e.key == "+" || e.key == "-"){
                disp += " " + e.key + " ";
            }
            checkDots();     
        break;
    }
    display();
} )

function display(){
    document.getElementById("topscr").textContent = disp;
}

function clear(){
    disp = "";
    document.getElementById("botscr").textContent = "";
    display()
}

function checkDots(){
    let oprs = disp.split(" ");

    for( let i = 0; i < oprs.length; i++){
        let dots = 0;

        for(let j = 0; j < oprs[i].length; j++){
            if(oprs[i].charAt(j) == "."){
                dots++;
            }
        }
        if(dots > 1){
            botscr.textContent = "No more than 1 dot per number";
        }
        else {
            botscr.textContent = "";
        }

        if(oprs[i].charAt(0) == "."){
            oprs[i].splice(0, "0")
        }
    }

}

function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function divi(a, b){
    return a/b;
}

function process(){
    let opr = disp.split(" ");
    console.table(opr);
    let awns;

    for(let i = 0; i < opr.length; i++){
        switch(opr[i]){
            case "x": 
            break;

            case "/": 
            break;

            case "+": 
            break;

            case "-": 
            break;

            default: 
                opr[i] = parseFloat(opr[i]);
        }

    }

    awns = opperate(opr);

    if(typeof awns !== 'string'){
        prevAwns = awns;
    }
    botscr.textContent = awns;
}

function opperate(equ){

    for(let i = 0; i < equ.length; i++){
        if(equ[i] == "/"){
            if(equ[i + 1] == 0){
                return "you can not divide by 0";
            }
            let temp = divi(equ[i-1], equ[i+1]);
            equ.splice(i-1, 3, temp);
            i = 0;
        }
    }

    for(let i = 0; i < equ.length; i++){
        if(equ[i] == "x"){
            let temp = mult(equ[i-1], equ[i+1]);
            equ.splice(i-1, 3, temp);
            i = 0;
        }
    }

    for(let i = 0; i < equ.length; i++){
        if(equ[i] == "+"){
            let temp = add(equ[i-1], equ[i+1]);
            equ.splice(i-1, 3, temp);
            i = 0;
        }
    }

    for(let i = 0; i < equ.length; i++){
        if(equ[i] == "-"){
            let temp = sub(equ[i-1], equ[i+1]);
            equ.splice(i-1, 3, temp);
            i = 0;
        }
    }

    return equ[0];
}