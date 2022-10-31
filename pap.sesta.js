//Sukurkite funkciją, kuri gauna vieną parametrą x ir grąžina true, jeigu x yra pirminis skaičius ir false, jeigu ne.
// Pirminis skaičius yra tas, kuris dalinasi tik iš 1 ir savęs.

x = +prompt("Iveskite skaiciu:");
alert(arPirminis(x))

function arPirminis(x){
    if ( (x > 1 ) && (x % x == 0) && (x % 1 == 0)){
        return true;
    }
    else{
        return false
    }
}