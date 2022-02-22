let myTTTGrid = [
    [1,1,1],
    [1,1,1],
    [1,1,1]
]

function movesLeft() {
    for (row in myTTTGrid) {
        console.log(myTTTGrid[row])
        if (myTTTGrid[row].some(el => el === null) === true) {
            return true
        } else {
            continue
        }
    }
    return false
}

console.log(movesLeft())