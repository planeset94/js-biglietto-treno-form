// CHIEDO IL NOME DELL'UTENTE, I KILOMETRI CHE DEVE PERCORRERE E LA FASCIA D'ETà
// var userName = prompt('Write your Name and Surname, please');
// var distance = Number(prompt('How far is your destination? Please indicate the number of kilometers'));
// var userAge = prompt('How old are you?');

// UTILIZZO LE INFO DELL'UTENTE SOSTITUENDOLE AI VARI INPUT.

var userNameEl = document.getElementById('fname');
var userName = userNameEl.value;

var distanceEl = document.getElementById('km');
var distance = distanceEl.value;



var ageEl = document.getElementById('age');
var userAge = ageEl.value;


var prezzoEl = document.getElementById('prezzo');
var prezzoBiglietto = prezzoEl.value;

var copyNameEl = document.getElementById('copyName');
var copyName = copyNameEl.value;


var buttonEl_1 = document.getElementById('crea');
var buttonEl_2 = document.getElementById('annulla');

// function calcPrice() {
//     var prezzo;
//     if (userAge === "Minorenne") {
//         prezzo = 0.21 * distance * 0.8;
//     } else if (userAge === "Over65") {
//         prezzo = 0.21 * distance * 0.6;
//     } else {
//         prezzo = 0.21 * distance;
//     }

//     return prezzo;
// }




buttonEl_1.addEventListener('click', function () {

    var prezzo;
    if (userAge === "Minorenne") {
        prezzo = 0.21 * distance * 0.8;
    } else if (userAge === "Over65") {
        prezzo = 0.21 * distance * 0.6;
    } else {
        prezzo = 0.21 * distance;
    }

    return prezzo;
    copyName = userName;
    prezzoEl.innerHTML = prezzo;
});






buttonEl_2.addEventListener('click', function () {
    var conferma = confirm('Are you sure to reset data?');
    if (conferma) {
        userName = "";
        userAge = "";
        distance = "";
    }

});









