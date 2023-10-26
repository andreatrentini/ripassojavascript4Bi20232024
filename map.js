var dati = [4, 5, 3 , 1, 9, 8];

function mapDati(dati) {
    return dati.map((dato) => {
        return dato * dato;
    })
}

function trasformaFilm() {
    fetch('./movies.json')
    .then(dati => dati.json())
    .then(dati => {
        let nuoviDati = dati.map((film) => {
            return {titolo: film.title, durata: film.durata}
        });
        console.log(nuoviDati);
    })
}

trasformaFilm();

//console.log(mapDati(dati));