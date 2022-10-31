//Sukurkite funkciją, kuri gauna vieną parametrą n, funkcija turėtų grąžinti n faktorialą. T.y., visų skaičių nuo 1 iki n sandaugą.

let n = +prompt("Iveskite skaiciu, kurio faktoriala norite gauti");
alert(skaiciuSandauga(n));

function skaiciuSandauga(n){
    let suma = 1;
    for (let i = 0; i < n; i++) {
        suma = n * (n*n);     
    }
    return suma;
}