const CANVAS_SIZE = [600, 600];
const SNAKE_START = [
    [8, 7],
    [8, 8]
];
const FOOD_START = [8, 3];
const SCALE = 40;
const SPEED = 500;
const DIRECTIONS = {
    38: [0, -1], // up
    40: [0, 1], // down
    37: [-1, 0], // left
    39: [1, 0] // right
};

export {
    CANVAS_SIZE,
    SNAKE_START,
    FOOD_START,
    SCALE,
    SPEED,
    DIRECTIONS
};