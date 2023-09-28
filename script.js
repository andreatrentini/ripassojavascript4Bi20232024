const messaggi = ['Hello World', 'Sito di prova', 'Corso Javascript 4bi'];

// 1. recuperare l'elemento in cui inserire i messaggi

var principale = document.getElementById('principale');

// 2. Eseguire un ciclo da ripetere per ogni messaggio
messaggi.forEach(messaggio => {

    // 3. Creare un nuovo tag di tipo p
    let paragrafo = document.createElement('p');
    paragrafo.innerText = messaggio;

    // 4. aggiungere il tag al DOM
    principale.appendChild(paragrafo);
});

