function getMoveName(argMoveId){
    console.log('argument funkcji: ' + argMoveId);
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nożyce';
    } 
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
}
function displayResult(argComputerMove, argPlayerMove) {
    console.log('wybrano:', argComputerMove, argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    } else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Mamy remis!');
    } else if ( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Mamy remis!');
    } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Mamy remis!');
    } else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Ja wygrywam!');
    } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Ja wygrywam!');
    } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Ja wygrywam!');
    } else if ( argPlayerMove == 'nieznany ruch'){
        printMessage('Nie wybrałeś ruchu i ja wygrywam!');
    }
}


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/*if (randomNumber == 1) {
	computerMove = "kamień";
} else if (randomNumber == 2) {
	computerMove = "papier";
} else if (randomNumber == 3) {
	computerMove = "nożyce";
}*/
printMessage("Mój ruch to: " + argComputerMove);

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

console.log("Gracz wpisał: " + playerInput);

let argPlayerMove = getMoveName(playerInput);


/*if (playerInput == "1") {
	playerMove = "kamień";
} else if (playerInput == 2) {
	playerMove = "papier";
} else if (playerInput == 3) {
	playerMove = "nożyce";
}*/

printMessage("Twój ruch to: " + argPlayerMove);

displayResult(argComputerMove, argPlayerMove); 
console.log(getMoveName('1'));
