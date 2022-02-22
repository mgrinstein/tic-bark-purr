let myTTTGrid = [
    ["crosses","crosses","crosses"],
    [null,null,null],
    [null,null,null]
]

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

let isGameOver = false
let gameWinner = "nobody"
let currentPlayer = "crosses" // X goes first on TTT

function checkWinner() {
    console.log("checkWinner was called");
    for (let streak = 0; streak < winningArray.length; streak++) {
        console.log( myTTTGrid[winningArray[streak][0][0]][winningArray[streak][0][1]])
        if ((myTTTGrid[winningArray[streak][0][0]][winningArray[streak][0][1]] === currentPlayer) &&
            (myTTTGrid[winningArray[streak][1][0]][winningArray[streak][1][1]] === currentPlayer) &&
            (myTTTGrid[winningArray[streak][2][0]][winningArray[streak][2][1]] === currentPlayer)) {
            isGameOver = true
            console.log(currentPlayer)
            return currentPlayer
            } else {
                if (movesLeft(myTTTGrid) === true) {
                    console.log(null)
                    return null
                } else {
                    isGameOver = true
                    console.log("nobody")
                    return "nobody"
                }
            }
    }
}

function movesLeft(grid) { // check if there are moves left on grid
    for (row in grid) {
        console.log(grid[row])
        if (grid[row].some(el => el === null) === true) {
            return true
        } else {
            continue
        }
    }
    return false
}
checkWinner()