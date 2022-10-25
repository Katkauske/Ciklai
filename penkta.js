//Sukurkite funkciją, kuri gauna vieną parametrą skaicius ir grąžina true, jeigu tas skaičius yra lyginis ir false, 
//jeigu nelyginis. Toliau, sukurkite sekančią funkciją, 
//kuri gauna du parametrus pradzia ir pabaiga ir išveda visus lyginius skaičius tame diapozone.

let skaicius = +prompt("Iveskite skaiciu ir suzinosite ar ivestas skaicius yra lyginis.");
alert(arLyginis(skaicius));
let pradzia = 10;
let pabaiga = 100;
console.log(lyginiai(pradzia,pabaiga));

function arLyginis(skaicius){
    if (skaicius % 2 ) {
        return true;
    }
    else 
        return false;
}

function lyginiai(pradzia, pabaiga){
    for ( let i = pradzia; i < pabaiga; i+=2){
    console.log(i);
    }
}

