const divEl = document.getElementById("container")
// crea un array che genera 5 numeri casuali
let numeriDaIndovinare = []


while (numeriDaIndovinare.length < 5) {
    const numeroRan = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    if (!numeriDaIndovinare.includes(numeroRan)) {
        numeriDaIndovinare.push(numeroRan)
        
    }
}

console.log(numeriDaIndovinare);
// questo array vine esposto al utente 

divEl.innerHTML = 'memorizza questi 5 numeri, hai 10 secondi di tempo' + numeriDaIndovinare ;

// inizializzo la funzione della richiesta dei numeri con 10 secondi di ritardo
setTimeout(svuota,10000)
setTimeout(requestNum, 11000);
setTimeout(risultato, 12000);
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
function risultato() {
    

  if (userNum.length == 0) {
    console.log(" hai indovinato 0 su 5");
    divEl.innerHTML = " hai indovinato 0 su 5"
    
  } else if (userNum == 1) {
     console.log(" hai indovinato 1 su 5"); 
     divEl.innerHTML = " hai indovinato 1 su 5"
    
  } else if (userNum == 2) {
     console.log(" hai indovinato 2 su 5");
     divEl.innerHTML = " hai indovinato 2 su 5"
    
  } else if (userNum == 3) {
     console.log(" hai indovinato 3 su 5");
     divEl.innerHTML = " hai indovinato 3 su 5" 
    
  } else if (userNum == 4) {
    console.log(" hai indovinato 4 su 5");
    divEl.innerHTML = " hai indovinato 4 su 5" 

    
  } else {
     console.log(" hai indovinato 5 su 5");
     divEl.innerHTML = " hai indovinato 5 su 5"  
 } 

}

function svuota() {
    divEl.innerHTML = "";
}
