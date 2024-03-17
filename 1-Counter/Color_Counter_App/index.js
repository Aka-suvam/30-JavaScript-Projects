let button =document.getElementById("add");
let value = document.getElementById("counter");
let btn=document.getElementById("sub");
let reset=document.getElementById("re");

let additon=0;

function change(add){
    if(add>0){
        value.style.color='blue';
    }
    else if(add<0){
        value.style.color ='red';
    }
    else {
        value.style.color='black'
    }
}

function chnagecol(){
additon++;
value.innerText=additon;
change(additon);
}
button.addEventListener("click",chnagecol);

let subt=()=>{
additon--;
value.innerText=additon;
change(additon);
}

btn.addEventListener("click",subt);

let re=()=>{
    additon=0;
    value.innerText=additon;
    change(additon);
    
}

reset.addEventListener("click",re);

