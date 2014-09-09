/* global describe, it */

(function () {
    'use strict';
    var sampleSolution, sum;

    before(function(){
        board.init();
        sampleSolution = board.app.generateSolution();
    });

    describe('Sudoku primary functionality', function () {
        describe('the board constructor', function () {
            it('should exist and be an object', function () {
                expect(board).to.exist;
                expect(board).to.be.a.object;
            }); 

            it('the board should have a .App property', function () {
                expect(board).to.have.property('App');
            }); 
        });


        describe('the board constructor prototype', function () {
            it('should exist', function () {
                expect(board.App.prototype).to.exist;
            });

            it('the board should have a .createGame property', function () {
                expect(board.App.prototype).to.have.property('startGame');
            }); 

            it('the board should have a .generateGame property', function () {
                expect(board.App.prototype).to.have.property('generateGame');
            }); 

            it('the board should have a .render property', function () {
                expect(board.App.prototype).to.have.property('render');
            }); 
        });

        describe('the solution generator function', function () {
            it('should exist', function () {
                expect(board.App.prototype).to.have.property('generateSolution');
            });

            it('should return an array of arrays', function () {
                expect(sampleSolution).to.have.length(9);
            });

            it('should return arrays that have numbers 1-9', function () {
                var sum = sampleSolution[0].reduce(function(total, val){
                    return total + val
                });
                expect(sum).to.equal(45);
            });            
        });
    }); 
})();
