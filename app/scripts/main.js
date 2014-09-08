'use strict';

var board = {};

// create a new game board
board.init = function(){
    console.log('creating a new board');
    board.app = new board.App({
        difficulty: 'easy'
    });
};

// create an App class
board.App = function(options){
    this.main = $('#main');
    
    this.difficulty = options.difficulty || 'easy';

    this.board = this.generateBoard(this.difficulty);
    this.render();
    this.addListeners();
};

// random sudoku game generator
board.App.prototype.generateBoard = function(){
    return [[2,4,8,3,9,5,7,1,6],
            [5,7,1,6,2,8,3,4,9],
            [9,3,6,7,4,1,5,8,2],
            [6,8,2,5,3,9,1,7,4],
            [3,5,9,1,7,4,6,2,8],
            [7,1,4,8,6,2,9,5,3],
            [8,6,3,4,1,7,2,9,5],
            [1,9,5,2,8,6,4,3,7],
            [4,2,7,9,5,3,8,6,1]];
};

// render the board to the page
board.App.prototype.render = function(){
    // selector since 'this' refers to window in the functions below
    var main = this.main;

    this.board.forEach(function( row, rowNum ) {
        main.append('<div class="row" data-row='+rowNum+'></div>');

        // Create each cell in the row
        row.forEach(function( data, colNum ) {
            $('.row[data-row='+rowNum+']')
            .append('<input class="number-element" type="text" min="1" max="9" maxlength="1" data-col='+colNum+' value='+data+' />');
        });
    });
};

// add the necessary event listeners to each cell
board.App.prototype.addListeners = function(){

};

// change the styling of the cell if correct number added
board.App.prototype.setCellCorrect = function(){
    
};

// change the styling of the cell if incorrect number added
board.App.prototype.setCellIncorrect = function(){
    
};

// show the success animation on completion
board.App.prototype.winGame = function(){
    
};

