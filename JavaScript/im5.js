// @setTimeout / setInterval
// setTimeout: 일정시간이 지난 후 함수 실행
setTimeout(function(){
    console.log(3)
}, 3000);

function showName(name){
    console.log(name);
}
setTimeout(showName, 3000, 'Mike'); //함수,시간,인자    

setTimeout(showName, 0, 'Mike'); //순서2)  0이어도 밑에 코딩이있으면 바로 안찍힘
console.log(1); //순서1

// clearTimeout(tId); //예정된 작업 없앰(스케줄링 수정)

// setInterval: 일정시간 간격으로 함수 반복
// const tId = setInterval(showName, 3000, 'Mike');
// clearInterval(tId);


let num = 0;

function showTime() {
    console.log(`접속하신지 ${num++}초가 지났습니다`);
    if (num > 5){
        clearInterval(tId);
    }
}
const tId = setInterval(showName, 1000);


// call, apply, bind
// call : 메서드는 모든 함수에서 사용할 수 있으며, this를 특정 값으로 지정 가능
const mike = {
    name: 'Mike'
}
const Tom = {
    name: 'Tom'
}
function showThisName(){
    console.log(this.name)
}
showThisName(); // ' '
showThisName.call(mike); // 'mike'
showThisName.call(Tom);

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}
update.call(mike, 1998, 'singer'); // 첫번째매개변수=this로사용될값, 두번째이후는 함수로 사용될 매개변수들
console.log(mike)


// apply : 매개변수를 배열로 받음
update.apply(mike, [1998, 'singer']);

const nums = [3,10,1,6,4];
const minNum = Math.min.apply(null, nums); //Math함수라 this필요x니 null
const maxNum = Math.max.call(null, ...nums); //배열로안받으니 ...spread연산자


// bind : 함수의 this값 영구히 바꿈
const updateMike = update.bind(mike);
updateMike(1995, 'police');
console.log(mike)



// @ 상속, 프로토타입(Prototype)
const car = {
    wheels: 4,
    drive(){
        console.log('drive...');
    }
};
const bmw = {
    color: 'red',
    navigation: 1,
};
const audi = {
    color: 'blue'
};
// bmw.__proto__ = car; // car를 상속
audi.__proto__ = car;

bmw.prototype.wheels = 4; //위 대신 이렇게도 가능

console.log(bmw.wheels); //bmw객체 내 없으면 proto확인  --prototype chain 객체 계속 연결
// hasOwnProperty 는 객체가 가지고있는것만 반환(true) (proto X)