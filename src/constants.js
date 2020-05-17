const CANVAS_SIZE = [600, 600];
const SNAKE_COLOR = '#ec407a';
const FOOD_COLOR = '#81c784';
const SNAKE_START = [
    [8, 7],
    [8, 8]
];
const FOOD_START = [8, 3];
const SCALE = 40;
const SPEED = 200;
const DIRECTIONS = {
    40: [0, 1], // down
    39: [1, 0], // right
    38: [0, -1], // up
    37: [-1, 0] // left
};

export {
    CANVAS_SIZE,
    SNAKE_COLOR,
    FOOD_COLOR,
    SNAKE_START,
    FOOD_START,
    SCALE,
    SPEED,
    DIRECTIONS
};