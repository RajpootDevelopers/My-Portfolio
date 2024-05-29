let mouseMove = false;

const pointer = {
    x : .5 * window.innerWidth,
    y : .5 * window.innerHeight
}
const params = {
    pointsNumber : 40,
    widthFactor : .3,
    mouseThreshold : .6,
    spring : .4,
    friction : .5
};

function updateMousePosition(eX, eY) {
    pointer.x = eX;
    pointer.y = eY;
}
setupCanvas();
update(0);
window.addEventListener("resize", setupCanvas);
