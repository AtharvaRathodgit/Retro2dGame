const Player = document.querySelector(".player");
const Cherry1 = document.getElementsByClassName("cherry")[0];
const Cherry2 = document.getElementsByClassName("cherry")[1];
const Cherry3 = document.getElementsByClassName("cherry")[2];

const ScoreNumber = document.querySelector("#scoreNumber");
const ScoreBoard = document.querySelector(".scoreBoard");

const keys = {}
let playSpeed = 5.0;

let Score = 0;


document.addEventListener("keydown", (e) => keys[e.key] = true);
document.addEventListener("keyup", (e) => keys[e.key] = false);


let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;




// GAME SETUP FUNCITONS CALLS :

setCherry1();
setCherry2();
setCherry3();


// MAIN GAME LOOP :

function gameLoop() {
    let {x, y} = getPosition(Player);

    if(playSpeed <= 20)
        playSpeed += Score * 0.00005;

    if(keys["ArrowUp"] || keys["w"])        y -= playSpeed;
    if(keys["ArrowDown"] || keys["s"])      y += playSpeed;
    if(keys["ArrowLeft"] || keys["a"])      x -= playSpeed;
    if(keys["ArrowRight"] || keys["d"])     x += playSpeed;

    if(y > screenHeight / 2)        y = screenHeight / 2;
    if(y < -1 * screenHeight / 2)   y = -1 * screenHeight / 2;
    if(x > screenWidth / 2)         x = screenWidth / 2;
    if(x < -1 * screenWidth / 2)    x = -1 * screenWidth / 2;

    Player.style.transform = `translate(${x}px, ${y}px)`;



    // When player Collide with the Cherry
    // for Cherry 1
    if (Math.abs(Cherry1PositionX - x) < 65 && Math.abs(Cherry1PositionY - y) < 65) {
        Score++;
        setCherry1();

        while (Math.abs(Cherry1PositionX - x) < 65 && Math.abs(Cherry1PositionY - y) < 65) {
            setCherry1();
        }

        ScoreNumber.textContent = Score;
    }
    // for Cherry 2
    if (Math.abs(Cherry2PositionX - x) < 65 && Math.abs(Cherry2PositionY - y) < 65) {
        Score++;
        setCherry2();

        while (Math.abs(Cherry2PositionX - x) < 65 && Math.abs(Cherry2PositionY - y) < 65) {
            setCherry2();
        }

        ScoreNumber.textContent = Score;
    }
    // for Cherry 3
    if (Math.abs(Cherry3PositionX - x) < 65 && Math.abs(Cherry3PositionY - y) < 65) {
        Score++;
        setCherry3();

        while (Math.abs(Cherry3PositionX - x) < 65 && Math.abs(Cherry3PositionY - y) < 65) {
            setCherry3();
        }

        ScoreNumber.textContent = Score;
    }


    // to adjust the ScoreBoard Opacity based on the player position
    // if(x < -1*(screenWidth / 2) + 250 && y > (screenHeight / 2) - 80){
    //     ScoreBoard.style.opacity = 0.5;
    // }

    

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


function setCherry1(){
    globalThis.Cherry1PositionX = Math.floor(Math.random() * (screenWidth + 1) - screenWidth / 2);
    globalThis.Cherry1PositionY = Math.floor(Math.random() * (screenHeight + 1) - screenHeight / 2);

    Cherry1.style.transform = `translate(${Cherry1PositionX}px, ${Cherry1PositionY}px)`;


    if(Cherry1PositionX < -1*(screenWidth / 2) + 250 && Cherry1PositionY > (screenHeight / 2) - 80){
        ScoreBoard.style.opacity = 0.5;
    }
}

function setCherry2(){
    globalThis.Cherry2PositionX = Math.floor(Math.random() * (screenWidth + 1) - screenWidth / 2);
    globalThis.Cherry2PositionY = Math.floor(Math.random() * (screenHeight + 1) - screenHeight / 2);

    Cherry2.style.transform = `translate(${Cherry2PositionX}px, ${Cherry2PositionY}px)`;


    if(Cherry2PositionX < -1*(screenWidth / 2) + 250 && Cherry2PositionY > (screenHeight / 2) - 80){
        ScoreBoard.style.opacity = 0.5;
    }
}

function setCherry3(){
    globalThis.Cherry3PositionX = Math.floor(Math.random() * (screenWidth + 1) - screenWidth / 2);
    globalThis.Cherry3PositionY = Math.floor(Math.random() * (screenHeight + 1) - screenHeight / 2);

    Cherry3.style.transform = `translate(${Cherry3PositionX}px, ${Cherry3PositionY}px)`;


    if(Cherry3PositionX < -1*(screenWidth / 2) + 250 && Cherry3PositionY > (screenHeight / 2) - 80){
        ScoreBoard.style.opacity = 0.5;
    }
}