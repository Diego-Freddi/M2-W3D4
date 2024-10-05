// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto
//(al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

let h1 = document.getElementsByTagName("h1")[0]
function cambiaH1() {
    h1.innerText = "Mondo Cellulare"
}

/* //Oppure

function cambiaH1() {
document.querySelector("h1").textContent = "Mondo Cellulare"
}
 */

function cambiaSfondo() {
    document.getElementById("corpo").style.backgroundColor = "#a0eaf3"
}

/* //Oppure

function cambiaSfondo(colore) {
    document.body.style.backgroundColor = colore //in questo caso il colore lo andiamo a mettere direttamente sul bottone quando si richiama la funzione
}
 */

let newAdd = document.getElementsByClassName("indirizzo")[0]
function cambiaIndirizzo() {
    newAdd.innerText = "Cellular World - Via L. v. Beethoven, 9 - Vienna - Tel.: 012 345.678.90 - e-mail: cellularworld@gmail.com"
}

let classLink = document.getElementsByTagName("a");
function addClass() {
    for (i = 0; i < classLink.length; i++) {
        classLink[i].classList.toggle("buyButton")
    }
}

let img = document.getElementsByTagName("img");
function hideReveals() {
    for (i = 0; i < img.length; i++) {
        img[i].classList.toggle("hideReveals")
    }
}

// generatore casuale di valori esadecimali

function faiColoreRandom() {
    let alfaNum = "0123456789ABCDEF"
    let colore = "#"
    for (i = 0; i < 6; i++) {
        colore += alfaNum[Math.floor(Math.random() * 16)]
    }
    return colore
}
// console.log (faiColoreRandom())

//Funzione per assegnare il valore esadecimale random allo stile (style.color)

let prices = document.getElementById("prices")
function cambiaColore() {
        let coloreRandom = faiColoreRandom()
        prices.style.color = coloreRandom
    }


/* Oppure utilizzando quesrySelectorAll
(in questo caso ho aggiunto anche il cambiamento dello sfondo in modo randomico, per vederne l'effetto)
 */

/* function cambiaColore() {
    let price = document.querySelectorAll(".price")
    let coloreTesto = faiColoreRandom()
    let coloreSfondo = faiColoreRandom()

    for (let i = 0; i < price.length; i++) {
        price[i].style.color = coloreTesto
        price[i].style.backgroundColor = coloreSfondo
    }
}
 */