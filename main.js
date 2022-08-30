console.log('Tuwaiq Academy - JavaScript')

console.log('Week 4 Day 4 - Project 1 XO')

$(document).ready(function () {

    console.log($(this));

    const turn = $('#turn');
    const cells = $('.cell');
    const winner = $('#winner');
    let playerWin = $('#player');
    const restart = $('#restart');
    const playerTurn = $('#playerTurn');
    let squares = [];
    let counter = 0
    const X = 'X'
    const O = 'O'
    let gameFinished = false
    

    cells.click(cellClicked)

    restart.click(restartTheGame)

    function cellClicked() {
    
        if($(this).text() === '' && counter % 2 == 0 && counter <9) {
            $(this).text(X)
            playerTurn.text(' ' + O)
            counter++;
        } 
        else if($(this).text() === '' && counter % 2 !== 0 && counter <9) {
            $(this).text(O)
            playerTurn.text(' ' + X)
            counter++;
            

        } else {
            const currentThis = $(this)
            $(this).css('background-color', '#ffcccb')
            setTimeout(function(){
                currentThis.css('background-color', '#E2EEF3')
           },250); // for 0.25s = 250ms
        }

        whoWins();

        if(counter >= 9 && whoWins() == false) {
            winner.text('Game Finished');
            setInterval(function () {winner.append(' .')},1000)
            setTimeout(function () {location.reload()},4000);
            return;
        }

        
    }

    function endTheGame(cell1, cell2, cell3) {
        // const winner = squares[cell1].text();
        // playerWin.text(winner + ' Winner');
        winner.text('Player ' + squares[cell1].text() + ' Wins')
        winner.css('background-color', '#7EB4C9')
        winner.css('border', '#19323C solid 1px')
        $('#cell' + cell1).css('background-color', '#lightgreen');
        $('#cell' + cell2).css('background-color', '#lightgreen');
        $('#cell' + cell3).css('background-color', '#lightgreen');

        setInterval(function () {winner.append(' .')},1000)
        setTimeout(function () {location.reload()},4000);
        counter = 9
        gameFinished = true
    }

    function whoWins() {
        for(let i = 1; i < 10; i++) {
            squares[i] = $('#cell' + i)
        }
        if(squares[1].text() == squares[2].text() && squares[2].text() == squares[3].text() && squares[1].text() != '') {
            console.log('Done')
            endTheGame(1,2,3);
        }
        else if(squares[4].text() == squares[5].text() && squares[5].text() == squares[6].text() && squares[4].text() != '') {
            console.log('Done')
            endTheGame(4,5,6);
        }
        else if(squares[7].text() == squares[8].text() && squares[8].text() == squares[9].text() && squares[7].text() != '') {
            console.log('Done')
            endTheGame(7,8,9);
        }
        else if(squares[1].text() == squares[4].text() && squares[4].text() == squares[7].text() && squares[1].text() != '') {
            console.log('Done')
            endTheGame(1,4,7);
        }
        else if(squares[2].text() == squares[5].text() && squares[5].text() == squares[8].text() && squares[2].text() != '') {
            console.log('Done')
            endTheGame(2,5,8);
        }
        else if(squares[3].text() == squares[6].text() && squares[6].text() == squares[9].text() && squares[3].text() != '') {
            console.log('Done')
            endTheGame(3,6,9);
        }
        else if(squares[1].text() == squares[5].text() && squares[5].text() == squares[9].text() && squares[1].text() != '') {
            console.log('Done')
            endTheGame(1,5,9);
        }
        else if(squares[3].text() == squares[5].text() && squares[5].text() == squares[7].text() && squares[3].text() != '') {
            console.log('Done')
            endTheGame(3,5,7); 
        }
        return gameFinished;
    }

    function restartTheGame() {
        location.reload(true);
    }


    

})
