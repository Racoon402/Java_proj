//유저가 번호를 입력, go라는 버튼을 입력
//번호를 맞추면 정답
//up,down
// reset
// 5번의 기회를 다쓰면 끝
// 범위 밖 숫자를 누르면 예외처리
// 이미 입력한 숫자를 입력하면 예외처리

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chance = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let hist = [];
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
// userInput.addEventListener("focus",function(){
//     userInput.value ="";
// })

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*10) + 1;
    console.log("정답",computerNum);
}


function play(){
    let userValue = userInput.value;
    
    if (userValue<1 || userValue >100){
        resultArea.textContent = "1과 100";
        return;
    }
    if (hist.includes(userValue)){
        resultArea.textContent = "이미 입력";
        return;
    }

    chance --;
    console.log(userValue);
    chanceArea.textContent = `남은기회: ${chance}번`;
    userInput.value = "";

    if(userValue < computerNum){
        resultArea.textContent = "Up"
    }
    else if(userValue > computerNum){
        resultArea.textContent = "Down"
    }
    else{
        resultArea.textContent = "정답"
        gameOver=true;
    }

    hist.push(userValue);
    console.log(hist);
    if (chance<1){
        gameOver = true;
    }

    if (gameOver){
        resultArea.textContent = "실패";
        playButton.disabled = true;
    }
}

function reset(){
    userInput.value = "";
    resultArea.textContent = "결과!";
    playButton.disabled = false;
    chance = 5;
    hist = [];
    chanceArea.textContent = `남은기회: ${chance}번`;
    computerNum = pickRandomNum();
}

pickRandomNum();