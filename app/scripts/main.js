'use strict';

var board = require('./board.js');

// when the page finishes loading, create a new game board
$(document).ready(function() {
    board.init();
});
