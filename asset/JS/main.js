// CHIEDO IL NOME DELL'UTENTE, I KILOMETRI CHE DEVE PERCORRERE E LA FASCIA D'ETà


// UTILIZZO LE INFO DELL'UTENTE SOSTITUENDOLE AI VARI INPUT.

var userNameEl = document.getElementById('fname');
var userName = userNameEl.value;

var distanceEl = document.getElementById('km');



var ageEl = document.getElementById('age');

var ticketPriceEl = document.getElementById('ticket_price');




var copyNameEl = document.getElementById('copy_name');
var coachNumberEl = document.getElementById('coach_number');
var codexEl = document.getElementById('codex');
var offerTypeEl = document.getElementById('offer_type');


var buttonEl_1 = document.getElementById('crea');
var buttonEl_2 = document.getElementById('annulla');

function random_Function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function coach_Function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


buttonEl_1.addEventListener('click', function () {
    codexEl.innerHTML = random_Function(9000, 1000);
    coachNumberEl.innerHTML = coach_Function(1, 20);
    copyNameEl.innerHTML = userNameEl.value;


    if (ageEl.value == "minorenne") {
        offerTypeEl.innerHTML = "Sconto Minorenne";
        ticketPriceEl.innerHTML = (0.21 * distanceEl.value * 0.8).toPrecision(3) + "€";
    } else if (ageEl.value == "over65") {
        offerTypeEl.innerHTML = "Sconto Over65";
        ticketPriceEl.innerHTML = (0.21 * distanceEl.value * 0.6).toPrecision(3) + "€";
    } else {
        offerTypeEl.innerHTML = "Nessuno sconto";
        ticketPriceEl.innerHTML = (0.21 * distanceEl.value).toPrecision(3) + "€";
    }

});

buttonEl_2.addEventListener('click', function () {
    var conferma = confirm('Are you sure to reset data?');
    if (conferma) {
        userNameEl.value = "";
        distanceEl.value = "";
        copyNameEl.innerHTML = "";
        offerTypeEl.innerHTML = "";
        coachNumberEl.innerHTML = "";
        codexEl.innerHTML = "";
        ticketPriceEl.innerHTML = "";

    }

});















