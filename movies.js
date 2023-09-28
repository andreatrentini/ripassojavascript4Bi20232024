var movies;

function getMovies() {
    fetch('./movies.json')
    .then(dati => dati.json())
    .then(dati => {
         // I dati sono già stati convertiti in formato javascript
        // Creare la tabella ed inserirla nella pagina web
        movies = dati;
        let principale = document.getElementById('principale');
        principale.appendChild(createMoviesTable(dati));
    })
}

function createMoviesTable(dati) {
    let table = document.createElement('table');
    table.className = 'table';
    table.appendChild(createMoviesHeader());
    table.appendChild(createMoviesBody(dati));
    //creare il body
    return table;
}

function createMoviesHeader() {
    let thead = document.createElement('thead');
    let row = document.createElement('tr');
    row.innerHTML = '<th scope="col">#</th><th scope="col">Title</th><th scope="col">Genre</th><th scope="col">Duration (min)</th>';
    thead.appendChild(row);
    return thead;
}

function createMoviesBody(dati) {
    let tbody = document.createElement('tbody');
    dati.forEach(movie => {
        tbody.appendChild(createMoviesRow(movie))
    });
    return tbody;
}

function createMoviesRow(movie) {
    let row = document.createElement('tr');
    let cell = document.createElement('th');
    cell.scope = 'row';
    cell.innerText = movie.id;
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.innerText = movie.title;
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.innerText = movie.genres;
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.innerText = movie.durata;
    row.appendChild(cell);
    return row;
}

getMovies();