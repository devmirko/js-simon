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
// da li l'utente ha 10 secondi per inserire i numeri corretti