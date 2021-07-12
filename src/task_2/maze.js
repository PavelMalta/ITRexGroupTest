let maze = [
    ['#','#','#','#','#','#','#','#','#'],
    ['#','+','+','+','#','+','+','+','#'],
    ['#','+','#','+','#','+','#','+','#'],
    ['+','+','#','+','0','+','#','+','#'],
    ['#','#','#','+','#','#','#','#','#'],
    ['#','#','+','+','#','#','#','#','#'],
    ['#','#','+','#','#','#','#','#','#'],
    ['#','#','#','#','#','#','#','#','#'],
]
let maze2 = [
    ['#','#','#','#','#','#','#','#','#'],
    ['#','+','+','+','#','+','+','+','#'],
    ['#','+','#','#','#','+','#','+','#'],
    ['#','+','#','#','0','+','#','+','#'],
    ['#','#','#','#','#','#','#','+','#'],
    ['#','#','+','+','#','#','#','+','#'],
    ['#','#','+','#','#','#','#','+','#'],
    ['#','#','#','#','#','#','#','+','#'],
]

const exitFromMaze = (maze) => {
    let start = maze.reduce((acc, item, ind) => item.indexOf("0") !== -1 ? acc = {y:ind, x:item.indexOf("0")}: acc, {})
    console.log(start)
    let end = {}
    for (let i = 0; i < maze.length; i++) {
        if (i === 0 || i === maze.length -1) {
            for(let j = 0; j<maze[i].length; j++) {
                if (maze[i][j] === '+') {
                    end = {y: i, x: j}
                }
            }
        } else {
            if (maze[i][0] === '+') {
                end = {y: i, x: 0}
            }
            if (maze[i][maze[i].length -1] === '+') {
                end = {y: i, x: maze[i].length -1}
            }
        }
    }
    console.log(end)

    const getValidSid = (cord) => {
        let {y, x} = cord

        let cords = []

        if (maze[y - 1] !== undefined) {
            cords.push({x: x, y: y-1, value: maze[y-1][x], route: 'top'})
        }
        if (maze[y + 1] !== undefined) {
            cords.push({x: x, y: y+1, value: maze[y+1][x], route: 'down'})
        }
        if (maze[x - 1] !== undefined) {
            cords.push({x: x -1, y: y, value: maze[y][x-1], route: 'left'})
        }
        if (maze[x + 1] !== undefined) {
            cords.push({x: x + 1, y: y, value: maze[y][x+1], route: 'right'})
        }
        return cords.filter(el => el.value === '+')
    }

    let road = []
    const checkPath = (start, end) => {
        maze[start.y][start.x] = "1"

        let siblings = getValidSid(start);

        if(siblings.length > 0) {
            for(let i = 0; i < siblings.length; i++) {
                let current = siblings[i]

                let isSolved = current.x === end.x && current.y === end.y
                let notVisited = maze[current.y][current.x] !== "1"

                road.push(current.route)
                if (isSolved || (notVisited && checkPath(current, end))) {
                    return true
                }
            }
        }
        return false
    }
    checkPath(start, end)
    return road
}

const result = exitFromMaze(maze2)

console.log(result)