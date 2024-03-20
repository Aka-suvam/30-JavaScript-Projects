//acces menu
//addcss to ul 
const btn=document.querySelector(".hambergur");
const nav=document.querySelector(".link");


btn.addEventListener("click",()=>{
    //console.log("click");
    //console.log(nav.classList);
   
    if(nav.classList[0]==='link'){
        nav.classList.remove("link");
        nav.classList.add('show_ul');
    }
    else {
        nav.classList.remove("show_ul");
        nav.classList.add("link");
    }

})