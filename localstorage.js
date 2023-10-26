var datiUtente;

function salvaDati() {
    let inputNome = document.getElementById('inputNome');
    let inputCognome = document.getElementById('inputCognome');

    datiUtente = {
        nome: inputNome.value,
        cognome: inputCognome.value,
        token: 'GSDHGFSJHGFJSHFSJGSJHDFGJSDHGFJS'
    }

    localStorage.setItem('dati-utente', JSON.stringify(datiUtente))
}

function caricaDati() {
    let dati = localStorage.getItem('dati-utente');
    if (dati) {
        datiUtente = JSON.parse(dati);
        let inputNome = document.getElementById('inputNome');
        inputNome.value = datiUtente.nome;
        let inputCognome = document.getElementById('inputCognome');
        inputCognome.value = datiUtente.cognome;
        console.log(datiUtente);
    }
}

caricaDati();