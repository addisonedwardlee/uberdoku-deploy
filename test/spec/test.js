/* global describe, it */

(function () {
    'use strict';

    before(function(){
        board.init();
    });

    describe('Sudoku primary functionality', function () {
        describe('a new board.app should be created on init', function () {
            it('a new board.app should be created on init', function () {
                expect(board).to.exist;
            });
        });
    }); 
})();
