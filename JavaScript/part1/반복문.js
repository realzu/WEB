// "반복문" 사용해서 퀴즈 해결하기

// 1
var 출석부 = ['흥민', '영희', '철수', '재석'];

function 이름찾기(name){
    출석부.forEach((val) => {
        if (val === name) {
            console.log('있어요');
            return;
        }
    })
}

이름찾기('흥민');

// 2
function 구구단(number) {
    for (let i=1; i<=9; i++) {
        console.log(number * i);
    }
}

for (let i=2; i<=9; i++) {
    구구단(i);
}

// -- @강의답안
for (let i=2; i<=9; i++) {
    for (let k=1; k<=9; k++) {
        console.log(i * k);
    }
}

// 3
function 평균졈수계산기(arr, score) {
    let average = 0;
    
    arr.forEach((num) => {
        average += num;
    })

    average = average / arr.length

    return average < score ? `평균보다 ${score - average}점이 올랐네요` : `평균보다 ${average - score}점이 떨어졌네요`;
}

평균졈수계산기([10, 20, 30, 40, 50], 40);