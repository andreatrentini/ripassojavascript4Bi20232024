var dati = [4, 3, 9, 1, 6, 8, 2];

function filterTradizionale(dati) {
    
    let risultato = [];
    for (let i = 0; i < dati.length; i++) {
        if (dati[i] % 2 == 0) {
            risultato.push(dati[i]);
        }        
    }
    return risultato;
}

function filterTradizionale2(dati) {
    let risultato = [];
    dati.forEach(dato => {
        if (dato % 2 == 0) {
            risultato.push(dato);
        }
    });
    return risultato;
}

function filterNew(dati) {
    let risultato;
    risultato = dati.filter(controllo(dato));
    return risultato;
}

function filterNew2(dati) {
    let risultato;

    risultato = dati.filter(function (dato) {
        if (dato % 2 == 0) {
            return true;
        }
    })
    return risultato;
}

function filterNew3(dati) {
    let risultato;
    risultato = dati.filter((dato) => {
        if (dato % 2 == 0) {
            return true;
        }
    })
    return risultato;
}

function filterNew4(dati) {
    return dati.filter((dato) => {return dato % 2 == 0;});
}

function controllo(dato) {
    if (dato % 2 == 0) {
        return true;
    }
}

console.log(filterNew4(dati));