//Sukurkite funkciją, kuri gauna du parametrus: pradzia ir pabaiga ir išveda kas trečią skaičių tarp tų reikšmių.
//Patobulinkite tą funkciją, jog ji gauna d parametrą, kur d yra kas kelintą skaičių išvesti. jei d = 5, tai kas penktą skaičių.

let pradzia = 10
let pabaiga = 34
let d = 2
console.log(kasTrecia(pradzia,pabaiga,d))


function kasTrecia(pradzia,pabaiga,d){
    for (let i = pradzia; i < pabaiga; i += d) {
        console.log(i);
    }
}


    