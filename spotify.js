var clientID = 'f412d48b9461494e9ec79dc2ed651967';
var clientSecret = 'e07fc0bc7fea4b79ac7290f7ef34c9e6';
var tokenBearer;
var tokenDuration;

function getTokenBearer() {
    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=' + clientID + '&client_secret=' + clientSecret
    })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            tokenBearer = response.access_token;
            tokenDuration = response.expires_in;

            setInterval(() => {
                fetch('https://accounts.spotify.com/api/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: 'grant_type=client_credentials&client_id=' + clientID + '&client_secret=' + clientSecret
                })
                    .then(response => response.json())
                    .then(response => {
                        console.log(response);
                        tokenBearer = response.access_token;
                        tokenDuration = response.expires_in;
                    });
            }, (tokenDuration - 10) * 1000);
        })
}

function getArtistsList(artistName) {
    fetch('https://api.spotify.com/v1/search?q=artist:' + artistName +'&type=artist', {
        headers: {
            Authorization: 'Bearer '+ tokenBearer
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
        let artisti = response.artists.items;
        let principale = document.getElementById('principale');
        principale.innerHTML = '';
        let lista = createArtistsList(artisti);
        principale.appendChild(lista);
        console.log(artisti)
    })
}
function getArtistsAlbums(artistId) {
    // https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/albums
    console.log(artistId);
    fetch('https://api.spotify.com/v1/artists/' + artistId +'/albums', {
        headers: {
            Authorization: 'Bearer '+ tokenBearer
        }
    })
    .then(response => response.json())
    .then(response => {
        let albums = response.items;
        console.log(albums);
        let principale = document.getElementById('principale');
        principale.innerHTML = '';
        principale.appendChild(createAlbumsList(albums));
    })
}

function ricerca() {
    let artistName = document.getElementById('inputName').value;
    getArtistsList(artistName);
}

function createAlbumsList(albums) {
    let contenitore = document.createElement('div');
    albums.forEach(album => {
        let copertina = document.createElement('img');
        copertina.src = album.images[1].url;
        copertina.onclick = () => {
            console.log(album.id);
        };
        contenitore.appendChild(copertina);
    });
    return contenitore;
}

function createArtistsList(artisti) {
    let elenco = document.createElement('ul');
    artisti.forEach(artista => {
        let elemento = document.createElement('li');
        elemento.innerText = artista.name;
        elemento.onclick = () => {
            getArtistsAlbums(artista.id);
        }
        elenco.appendChild(elemento);
    });
    return elenco;
}

getTokenBearer();