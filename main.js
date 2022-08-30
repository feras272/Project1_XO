console.log('Tuwaiq Academy - JavaScript')

console.log('Week 4 Day 4 - Project 1 XO')

$(document).ready(function () {

    console.log($(this));

    const turn = $('#turn');
    const cells = $('.cell');
    const winner = $('#winner');
    let playerWin = $('#player');
    const restart = $('#restart');
    const dots = $('#dots')
    let counter = 0
    const X = 'X'
    const O = 'O'
    const playerTurn = $('#playerTurn');

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

        if(counter >= 9) {
            winner.text('Game Finished');
            return;
        }
    }

    cells.click(cellClicked)

})
