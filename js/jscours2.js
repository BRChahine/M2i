window.addEventListener('load',()=>{


const check = document.querySelector('#single');
const situation = document.createElement('p');
check.addEventListener('change', btnCheck);

function call(){
    situation.textContent = "Vous êtes libre";
    check.nextElementSibling.append(situation);
}

function btnCheck(){
    if(check.checked){
        call();
    }
    else{
        situation.textContent = "";
    }
}

const image = document.querySelector('img');

setTimeout(function(){
    image.style.display = "none";
} , 5000)



const item = document.querySelectorAll('li');

setInterval(function(){
const hours = new Date().toLocaleTimeString();
item[0].textContent = hours;
},100)


const test = document.querySelector('form')
const nom = document.createElement('p');
function sousnom(){
   nom.textContent = "Votre nom"
   test.nextElementSibling.append(nom)

}
sousnom()

})