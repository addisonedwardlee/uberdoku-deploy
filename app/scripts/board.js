'use strict';

var helpers = require('./helpers.js');

var board = {};

// the initializing function that will be run to start the app
board.init = function(){
    board.app = new board.App({
        difficulty: 'hard'
    });
};

// create an App class
board.App = function(options){
    // main DOM div where the board will be rendered
    this.main = options.element || $('#main');
    
    this.difficulty = options.difficulty || 'easy';

    this.startGame();
};

board.App.prototype.startGame = function(){
    // create a solution board
    this.solution = this.generateSolution();

    // create the board that's actually rendered
    this.game = this.generateGame($.extend(true, [], this.solution), this.difficulty);

    // show the end result on the page
    this.render(this.game);

    // now that the game is rendered, add the appropriate event listeners
    this.addListeners();
};

// random sudoku solution generator 
board.App.prototype.generateSolution = function(){
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

// randomly remove elements from the baord based on difficulty
board.App.prototype.generateGame = function(game, difficulty){
    var difficulties = {
        'easy' : 20,
        'normal' : 40,
        'hard' : 60
    };
    for(var i = 0; i < difficulties[difficulty]; i++){
        var row = Math.floor(Math.random()*9);
        var column = Math.floor(Math.random()*9);
        game[row][column] = 'blank';
    }
    return game;
};

// render the board to the page
board.App.prototype.render = function(game){

    // reset the board before creating a new one
    this.main.html('');

    // selector since 'this' refers to window in the functions below
    var main = this.main;

    // for each array in the game, create a row div
    game.forEach(function( row, rowNum ) {
        main.append('<div class="row" data-row='+rowNum+'></div>');

        // Create each cell in the row
        row.forEach(function( data, colNum ) {
            if(data === 'blank'){
                $('.row[data-row='+rowNum+']')
                .append('<input class="number-element" type="text" min="1" max="9" maxlength="1" data-col='+colNum+' />');
            } else {
                $('.row[data-row='+rowNum+']')
                .append('<input class="number-element" type="text" min="1" max="9" maxlength="1" data-col='+colNum+' value='+data+' disabled/>');
            }
        });
    });
};

// add the necessary event listeners to each cell
board.App.prototype.addListeners = function(){

    // selector since 'this' refers to window in the functions below
    var self = this;

    // this listener will check if the number entered is correct
    $(document).keyup('.number-element', function( evt ) {

        // $target is the element that was selected
        var $target = $(evt.target);

        // grab the necessary data elements from the target
        var row = $target.parent().data().row;
        var col = $target.data().col;
        var val = $target.val() ? parseInt( $target.val() ) : null;

        // confirm that a number is entered
        if(typeof val === 'number'){

            // update the css as appropriate
            if( helpers.checkIfValid( self.solution, row, col, val) ) {
                helpers.setCellCorrect( $target );
            } else {
                helpers.setCellIncorrect( $target );
            }
        }
    });

    // listener for new game button
    $('.new-game').click(function(){
        self.startGame(self.difficulty);
    });

    // listener to show the solution
    $('.solution-button').click(function(){
        self.solveGame();
    });
};

// show the solution on the page
board.App.prototype.solveGame = function(){
    this.render(this.solution);
};

// export the board class (used with Browserify)
module.exports = board;
