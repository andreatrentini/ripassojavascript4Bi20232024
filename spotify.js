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
    fetch('https://api.spotify.com/v1/search?q=artist%3A' + artistName, {
        headers: {
            Authorization: 'Bearer '+ tokenBearer
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })
}

function ricerca() {
    let artistName = document.getElementById('inputName').value;
    getArtistsList(artistName);
}

getTokenBearer();