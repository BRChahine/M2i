/* const animaux = ["chat" , "chien" , "oiseaux" , "poules" , "canard", "lion" , "tortue"];
animaux[0] = "souris"

// Methode push
animaux.push("serpent");

// Methode pop
animaux.pop();

// Methode unshift
animaux.unshift("pigeon");

// Methode shift
animaux.shift(); */

// iteration dans les tableaux

/* for[i]
    for(let i = 0; i < animaux.length; i++){
    console.log(animaux[i])
}

 */

/* for of
 for (let animal of animaux ){
    console.log(animal)
} */

/* // foreach
animaux.forEach((animal, index) =>{
    console.log(index,animal);
}) */

// Tableau

/* const arr = ["Jean", "Victor", ["Tony",8,22], "Xavier"];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
} */

/* const tab = [["Sarrah", "Tania"], ["Rose","Viviane"], ["Eric","Rudolph"], ["Marc", "Andre"]];

for(let i = 0; i < tab.length; i++){
    for(let j = 0; j < tab[i].length; j++){
        console.log(tab[i][j]);
    }
}

for (const name of tab){
    for(const surname of name){
        console.log(surname)
    }
}
//console.log(tab) */

// .map = retourne un tableau
/* 
const isNumber = [2,4,6,8,10];
isNumber.map(num =>{
    console.log(num * 2);
}) */

/* // Methode .filter
const heights = [160, 175, 184,193,205,237,365,386,499];
const above205 = heights.filter(height =>{
    return height > 205;
})
console.log(above205); */

//const animaux = ["chat" , "chien" , "oiseaux" , "poules" , "canard", "lion" , "tortue"];
//console.log(animaux.sort().reverse());
//IndexOf
//console.log(animaux.indexOf("poules"))
//Includes
//console.log(animaux.includes("chat"))

/* const numbers2 = [75,23,95,16,59,65,96];
const mergeTab = numbers.concat(numbers2);
console.log(mergeTab);
//console.log(numbers.sort().reverse())
 */
// Methode flat
/* const numbers = [55,73,12,94,[75,[23,95,16,59],65,96],98,21,43];
console.log(numbers.flat(2));
 */

/* //Methode split
let string = "abcd";
console.log(string.split(""))

//methode join
let stringTab = ["y", "v", "z"];
console.log(stringTab.join(""))

//Methode slice
const animaux = ["chat" , "chien" , "oiseaux" , "poules" , "canard", "lion" , "tortue"];
console.log(animaux.slice(2,6)) */

//exo 1

const tab = ["Paul", "Jane", "Dupont", "Fred", "Elena"];
tab.pop()
tab.shift()

//exo 2

const numbers = [85,93,83,47,25,45,20,46,33,54,11];
//console.log(numbers.sort() .reverse());

//exo 3

const tab2 = ["Paul", "Jane", "Dupont", "Fred", "Elena"];
tab2[0] = "Marc"
//console.log(tab2)


//exo 4

const values = ["","a","xavier",false,8,0,12,NaN,true];

const vrai = values.filter(value => value);
//console.log(vrai)

//exo 5

const names = ["Adrien", "paul", "Victor", "Alexandre", "Aurelie", "Antoine"];
for (const surname of names){
    if(surname[0]== "A" && surname.length >= 5){
       // console.log(surname)
    }
}

//exo 6
const names2 = ["André", "Jean", "Victor", [18,27,45,29], "Andréa"];
for (const surname2 of names2){
    //console.log(surname2)
}
    for(let i = 0; i < names2.length; i++){
    //console.log(names2[i])
}

//exo 7
const names3 = ["André", "Jean", "Victor", "Andréa"];
//console.log(names3.join("-"))

// exo 8
const isNumber = [4,32,7,8];
isNumber.map(num =>{
    //console.log(num + "€");
})

// exo 9 
const tabM = ["f",5,["d",3,["a",0],["b",1],["c",2]],["e",4],"g",6]
//console.log(tabM[2][3]);

// exo 10 

const names4 = ["Adrien", "paul", "Victor", "Alexandre", "Aurelie", "Antoine"];
names4.forEach((nom,index)=>{
   //console.log(index,nom);
})

/* function nom (arguments){
    code
} */

/* function sayHello(){
    console.log("Bonjour");
}
sayHello() */

/* function sayHello(name){
    console.log(`Bonjour ${name}`);
}
sayHello("John");
sayHello("Fred"); */

/* const sayHello = (name)=>{
    console.log(`Bonjour ${name}`);
}
sayHello("Garry") 

const calc = (a,b)=>{
    return a + b;
}

console.log(calc(10,5));
*/
/* const major = (old)=>{
    if (old < 18){
        return "Mineur";
    }
    else{
        return "Majeur";
    }
}
console.log(major(20)); */

/**********************DATE*************************** */

/* const dateInfo = Date.now();
console.log(dateInfo); */

const dateInfo2 = new Date();
//console.log(dateInfo2);
//console.log(dateInfo2.toLocaleDateString())

let user = {
    name : "John",
    age: 38,
    "like birds" : true
}
console.log(user["like birds"])