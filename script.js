const Player = document.querySelector(".player");
const Cherry = document.querySelector(".cherry");

const ScoreNumber = document.querySelector("#scoreNumber");

const keys = {}
let playSpeed = 5.0;

let Score = 0;


document.addEventListener("keydown", (e) => keys[e.key] = true);
document.addEventListener("keyup", (e) => keys[e.key] = false);


let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;




// GAME SETUP FUNCITONS CALLS :

setCherry();


// MAIN GAME LOOP :

function gameLoop() {
    let {x, y} = getPosition(Player);

    playSpeed += Score * 0.0005;

    if(keys["ArrowUp"] || keys["w"])        y -= playSpeed;
    if(keys["ArrowDown"] || keys["s"])      y += playSpeed;
    if(keys["ArrowLeft"] || keys["a"])      x -= playSpeed;
    if(keys["ArrowRight"] || keys["d"])     x += playSpeed;

    if(y > screenHeight / 2) y = screenHeight / 2;
    if(y < -1 * screenHeight / 2) y = -1 * screenHeight / 2;
    if(x > screenWidth / 2) x = screenWidth / 2;
    if(x < -1 * screenWidth / 2) x = -1 * screenWidth / 2;

    Player.style.transform = `translate(${x}px, ${y}px)`;



    // When player Collide with the Cherry
    if (Math.abs(CherryPositionX - x) < 45 && Math.abs(CherryPositionY - y) < 45) {
        Score++;
        setCherry();

        while (Math.abs(CherryPositionX - x) < 45 && Math.abs(CherryPositionY - y) < 45) {
            setCherry();
        }

        ScoreNumber.textContent = Score;
    }

    

    requestAnimationFrame(gameLoop);   
}


// MAIN GAME FUNCITON CALL :
requestAnimationFrame(gameLoop);




// SIDE TASKS :






// UTILE FUNCTIONS :

function getPosition(element) {
    const style = window.getComputedStyle(element);
    const matrix = new DOMMatrixReadOnly(style.transform);

    return { x: matrix.m41, y: matrix.m42 };
}


function setCherry(){
    globalThis.CherryPositionX = Math.floor(Math.random() * (screenWidth + 1) - screenWidth / 2);
    globalThis.CherryPositionY = Math.floor(Math.random() * (screenHeight + 1) - screenHeight / 2);

    Cherry.style.transform = `translate(${CherryPositionX}px, ${CherryPositionY}px)`;
}