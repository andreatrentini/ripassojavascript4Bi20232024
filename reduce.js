var dati = [4, 5, 3 , 1, 9, 8];

function reduceDati(dati) {
    return dati.reduce((totale, dato) => {
        return totale + dato;
    })
}

function elaboraFilm() {
    fetch('./movies.json')
    .then(dati => dati.json())
    .then (dati => {
        let risultato = dati.reduce((titoli, movie) => {
            return titoli + movie.title.substring(0,3);
        })
        console.log(risultato);
    })
}


elaboraFilm();