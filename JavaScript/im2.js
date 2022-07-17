// @ 객체메소드(Object methods), 계산된 프로퍼티

// 계산된 프로퍼티(Computed property)
let a = 'age';

const user = {
    name : 'Mike',
    [a] : 30,    // age : 30
    [1 + 4] : 5,    //식 가능
    ['안녕' + '하세요'] : 'Hello',
}

function makeObj(key, val){
    return {
        [key] : val,
    };
}
const obj = makeObj('name', '이태민'); //{ name: '이태민' }

// Object.assign() : 객체 복제  --단순히 =로 복사하면 주소가 복사되어 복제값을 바꾸면 원본값도 바뀜
const newUser = Object.assign({}, user);    //{}는 초기값
newUser.name = 'Tom';
// console.log(user.name); //Mike  // newUser != user

Object.assign({gender : 'female'}, user);   //gender + user
Object.assign({name : 'Tom'}, user);   //같은속성이라면 덮어쓰기됌(user로)

const info = {
    name : 'Mike'
}
const info1 = {
    age : 30
}
const info2 = {
    gender : 'Mike'
}
Object.assign(info, info1, info2)   //info로 info1,2 다 들어감


// Object.keys() : 키 배열 반환
Object.keys(user); //['name', 'age', 'gender']
// Object.values() : 값 배열 반환
Object.values(user); //['Mike', 30, 'female']
// Object.entries() : 키/값 배열 반환
Object.entries(user); //[[ 'name', 'Mike' ], [ 'age', 30 ]]
// Object.fromEntries() : 키/값 배열을 객체로
const arr = [
    ['name', 'Mike'],   //key, value
    ['age', 30]
]
Object.fromEntries(arr); //{ name: 'Mike', age: 30 }



// @ 심볼 (Symbol)
// property key : 문자형
const pk = {
    1 : '1입니다',
    false : '거짓'
} 
// object.keys(pk); //['1', 'false'] -- key에 ''따옴표(문자형)처리안해도, 문자형
// pk['1'] // '1입니다'


// Symbol : 유일성 보장 (유일한 프로퍼티 사용하고 싶을 때 심볼 사용)
const x = Symbol();
const y = Symbol();
// x === y; //false
// x == y; //false

const id = Symbol('id');
const id2 = Symbol('id');
// id != id2    -- symbol은 이름이 같아도 다른 존재

const user3 = {
    name : 'hj',
    [id] : 'myid'
}
// console.log(user3) // { name: 'hj', [Symbol(id)]: 'myid' }
console.log(user3[id]) // myid

// Object.keys/values/entries, for..in 은 sybmol 건너띔

// Symbol.for() : 전역 심볼
// 하나의 심볼 보장, 없으면 만들고 있으면 가져옴
// Symbol 함수는 매번 다른 Symbol값 생성하지만, .for는 키를 통해 같은 Symbol값 공유
const id3 = Symbol.for('id');
const id4 = Symbol.for('id');
// id === id2    -- true
Symbol.keyFor(id3) // 'id' -- 심볼이름확인. 전역심볼만 keyFor 가능
id2.description; //'id' -- 일반심볼 시 가능

//ex 사용 예시
// 다른 개발자가 만들어 놓은 객체
const person = {
    name : 'hj',
    age : 25
};

// 내가 작업
// person.showName = function() {}; //이렇게 하면 사용자에게 노출됌
const showName = Symbol('show name');
person[showName] = function() {
    console.log(this.name)
};
person[showName] () ;

// 사용자가 접속하면 보이는 메세지
for (let key in person) {
    console.log(`Her ${key} is ${person[key]}.`);
}



// @ 숫자, 수학 method (Number, Math)
// toString() : 자료형 타입을 숫자에서 문자로 바꿔주는 기능뿐만 아니라, 10진수의 숫자를 2진수 또는 16진수로 바꾼다.
let su = 10;
su.toString(); //'10'
su.toString(2); //'1010'


let su2 = 255;
su2.toString(16); //'ff'


// Math
Math.PI //원주율 3.141592653589793

let num1 = 5.1;
let num2 = 5.7;

// 올림
Math.ceil(num1); //6
Math.ceil(num2); //6

// 내림
Math.floor(num1); //5
Math.floor(num2); //5

// 반올림
Math.round(num1); //5
Math.round(num2); //6

// 소수점 둘째자리까지 표현 (셋쩨 자리에서 반올림)
let userRate = 30.1234;
Math.round(userRate * 100) / 100
userRate.toFixed(2); //'30.12'
userRate.toFixed(0); //'30' (정수만 남음)
Number(userRate.toFixed(2)); //30.12

// isNaN()
let f = Number('x'); //NaN
isNaN(f) //true
isNaN(3) //false

// parseInt() : 문자열을 정수로 바꿔줌
let margin = '10px';
parseInt(margin); //10
Number(margin); //NaN
    // 읽다가 문자열 만나면 반환함. so, 문자열부터 시작하면 못읽어서 NaN반환
let color = 'f3';
parseInt(color); //NaN
parseInt(color, 16); //243 --16진수로 변환(이 때는 3 인식)
parseInt('11', 2); //3

// parseFloat() : 문자열을 소수로 바꿔줌
let padding = '18.5%';
parseInt(padding); //18
parseFloat(padding); //18.5

// Math.random()
Math.random()
Math.floor(Math.random() * 100) + 1 //1~100사이의 숫자 뽑기

// Math.max(), Math.min()
Math.max(1, 4, 10, -1, 2.24) //10
Math.min(1, 4, 10, -1, 2.24) //-1

// Math.abs() : 절대값
Math.abs(-1) //1

// Math.pow(n, m) 제곱
Math.pow(2, 10); //1024

// Math.sqrt() : 제곱근
Math.sqrt(16) //4