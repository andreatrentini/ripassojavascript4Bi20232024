var dati = [4, 5, 3 , 1, 9, 8];

function mapDati(dati) {
    return dati.map((dato) => {
        return dato * dato;
    })
}

console.log(mapDati(dati));