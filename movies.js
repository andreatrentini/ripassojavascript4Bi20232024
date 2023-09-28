var movies;

function getMovies() {
    fetch('./movies.json')
    .then(dati => dati.json())
    .then(dati => {
        console.log(dati);
    })
}

getMovies();