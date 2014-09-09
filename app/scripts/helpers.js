'use strict'

// change the styling of the cell if correct number added
var checkIfValid = function( solution, row, col, val){
    if(solution[row][col] === val){
        return true;
    }
    return false;
};

// change the styling of the cell if correct number added
var setCellCorrect = function(element){
    element.removeClass('invalid');
};

// change the styling of the cell if incorrect number added
var setCellIncorrect = function(element){
    element.addClass('invalid');
};

// export the helper functions (used with Browserify)
module.exports = {
    checkIfValid: checkIfValid,
    setCellIncorrect: setCellIncorrect,
    setCellCorrect: setCellCorrect
}
