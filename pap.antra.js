//Sukurkite funkciją, kuri gauna vieną parametrą tekstas ir grąžina iš viso teksto išrinktus skaičius kaip skaitinę reikšmę. 
//Taigi, jeigu tekstas = "kr14sadea13efrg2da", tai funkcija turėtų grąžinti skaičių: 14132


let tekstas = "kr14sadea13efrg2da";
console.log(grazinimas(tekstas));

function grazinimas(tekstas){
    let i = 0;
    let naujas = "";   
    while ("0123456789".includes(tekstas[i])) {
        naujas += tekstas[i];      
     i++;         
    }    
    return naujas;
}