function checkPassword(){

    let pw1 = document.getElementById("pWord").value;

    let pw2 = document.getElementById("pWord2").value;

    if(pw1 === pw2){
        return
    }
    else{
        document.getElementById("notMatch").style.display = "block";
    }
}

let ins = document.getElementsByClassName("inBox");
let insArr = Array.from(ins);

console.log(insArr);

function checkValid(){
    let valid = 0;

    for(let i = 0; i < insArr.length; i++){
        if(!insArr[i].validity.valid){
            valid++;
        }
    }

    if(valid == 0){
        document.getElementById("reqFields").style.display = "none";
    }
    else document.getElementById("reqFields").style.display = "block";
}