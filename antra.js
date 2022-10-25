//Sukurkite funkciją, kuri gauna du parametrus: pradzia ir pabaiga ir suskaičiuoja bei grąžina visų skaičių tame diapozone sumą.
//Patobulinkite šią funkciją, jog ji gauna d parametrą, kuris nusako kas kelis vienetus didėja skaičių seka, t.y. jeigu 
//d = 3, tai skaičiai didėja kas 3: 8, 11, 14, 17

let pradzia = 0;
let pabaiga = 112;
let d = 2;


console.log(sumosGrazinimas(pradzia,pabaiga,d))

function sumosGrazinimas(pradzia,pabaiga,d){
    let suma = 0;
    for (let i = pradzia; i < pabaiga; i += d) {
        suma += i;  
        console.log(suma)   
    }
    return suma
}
