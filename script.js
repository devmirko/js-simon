// crea un array che genera 5 numeri casuali
var numeriDaIndovinare = []


while (numeriDaIndovinare.length < 5) {
    const numeroRan = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    if (!numeriDaIndovinare.includes(numeroRan)) {
        numeriDaIndovinare.push(numeroRan)
        
    }
}

console.log(numeriDaIndovinare);
// questo array vine esposto al utente 

alert("memorizza questi 5 numeri, hai 10 secondi di tempo" + numeriDaIndovinare );
// inizializzo la funzione della richiesta dei numeri con 10 secondi di ritardo
setTimeout(requestNum, 10000);
// da li l'utente ha 10 secondi per inserire i numeri corretti
let userNum = [];


function requestNum() {
    for (let i = 0; i < 5; i++) {
        let numRichiesto = parseInt(prompt("inserisci 5 numeri"));
        if (!userNum.includes(numRichiesto) && numeriDaIndovinare.includes(numRichiesto)) {
            userNum.push(numRichiesto)
        }
        
    }
    
}

console.log(userNum);

// a seconda della scelta dell'utente crea una funzione che stampi quanti numeri ha indovinato