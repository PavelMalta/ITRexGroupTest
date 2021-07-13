import React, {useState} from "react";
import s from "./Task2.module.css";
import {NavLink} from "react-router-dom";
import {v1} from "uuid";


export const maze = [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '+', '+', '+', '#', '+', '+', '+', '#'],
    ['#', '+', '#', '+', '#', '+', '#', '+', '#'],
    ['#', '+', '#', '+', '0', '+', '#', '+', '#'],
    ['#', '+', '#', '+', '#', '#', '#', '+', '#'],
    ['#', '+', '+', '#', '#', '#', '+', '+', '#'],
    ['#', '#', '+', '#', '#', '#', '+', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '+', '#', '#'],
]
const exitFromMaze = (startMaze) => {
    let maze = startMaze.map(item => [...item])
    let start = maze.reduce((acc, item, ind) => item.indexOf("0") !== -1 ? acc = {
        y: ind,
        x: item.indexOf("0")
    } : acc, {})

    let end = {}

    for (let i = 0; i < maze.length; i++) {
        if (i === 0 || i === maze.length - 1) {
            for (let j = 0; j < maze[i].length; j++) {
                if (maze[i][j] === '+') {
                    end = {y: i, x: j}
                }
            }
        } else {
            if (maze[i][0] === '+') {
                end = {y: i, x: 0}
            }
            if (maze[i][maze[i].length - 1] === '+') {
                end = {y: i, x: maze[i].length - 1}
            }
        }
    }


    const getValidSid = (cord) => {
        let {y, x} = cord

        let cords = []

        if (maze[y - 1][x] !== undefined) {
            cords.push({x: x, y: y - 1, value: maze[y - 1][x], route: "'top'"})
        }
        if (maze[y + 1][x] !== undefined) {
            cords.push({x: x, y: y + 1, value: maze[y + 1][x], route: "'down'"})
        }
        if (maze[y][x - 1] !== undefined) {
            cords.push({x: x - 1, y: y, value: maze[y][x - 1], route: "'left'"})
        }
        if (maze[y][x + 1] !== undefined) {
            cords.push({x: x + 1, y: y, value: maze[y][x + 1], route: "'right'"})
        }
        return cords.filter(el => el.value === '+')
    }

    let road = []
    const checkPath = (start, end) => {
        maze[start.y][start.x] = "1"

        let siblings = getValidSid(start);

        if (siblings.length > 0) {
            for (let i = 0; i < siblings.length; i++) {
                let current = siblings[i]

                let isSolved = current.x === end.x && current.y === end.y
                let notVisited = maze[current.y][current.x] !== "1"

                road.push(current.route)
                if (isSolved || (notVisited && checkPath(current, end))) {
                    return true
                }
            }
        } else {
            road = []
        }
        return false
    }
    return checkPath(start, end) ? road : "The maze has no exit!!!"
}
const resultMaze = typeof exitFromMaze(maze) === 'string' ? exitFromMaze(maze) : exitFromMaze(maze).join(", ")

export const Task2 = () => {

    const [show, setShow] = useState(false)

    const showHandler = () => {
        setShow(!show)
    }

    return (
        <div className={s.container}>
            <div>
                <h2>A maze is a two-dimensional array.</h2>
                <h3>Write an algorithm for finding a way out of the maze.</h3>
            </div>
            <NavLink to={'/'}>
                <span className={s.task1}>Look at the task 1</span>
            </NavLink>
            <div className={s.mazeContainer}>
                {maze.map(item => <div className={s.row} key={v1()}>{item.map(el => <div key={v1()}>{el}</div>)}</div>)}
            </div>
            <div className={s.buttonContainer}>
                <button onClick={showHandler}>{show ? "Hide solution" : "Show the solution"}</button>
            </div>
            {show
                ? <div className={s.answer}>
                    [{resultMaze}]
                  </div>
                : null}

        </div>
    )
}