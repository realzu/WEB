// "no-unused-vars": "off",
// "@typescript-eslint/no-unused-vars" : ["error"]


// 타입: string, number, boolean, null, undefined, bidint, [], {} 등
let 이름1 :string = 'Kim';
let 이름2 :string[] = ['Kim', 'Park'];   //문자열 배열

let 이름3 :{ name? : string} = { name : 'kim' }  //객체  // ?은 속성 사용여부 불확실
    // 변수? :number는 사실상 변수 :number|undefined와 같음
let 회원들 :{user1 : string, user2: string} = {user1 : 'kim', user2: 'park'}

let 회원 = 'hj' //타입 지정 자동임(생략가능)

// 과제
let 내이름 = 'hyunju'
let 나이 = 25
let 출생지역 = '서울'
let song :{title :string, singer :string} = {title : 'idea', singer : 'taemin'}
let project :{member : string[], days : number, started : boolean} = {
    member : ['kim', 'park'],
    days : 30,
    started : true
}


let 이름4 :string[] | number = 123; //Union type: 다양한 타입가능(타입 2개이상 합친 새로운타입) (ex.문자배열 또는 숫자)
let 유저 :(number | string)[] = [1, '2', 3]
let 오브젝트 :{ a : string | number} = { a : '123'}

let 이름 :any; //모든 자료형 허용 --사실상 타입실드 해제문법(=JS변수)
// let 취미 :unknown;  //모든 자료형 허용 (any보다 안전)
// let 변수1 :string = 취미;   --X. 막아줌
let 변수1 :string = 이름;   //얜 any가 뚫음

let age :string|number; //유니온타입은 새로운타입이므로 -> string+1, number+1 (O) / string|number+1(X)
// age + 1; --X
let age1 :unknown = 1;  //숫자타입이어야 연산가능(any,int,bigint)
// age1 - 1; --X

// 과제
let user :string = 'kim';
let age2 :undefined|number = undefined;
let married :boolean = false;
let 철수 :(string| undefined|number | boolean)[]= [user, age2, married];
let 학교 :{score :(number|boolean)[], teacher :string, friend :string|string[]} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]


type 내타입 = string | number   //Type alias: 타입은 변수에 담을수있음
let 이름5 :내타입 = 123;

function 함수(x? :number) :number {   //함수 파라미터,return타입지정. ?는 파라미터가옵션일때(넣던말던). 괄호옆타입은 return꺼   --함수매개변수던 변수에 타입안쓰면 any처리(=안했을경우) 
    // return x * 2 
    return 2
}
함수(12)
function 함수1(x :number) :void { //함수 void처리. 또는 비워도됌
    let num = 1 + 1   //return(x)
}

// 과제
function sayHi(x? :string) :void{    //★ ?로 옵션처리
    if (x) {
        console.log('안녕하세요' + x)
    } else{
        console.log('이름이 없습니다')
    }
}
function count(x :string|number) :number {
    return x.toString().length  //★toString: 숫자를 문자로 변환
}
function 결혼가능(salary :number, house :boolean, appeal :string) :(string|void){
    let score :number = 0;
    score += salary; //1 * salary는 salary가 0일경우 0
    if (house === true){
        score += 500;
    }
    if (appeal === '상'){
        score += 100;
    }
    if (score >= 600){
        return '결혼가능'
    }
}
console.log(결혼가능(100, true, '상'))


type Member = [number, boolean];    //array에서 쓸수있는 tuple 타입
let john :Member = [123, true]

type Member2 = {
    [key :string] : string  //글자로된 모든 object속성 타입은 : string
}
let john1 :Member2 = { name : 'Kim', age : '25'}

class User {
    name;
    constructor(name :string){
        this.name = name;
    }
}


// Type Narrowing : 타입이 하나로 아직 확정되지않은경우(= union type) -> if문 등으로 Narrowing. 타입을 하나로 정해줌
    //Narrowing 판정 문법: typeof 변수, 속성명 in 오브젝트자료, 인스턴스 instanceof 부모
function 내함수(x :number|string) {
    if (typeof x === 'string'){ //typeof는 ''string으로 반환
        return x + '1'
    }else {
        return x + 1
    }
}
내함수(123)

function 내함수1(x :number|string){
    let array :number[] = []
    array[0] = x as number; //assertion문법 (if문 필요가없음)
}
// assertion) 어떤타입이 들어올지 100%알때 사용 : number|string이면 둘 중 하나는 들어오니
// but 보통 if문쓰지. 웬만하면 디버깅/임시용 정도로 사용

// 과제
function cleaning(x :(number|string)[]) {   
    let 클리닝완료 :number[] = [];
    
    x.forEach((b) => {  //★forEach, parseFloat
        if (typeof b === 'string'){
            클리닝완료.push(parseFloat(b))
        }else {
            클리닝완료.push(b)
        }
    })
    return 클리닝완료
}
console.log(cleaning([123, '3']))

function 과목(x :{subject: string|string[]}) :string {
    if (typeof x.subject === 'string'){     //★x.subject
        return x.subject
    }else if(Array.isArray(x.subject)) { //★Array.isArray(x.subject)
        return x.subject[x.subject.length - 1]
    }else {
        return '없음'
    }
}
console.log(과목( {subject : ['math', 'english']}))

export {}