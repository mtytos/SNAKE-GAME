import React, {useState, useRef, useEffect} from 'react';
import { useInterval } from './useInterval';
import {
    CANVAS_SIZE,
    SNAKE_START,
    FOOD_START,
    SCALE,
    SPEED,
    DIRECTIONS
} from './constants';

const App = () => {

    const canvasRef = useRef();
    const [snake, setSnake] = useState(SNAKE_START);
    const [food, setFood] = useState(FOOD_START);
    const [dir, setDir] = useState([0, -1]);
    const [speed, setSpeed] = useState(1000);
    const [gameOver, setGameover] = useState(false);

    const startGame = () => {

    }

    const moveSnake = ({ keyCode }) => {
        keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode])
    }

    const gameLoop = () => {
        const snakeCopy = JSON.parse(JSON.stringify(snake));
        const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
        snakeCopy.unshift(newSnakeHead);
        snakeCopy.pop();
        setSnake(snakeCopy);

    }

    useEffect(() => {
        const context = canvasRef.current.getContext('2d');
        context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
        context.clearRect(0,0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
        context.fillStyle = 'lightgreen';
        snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
        context.fillStyle = 'brown';
        context.fillRect(food[0], food[1], 1, 1);
    }, [snake, food, gameOver])

    useInterval(() => gameLoop(), speed);

    return (
        <div role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>
            <canvas
                style={{ border: "1px solid black" }}
                ref={canvasRef}
                width={`${CANVAS_SIZE[0]}px`}
                height={`${CANVAS_SIZE[1]}px`}
            />
            {gameOver && <div>GAME OVER!</div>}
            <button onClick={startGame}>Start Game</button>
        </div>
    );
}

export default App;
