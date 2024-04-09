//constants and variables
let inputDir = {x:0,y:0}
const movesound = new Audio("js/move.mp3")
const gameoversound = new Audio('js/gameover.mp3')
const foodsound = new Audio('js/food.mp3')
const musicsound = new Audio('js/music.mp3')
let speed = 15;
let score = 0;
let lastPaintTime=0;
let snakeArr = [{x:13, y:15}];
 food = {x:8, y:6};





//Game functions
function main(ctime){
    window.requestAnimationFrame(main)    
    //console.log(ctime)
    if ((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}
function isCollide(sarr){
    //if you bump into yourself
    for (let i = 1; i < snakeArr.length; i++) {
        if(snakeArr[i].x === snakeArr[0].x && snakeArr[i].y === snakeArr[0].y){
            return true;
        };
    }
    //if you collide with wall{
        if(snakeArr[0].x >=18 || snakeArr[0].x <=0 || snakeArr[0].y >=18 || snakeArr[0].y <=0){
            return true;
        };
    }


function gameEngine(){
    //Part 1:updationg the snake array & food
    if(isCollide(snakeArr)){
        gameoversound.play();
        musicsound.pause();
        inputDir = {x:0, y:0 } ;
        alert("Game over, press any key to restart the game")
        snakeArr = [{x:13, y:15}];
        musicsound.pause();
        score = 0;
    }
    //if you have eaten the food increment the score and increment body length
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        foodsound.play()
        score += 1;
        if(score>hiscoreval){
            hiscoreval = score ;
            localStorage.setItem('hiscore', JSON.stringify(hiscoreval));
            HscoreBox.innerHTML = "Highscore=" + hiscoreval;
        }
        scorebox.innerHTML = "Score:" + score;
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y })
        let a=2;
        let b=16;
        food = {x: Math.round(a + (b - a)*Math.random()), y: Math.round(a + (b - a)*Math.random())}
    }
    //moving the snake
    for (let i = snakeArr.length - 2; i >=0; i--) {
snakeArr[i+1]= {...snakeArr[i]};       
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;
    //part 2:display the snake and food
    //snake
    board.innerHTML = "";

    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
        });
        //food
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food')
        board.appendChild(foodElement);
        

}

//game logic
let hiscore = localStorage.getItem("hiscore");
if(hiscore === null){
    hiscoreval=0;
    localStorage.setItem('hiscore', JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore);
    HscoreBox.innerHTML = "HighScore:" + hiscore;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown', e=>{
    inputDir = {x:0, y:1} //start the game
    movesound.play();
    musicsound.play();
    switch(e.key){
        case "ArrowUp":
        console.log("ArrowUp")
        inputDir.x=0;
        inputDir.y=-1;
        break;
        case "ArrowLeft":
        console.log("ArrowLeft")
        inputDir.x=-1;
        inputDir.y=0;
        break;
        case "ArrowRight":
        console.log("ArrowRight")
        inputDir.x=1;
        inputDir.y=0;
        break;
        case "ArrowDown":
        console.log("ArrowDown")
        inputDir.x=0;
        inputDir.y=1;
        break;
        
    } 
})
