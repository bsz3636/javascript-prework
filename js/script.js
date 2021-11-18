{
    const playGame = function (playerInput) {
    
        clearMessages()

        const getMoveName = function (argMoveId) {
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

        const displayResult = function (argComputerMove, argPlayerMove) {
            console.log('wybrano:', argComputerMove, argPlayerMove);
                printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
            if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('<h2>Ty wygrywasz!</h2>');
            } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
                printMessage('<h2>Ty wygrywasz!</h2>');
            } else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
                printMessage('<h2>Ty wygrywasz!</h2>');
            } else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
                printMessage('<h2>Mamy remis!</h2>');
            } else if ( argComputerMove == 'papier' && argPlayerMove == 'papier'){
                printMessage('<h2>Mamy remis!</h2>');
            } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
                printMessage('<h2>Mamy remis!</h2>');
            } else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
                printMessage('<h2>Ja wygrywam!</h2>');
            } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
                printMessage('<h2>Ja wygrywam!</h2>');
            } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
                printMessage('<h2>Ja wygrywam!</h2>');
            } else if ( argPlayerMove == 'nieznany ruch'){
                printMessage('<h2>Nie wybrałeś ruchu i ja wygrywam!</h2>');
            }
    
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log("Wylosowana liczba to: " + randomNumber);
    const argComputerMove = getMoveName(randomNumber);
    printMessage("Mój ruch to: " + argComputerMove);
    
    const argPlayerMove = getMoveName(playerInput);
    printMessage("Twój ruch to: " + argPlayerMove);

    displayResult(argComputerMove, argPlayerMove); 
    console.log(getMoveName('1'));
}

document.getElementById('play_rock').addEventListener('click', function(){playGame(1);
});
document.getElementById('play_paper').addEventListener('click', function(){playGame(2);
});
document.getElementById('play_scissors').addEventListener('click', function(){playGame(3);
});
}