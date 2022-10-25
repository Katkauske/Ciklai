//Sukurkite funkciją, 
//kuri gauna du parametrus pradzia ir pabaiga ir apskaičiuoja visų skaičių tame diapozone sandaugą ir ją grąžina
let pradzia = 2;
let pabaiga = 10;
console.log(sandaugosSuma(pradzia,pabaiga));

function sandaugosSuma(pradzia,pabaiga){
    let suma = 1;
    for ( let i = pradzia; i < pabaiga; i++){
      suma *= i;
    }
    return suma;
} 