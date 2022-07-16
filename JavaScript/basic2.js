// @ 함수의 기초

// 매개변수x
function showError(){
    console.log('에러가 발생했습니다. 다시 시도해주세요.');
}
// showError();


// 매개변수o
function sayHello(name){
    const msg = `Hello, ${name}`;
    console.log(msg);
}
// sayHello('Mike');


let msg = 'Hello';  //밑에서 if조건해당 시 내용변경되니 const->let //전역 변수 (flobal variable)
console.log('함수 호출 전')
console.log(msg)

function sayHello(name){
    if(name){
        msg += `, ${name}`;
    }        
    console.log('함수 내부')
    console.log(msg); //지역 변수 (local variable)
} //msg는 지역변수이므로 함수 안에서만 사용

sayHello('Mike');
console.log('함수 호출 후')
console.log(msg);   //변경된 msg 출력


// default value
// 1) or 연산 기능으로 매개변수 입력x 시 처리
// function sayHi(type){
//     let newType = type || 'friend';
// 2) 매개변수에 = 으로 처리
function sayHi(type = 'friend'){
    let msg = `Hi, ${type}`;
    console.log(msg)
}

sayHi();
sayHi('sister');


// return 으로 값 변환
function add(num1, num2){
    return num1 + num2;
}
const result = add(2,3);
console.log(result);



// @ 함수 표현식
let sayHello = function(){
    console.log('Hello');
}


// @ 화살표 함수
let add = (num1, num2) => num1 + num2;



// @ 객체
const superman = {
    name : 'clark',
    age : 33,
}

/* Object - 접근, 추가, 삭제
접근 : superman.name / superman['age']
추가 : superman.gender = 'female'; / superman['hairColor'] = 'black';
삭제 : delete superman.hairColor;
*/

/* Object - 단축 프로퍼티 (같으면 생략 가능)
const superman = {
    name,   //name : name,
    age     //age : age,
}
*/

/* Object - 프로퍼티 존재 여부 확인
superman.birthDay;  //undefined
'birthDay' in superman;     //false (<->true)
*/

console.log(superman.age)
superman.hairColor = 'black';
superman['habby'] = 'football';
delete superman.age;
console.log(superman)


function makeObject(name, age) {
    return {
        // name : name,
        // age : age,
        name,
        age,
        hobby : 'football'
    };
}

const Mike = makeObject('Mike', 20)
console.log(Mike);

console.log('age' in Mike)


function isAdult(user) {
    if (!('age' in user) || user.age < 20) {
        return false;
    }   //age속성 없으면 undefined라 false되면서 여길 패스하게되니 in을 통해 있는지도 확인
    return true;
}

console.log(isAdult(Mike))

const Jane = {
    name : 'Jane'
}
console.log(isAdult(Jane))  //undefined라 

for(x in Mike){ //Mike의 속성들 = x
    console.log(x)  //key
    console.log(Mike[x])    //value
}



// 객체(Object) - method, this
// method : 객체 프로퍼티로 할당된 함수
// this : 호출한 함수의 객체를 의미 (!!화살표함수는 this(X). 내부에서 this사용 시 그 this는 외부에서 가져온것)

let boy = {
    name: 'Mike',
    showName: function(){
        console.log(this.name)  //this는 자신을호출하고있는 객체명을 의미함
    }
}

boy.showName();

let man = boy;
boy = null;

man.showName(); //해당함수내에서 boy.name이라 하면 제대로x



// @ 배열 (Array)
// 문자, 숫자, 객체, 함수 등 포함 가능
let arr = [
    '현주',
    3,
    true,
    {
        name : 'hj',
        age : 25,
    },
    function(){
        console.log('test');
    }
]

/*
length : 배열의 길이
push('a') : 배열 끝에 추가
pop() : 배열 끝 요소 제거

unshift('a') : 배열 맨 앞에 추가
shift() : 배열 맨 앞을 제거
*/

let days = ['mon', 'tue', 'wed'];

// days[1] = '화요일';
days.push('thu');
days.unshift('sun');


// console.log(days);
// console.log(days.length);

for (let y of days) {
    console.log(y);
}