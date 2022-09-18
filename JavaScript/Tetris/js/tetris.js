import BLOCKS from "./blocks.js"

// DOM
const playground = document.querySelector(".playground > ul");
const gameText = document.querySelector(".game-text");
const scoreDisplay = document.querySelector(".score");
const restartButton = document.querySelector(".game-text > button");

// Setting
const GAME_ROWS = 20;
const GAME_COLS = 10;

// variables
let score = 0;
let duration = 500;
let downInterval;
let tempMovingItem;

const movingItem = {
    type: '', //랜덤요소
    direction: 3,
    top: 0,
    left: 0,
};

init()

// functions
function init(){
    tempMovingItem = { ...movingItem }; //...를 통해 값만 가져옴(안그러면 원본값 변화)
    
    for (let i=0; i<GAME_ROWS; i++){
        prependNewLine()
    }
    generateNewBlock()
}

function prependNewLine(){
    const li = document.createElement("li");
    const ul = document.createElement('ul');
    for (let j=0; j<GAME_COLS; j++){
        const matrix = document.createElement('li');
        ul.prepend(matrix);
    }
    li.prepend(ul);
    playground.prepend(li);
}

function renderBlocks(moveType=''){ //moveType안보냈으면 빈값으로 초기화
    const { type, direction, top, left } = tempMovingItem;
    const movingBlocks = document.querySelectorAll('.moving');
    movingBlocks.forEach(moving => {
        moving.classList.remove(type, 'moving'); //지워지면서 css도 적용x
    })
    BLOCKS[type][direction].some(block => { //forEach는 중간에멈출수없어서 some
        const x = block[0] + left;
        const y = block[1] + top;
        const target = playground.childNodes[y] ? playground.childNodes[y].childNodes[0].childNodes[x] : null; //삼항연산자
        const isAvailable = checkEmpty(target);
        if (isAvailable) {
            target.classList.add(type, 'moving');
        } else {
            tempMovingItem = {...movingItem} //좌표 원상태
            if(moveType === 'retry'){
                clearInterval(downInterval);
                showGameoverText()
            }
            setTimeout(() => { //이벤트루프에 예약된 이벤트 실행 후 진행
                renderBlocks('retry'); //재귀함수
                if(moveType === 'top'){ //떨어지는중
                    seizeBlock();
                }
            }, 0) //0초여도 ㅇㅇ
            return true; //빈값이면 나머지3개는 안돌리고 재렌더
        }
    })
    movingItem.left = left;
    movingItem.top = top;
    movingItem.direction = direction;
}

function seizeBlock(){ //바닥에닿았을때
    const movingBlocks = document.querySelectorAll('.moving');
    movingBlocks.forEach(moving => {
        moving.classList.remove('moving');
        moving.classList.add('seized');
    })
    checkMatch();
}

function checkMatch(){
    const childNodes = playground.childNodes;
    childNodes.forEach(child => {
        let matched = true;
        child.children[0].childNodes.forEach(li => {
            if(!li.classList.contains('seized')){
                matched = false;
            }
        })
        if(matched){ //한줄 완성시
            child.remove();
            prependNewLine();
            score ++;
            scoreDisplay.innerText = score;
        }
    })
    generateNewBlock();
}

function generateNewBlock(){ //블럭생성
    clearInterval(downInterval);
    downInterval = setInterval(() => {
        moveBlock('top', 1);
    }, duration)

    const blockArray = Object.entries(BLOCKS);
    const randomIndex = Math.floor(Math.random() * blockArray.length);

    movingItem.type = blockArray[randomIndex][0]
    movingItem.top = 0;
    movingItem.left = 3;
    movingItem.direction = 0;
    tempMovingItem = {...movingItem};
    renderBlocks();
}

function checkEmpty(target){
    if(!target || target.classList.contains('seized')) { //contains:~클래스갖고있는지
        return false;
    }
    return true;
}

function moveBlock(moveType, amount){
    tempMovingItem[moveType] += amount;
    renderBlocks(moveType)
}

function changeDirection(){
    const direction = tempMovingItem.direction;
    direction === 3 ? tempMovingItem.direction = 0 : tempMovingItem.direction += 1;
    renderBlocks();
}

function dropBlock(){ //스페이스바누르면 빠르게내려옴
    clearInterval(downInterval);
    downInterval = setInterval(() => {
        moveBlock('top', 1)
    }, 10) //10의속도
}

function showGameoverText(){
    gameText.style.display = 'flex'
}

// event handling
document.addEventListener('keydown', e => {
    switch(e.keyCode){
        case 39:
            moveBlock('left', 1);
            break;
        case 37:
            moveBlock('left', -1);
            break;
        case 40:
            moveBlock('top', 1);
            break;
        case 38:
            changeDirection();
            break;
        case 32: //스페이스바
            dropBlock();
            break;
        default:
            break;
        
    }
})

restartButton.addEventListener('click', () => {
    playground.innerHTML = ''; //초기화
    gameText.style.display = 'none'
    init();
})