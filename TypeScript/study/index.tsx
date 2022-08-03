// import { Age } from "./test.d";
// import * as a from "./test.d";

// let age :Age;

// rest parameter
function 함수(...a :number[]){
    console.log(a)
}
함수(1,5,3,2,6) //[]로 처리

// destructuring  
function 함수1({student, age}){ }
함수1({ student : true, age : 20})

// Narrowing
function 함수2(a :string | undefined){
    if (a && typeof a === 'string'){ } //&& -> string이면 조건문실행
}

type Fish = {swim :string}
type Bird = {fly :string}
function 함수3(animal :Fish | Bird){
    if ('swim' in animal){ } //in -> Fish타입검사
}

let 날짜 = new Date()
if (날짜 instanceof Date){ } //instanceof


// Never type
function 함수4() :never{
    throw new Error() //강제에러발생(코드실행중단) = 함수끝나진않음
    // while(true){ } //무한히 반복
}


// Generic
function 함수5<MyType>(x :unknown[]) :MyType{ //<MyType, MyType2> 여러개가능
    return 
}
let a = 함수5<number>([4,2])
let b = 함수5<string>(['4', '2']) //확장성

function 함수6<MyType extends number >(x :MyType) { //extends : 타입파라미터 제한
    return 
}
let c = 함수6<number>(100)

interface LengthCheck { //커스텀
    length : number
}
function 함수7<MyType extends LengthCheck >(x :MyType) {
    return x.length
}
함수7<string[]>(['100'])
