let maxNumber = 25;
let secretNumber = Math.floor(Math.random() * maxNumber);
let maxGuesses = 5;
let guesses = 1;
let guessesLeft = 4;
let guess = 0;
let winner = false;
console.log(secretNumber);


let name = prompt("vul uw naam in aub");
// alert("hi " + name + " welkom bij raad het getal je heb " + maxGuesses + " pogingen om het antwoord te raden");
alert(`hi ${name} welkom bij raad het getal je heb ${maxGuesses} pogingen om het getal te raden tussen de 1 en de ${maxNumber}`)



let highLowCheck = function (guess) {
    if (guess == secretNumber) {
        // alert("jeeeeeej " + secretNumber + " is het goede antwoord");
        alert(`jeeeeeej ${secretNumber} is het goede antwoord`)
        winner = true;

        return guess;
    }

    if (guess < secretNumber) {
        // alert(name + " " + guess + " is helaas te laag nog " + guessesLeft + " pogingen over");
        alert(`${name} ${guess} is helaas te laag nog ${guessesLeft} pogingen over`)
        guesses++;
        guessesLeft--;

    }
    if (guess > secretNumber) {
        // alert(name + " " + guess + " is helaas te hoog nog " + guessesLeft + " pogingen over");
        alert(`${name} ${guess} is helaas te hoog nog ${guessesLeft} pogingen over`)
        guesses++;
        guessesLeft--;

    }
    if (guessesLeft == 0) {
        alert(name + "helaas je heb het niet geraden het antwoord was " + secretNumber);

        return;
    }


};

while (guesses <= maxGuesses && winner !== true) {
    let guess = prompt("Raad een getal tussen de te 1 en de " + maxNumber);


    highLowCheck(guess);



};