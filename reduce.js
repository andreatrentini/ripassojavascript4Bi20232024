var dati = [4, 5, 3 , 1, 9, 8];

function reduceDati(dati) {
    return dati.reduce((totale, dato) => {
        return totale + dato;
    })
}

console.log(reduceDati(dati));