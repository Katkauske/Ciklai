//Sukurkite funkciją, kuri gauna du parametrus: zodis ir n. Funkcija turėtų išvesti zodis reikšmę į konsolę n kartų.

let zodis = "mokslai";
let n = 5;
isvedimas(zodis,n);

function isvedimas(zodis, n)  {
    for (let i = 0; i < n; i++) {
        console.log(zodis);       
    }
    
}
