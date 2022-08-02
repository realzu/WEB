// "no-unused-vars": "off",
// "@typescript-eslint/no-unused-vars" : ["error"]

// type alias: 별칭
type Animal = string | number | undefined;
let 동물 :Animal = 'cat';

type AnimalType = { name :string, age :number}     // object
let 동물1 :AnimalType = { name : 'kim', age : 20}

// const : 바꿀수없음(등호 재할당 막음) 
const 출생지역 = 'seoul';
const 출생지역1 = { region : 'seoul'};
출생지역1.region = 'busan' //but, const로 담은 object 수정 가능

// 위의 내용 막는 방법
type Boyfriend = {
    readonly name : string // readonly: 읽기전용(자료수정x)
}
const 남친 :Boyfriend = {
    name : 'minhyun'
} // 이제 남친.name = 'taemin' --변경x



// Literal Type
let 이름 :'kim' | 'park'

function 함수(a : 'hello') :1 | 0{
    return 1
}
함수('hello')

var 자료 = {
    name : 'kim'
} as const
function 내함수(a : 'kim'){
}
// 내함수(자료.name) --X(자료의타입은 string VS kim이라는타입)   ->     as const(OK)


// 함수 type alias
type 함수타입 = (a :string) => number; // let 함수 :함수타입 = function (){ }

type Member = { //methods안에 타입지정 : object 안에 함수만들기
    name : string,
    plusOne : (x :number) => number,
    changeName : () => void
}
let 회원정보 :Member= {
    name : 'kim',
    plusOne(a) { return a },
    changeName : () => {}
}


// class 만들때 타입지정
class Person {
    name :string;
    constructor(a :string){
        this.name = a
    }
    // 함수(b :string) {}
}
// Person.prototype.함수 = function(){}

let 사람1 = new Person('kim');


// interface
interface Square {color : string, width : number}

let 네모 :Square = { color : 'red', width : 100}

interface Stu {name : 'string'}
interface Tea extends Stu {age : number} //extends

type Animals = {name : string}
type Cat = {age : number} & Animals


export {}