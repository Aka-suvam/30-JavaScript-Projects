window.addEventListener("keydown",myfunction);

function myfunction(e){
    //console.log(e.keyCode);//keyCode
   
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

   console.log(audio);
};
