/****************
*
* Esercizio Oggetti studenti
*
*****************/

// Es 1
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare attraverso il for..in tutte le proprietà.
  $(document).ready(function() {

    var proprietà = {
      'nome' : 'Marco',
      'cognome' : 'Bianchi',
      'età' : '23'
    }
    //console.log(proprietà);

// Stampare attraverso il for..in tutte le proprietà.
    for (var key in proprietà) {
      console.log(proprietà[key]);
    }

  }); // <-- end doc ready

// Es 2
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
  $(document).ready(function() {

var studenti = [
  studente1 = {
    nome: 'Luca',
    cognome: 'Rossi'
  },
  studente2 = {
    nome: 'Marta',
    cognome: 'Bianchi'
  },
  studente3 = {
    nome: 'Rosa',
    cognome: 'Molteni'
  },
  studente4 = {
    nome: 'Matteo',
    cognome: 'Invernizzi'
  }
];
  console.log(studenti);

//Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
  for (var i = 0; i < studenti.length; i++) {
    console.log(studenti[i].nome, studenti[i].cognome);
  }

  }); // <-- end doc ready

// Es 3
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo
// oggetto studente all'array creato al punto 2 inserendo nell’ordine: nome, cognome e età.

  $(document).ready(function() {

    var studenti = [
      studente1 = {
        nome: 'Luca',
        cognome: 'Rossi'
    },
      studente2 = {
        nome: 'Marta',
        cognome: 'Bianchi'
    },
      studente3 = {
        nome: 'Rosa',
        cognome: 'Molteni'
    },
      studente4 = {
        nome: 'Matteo',
        cognome: 'Invernizzi'
  }
];
// Aggiungere un nuovo studente indicando nome, cognome e età
    studente5 = {
      nome : prompt('Inserisci nome'),
      cognome: prompt('Inserisci cognome'),
      età: parseInt(prompt('Inserisci eta\''))
    };

    studenti.push(studente5);
    console.log(studenti);

    for (var i = 0; i < studenti.length; i++) {
      console.log(studenti[i].nome, studenti[i].cognome, studenti[i].età);
    }

  }); // <-- end doc ready
