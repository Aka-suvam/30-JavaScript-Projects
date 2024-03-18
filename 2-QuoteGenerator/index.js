let button = document.querySelector(".btn");
let quote = document.querySelector(".quote");
let person= document.querySelector(".person");

const quotes = [{
    quote:`"Do one thing every day that scares you."`,
    person: `Eleanor Roosevelt`,
},
{
    quote:`"We are what we pretend to be, so we must be careful about what we pretend to be."`,
    person: `Kurt Vonnegut`,
    
},
{
    quote:`“He's like a drug for you, Bella.”`,
    person: `Stephenie Meyere`,
},
{
    quote:`“More smiling, less worrying. More compassion, less judgment. More blessed, less stressed. More love, less hate.”`,
    person: `Roy T. Bennett`,
},

{
    quote:`"our greatest weakness lies in giving up. the most certain way to succeed is always to try just one more time."`,
    person: `thomas a edison`,
}

];

button.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML=quotes[random].quote;
    person.innerHTML=quotes[random].person; 
   console.log(quotes[random].quote);


});



