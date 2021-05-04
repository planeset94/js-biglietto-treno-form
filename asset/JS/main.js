// DETERMINO TUTTI GLI ELEMENTI DA USARE NEL CODICE 
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

// CREO LE FUNZIONI RANDOM 
function random_Function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function coach_Function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// CREO LA FUNZIONE PER FAR APPARIRE IL BIGLIETTO 
function displayTicket() {
    var x = document.getElementById("train_info");
    x.style.display = "block";

}

// CODICE DEI BUTTON 


buttonEl_1.addEventListener('click', function () {


    codexEl.innerHTML = random_Function(9000, 10000);
    coachNumberEl.innerHTML = coach_Function(1, 20);
    copyNameEl.innerHTML = userNameEl.value;

    if (ageEl.value == "minorenne") {
        offerTypeEl.innerHTML = "Sconto Minorenne";
        ticketPriceEl.innerHTML = (0.21 * distanceEl.value * 0.8).toFixed(2) + "€";
    } else if (ageEl.value == "over65") {
        offerTypeEl.innerHTML = "Sconto Over65";
        ticketPriceEl.innerHTML = (0.21 * distanceEl.value * 0.6).toFixed(2) + "€";
    } else {
        offerTypeEl.innerHTML = "Nessuno sconto";
        ticketPriceEl.innerHTML = (0.21 * distanceEl.value).toFixed(2) + "€";
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

        var x = document.getElementById("train_info");
        x.style.display = "none";


    }

});















