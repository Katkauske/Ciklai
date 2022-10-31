//Sukurkite funkciją, kuri nuskaito vartotojo įvedamus skaičius iki kol jis įveda neigiamą skaičių. 
//Grąžinkite tų skaičių sumą. Taigi, jei vartotojas iš pradžių įvedė 3, tai jį pridedame prie sumos 
//(pradedame sumą nuo 0, tai dabar bus 3), jeigu toliau įvedė 7, tai pridedame prie sumos (jau 10), 
//jeigu toliau įvedė 14, pridedame (jau suma 24), jeigu įvedė -1, ciklą užbaigiame ir to skaičiaus 
//nepridedame, tada galiausiai grąžiname galutinį rezultatą, šiuo atveju: 24


console.log(grazintiTeigiamuSuma())

function grazintiTeigiamuSuma(){
    let suma = 0;
    let skaicius = 0;
    while  ( skaicius >= 0 ) {
    skaicius = +prompt("Iveskite skaiciu");
    suma += skaicius;
}
    return suma;
}
