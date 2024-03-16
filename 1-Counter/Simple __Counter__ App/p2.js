

let valuebtn=document.getElementById("value");
let addbtn=document.getElementById("add") ;
let subbtn= document.getElementById("sub"); 
let rest= document.getElementById("reset") ;
let counter =0;


addbtn.addEventListener('click',()=>{
    counter++;
    valuebtn.innerHTML=counter;
});

subbtn.addEventListener("click",()=>{
    counter-=1;
    valuebtn.innerHTML=counter
})

rest.addEventListener('click',()=>{
    counter=0;
    valuebtn.innerHTML=counter;
})
/*
function add(){
    
}*/

