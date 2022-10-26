//Sukurkite funkciją, kuri gauna tris parametrus: tekstas, pradzia ir pabaiga. 
//Funkcija turėtų grąžinti tekstinę reikšmę nuo pradzia raidės iki pabaiga raidės iš tekstas. 
//T.y., jeigu tekstas = "aritmetika", pradzia = 3, pabaiga = 6, tai grąžintų 3, 4 ir 5 raides pagal indeksą: 
//tme, arba kad geriau įsivaizduoti: ari tme tika. Nenaudojant slice() funkcijos.
let tekstas = "kompiuteris";
let pradzia = 0;
let pabaiga = 2;

console.log(raidziuGrazinimas(tekstas,pradzia,pabaiga));

function raidziuGrazinimas(tekstas,pradzia,pabaiga){
    let naujas = "";
    for (let i = pradzia; i < pabaiga; i++) {
       grazinti = naujas += tekstas[i]
    }
    console.log(grazinti)
}