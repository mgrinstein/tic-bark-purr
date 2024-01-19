// Make your changes to store and update game state in this file

// >> Global variables - can be accessed from anywhere in a JavaScript program.
// Global variable representing the board.
let myTTTGrid = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

// WinningArray contains all 8 winning streaks (3 vertical; 3 horizontal; 2 diagonal - respectively).
// This array does NOT show a full grid, but all representations of the 3-mark streak, i.e. all possible winning scenarios.
// Each "sub-sub-array" is structured as such: [row,column] - indicating what cells must be marked for a win for each streak.
const winningArray = [
    [[0,0],[0,1],[0,2]], // 1st vertical streak (row 0)
    [[1,0],[1,1],[1,2]], // 2nd vertical streak (row 1)
    [[2,0],[2,1],[2,2]], // 3rd vertical streak (row 2)
    [[0,0],[1,0],[2,0]], // 1st horizontal streak (column 0)
    [[0,1],[1,1],[2,1]], // 2nd horizontal streak (column 1)
    [[0,2],[1,2],[2,2]], // 3rd horizontal streak (column 2)
    [[0,0],[1,1],[2,2]], // 1st diagonal streak (top left to bottom right)
    [[0,2],[1,1],[2,0]] //  2nd diagonal streak (top right to bottom left)
]

// Player types:
const player1 = "crosses" //"crosses"
const player2 = "nought" //"nought"

// Other states we must track and which will be used by functions (=> must be global)
let isGameOver = false
let currentPlayer = "crosses" // X goes first on TTT

const nextPlayerDictionary = {
    "crosses": "🐶",
    "noughts": "🐱",
    "nobody": "nobody"
}
// display next player
function displayNextPlayer(isGameOver) {
    let defaultPlayer = "🐶"


    const currentPlayerName = document.getElementById("current-player-name");
    
    if (!isGameOver) {
        currentPlayerName.innerText = currentPlayer ? nextPlayerDictionary[currentPlayer] : defaultPlayer;
    } else {
        currentPlayerName.innerText = "-"
    }
    const currentPlayerDisplay = document.getElementById("current-player-display");
    currentPlayerDisplay.style.display = "block";
}

// >> Functions
// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
function takeTurn(row, column) {
    console.log("takeTurn was called with row: "+row+", column:"+column);
    if ((isGameOver === false) && (myTTTGrid[row][column] === null)) {
        if (currentPlayer === "crosses") { // Update board with new move & whose turn it is now
            myTTTGrid[row][column] = "cross"
            currentPlayer = "noughts"
        } else {
            myTTTGrid[row][column] = "nought"
            currentPlayer = "crosses"
        }
    }
// PS: No need to call checkWinner because it will already be called by the positionClick function (on connectors.js) 
}

/* function buildWinningGrids(winningArray, streak_nb) {
    let winningGrids = []
    for (let streak in winningArray) {
        for (let row = 0; row < 3; row++) {
            for (let column = 0; column < 3; column++) {
                winningGrids[row][column] = winningArray;
                }
            }
        }
    }  */

function movesLeft(grid) { // check if there are moves left on grid
    for (row in grid) {
        if (grid[row].some(el => el === null) === true) {
            return true
        } else {
            continue
        }
    }
    return false
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    let streakCell_1
    let streakCell_2
    let streakCell_3

    for (let streak = 0; streak < winningArray.length; streak++) {
        streakCell_1 = myTTTGrid[winningArray[streak][0][0]][winningArray[streak][0][1]]
        streakCell_2 = myTTTGrid[winningArray[streak][1][0]][winningArray[streak][1][1]]
        streakCell_3 = myTTTGrid[winningArray[streak][2][0]][winningArray[streak][2][1]]
        if ((streakCell_1 === "cross") && (streakCell_2 === "cross") && (streakCell_3 === "cross")) {
            isGameOver = true
            console.log("got a winner");
            return "crosses"
        } 
        else if ((streakCell_1 === "nought") && (streakCell_2 === "nought") && (streakCell_3 === "nought")) {
            isGameOver = true
            console.log("got a winner");
            return "noughts"            
        }
        else {
            continue
        }
    }
        if (movesLeft(myTTTGrid) === true) {
            return null
        } else {
            isGameOver = true
            console.log("no winner");
            return "nobody"
        }
    }

// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
    for (let row in myTTTGrid) {
        for (let column in myTTTGrid) {
            myTTTGrid[row][column] = null
        }
    }
    // set first player to "crosses" player // X goes first on Tic-tac-toe
    currentPlayer = "crosses"
    // set new game
    isGameOver = false
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return myTTTGrid;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
        displayNextPlayer
    }
} else {
    console.log("Running in Browser")
}
