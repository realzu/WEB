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



// @ Class
class User2 {
    constructor(name, age){ //생성자
        this.name = name;
        this.age = age;
    }
    showName1() { //클래스 내 정의한 메서드는 프로토타입
        console.log(this.name);
    }
}
const hyunju = new User2('hyunju', 20); //객체생성


// extends 상속
class Car {
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive() {  //클래스내부에서 선언한 메소드는 프로토타입 내부로 들어감
        console.log('drive..');
    }
    stop(){
        console.log('STOP!');
    }
}
class Bmw extends Car { //클래스내부에서 선언한 메소드는 프로토타입 내부로 들어감
    constructor(color) {
        super(color); //생성자 오버라이딩 - 이미 부모가 만든 생성자에 더함 (매개변수 똑같이)
        this.navigation = 1;
    }
    park() {
        console.log('PARK');
    }
    stop(){
        super.stop();   //메소드 오버라이딩("super") -> 부모의 stop() 호출
        console.log('OFF'); //자신의 stop()
    }
}
const z4 = new Bmw('blue');



// @ Promise
/*
const pr = new Promise((resolve(성공), reject(실패)) => { 
    //code
});
- callback 함수 : 완료된이후 실행되는 함수
new Promise [state: pending(대기), result: undefined]
-> resolve(value) [state: fulfilled(이행됌), result: value]
-> rejest(error) [state: rejected(거부됌), result: error] 
 */
const pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('ok');
        // reject(new Error('err...'));
    }, 3000)
});

// 위의 함수에서 정상 혹은 에러 시 밑의 방법들
// 1번 : then
pr.then(
    function(result){}, //이행됐을 때 실행
    function(err){}, //거부됐을 때 실행
);
// 2번 : catch(에러는 catch로 처리. 더 가독성 좋음)
pr.then(
    function(result){}
).catch(
    function(err){}
).finally(  // 3번 : finally (여부 상관없이 무조건 실행)
    function(){
        console.log('--주문 끝--')
    }
)

console.log('시작');

pr.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log('끝');
});


const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('1번 주문완료');
        }, 1000);
    });
};
const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('2번 주문완료');
            // rej('xxx'); //rej면 3번넘어가지않고 finally후 끝
        }, 3000);
    });
};
const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('3번 주문완료');
        }, 2000);
    });
};

// 프로미스 체이닝 (Promises chaining)
console.log('시작');
f1()
    .then((res) => f2(res))
    .then((res) => f3(res))
    .then((res) => console.log(res))
    .catch(console.log)
    .finally(() => {
        console.log('끝');
    });

// Promise.all  --배열로 받음 (중간에 reject발생 시 에러. 즉, 다 보여주거나 안보여줄 때 사용)
console.time('x'); //시간재기 시작
Promise.all([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd('x'); //시간끝
}); //cf) 모든작업 완료될 때까지 기다림

// Promise.race -- 하나라도 1등으로 끝내면 끝남
console.time('x'); //시간재기 시작
Promise.race([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd('x'); //시간끝
}); //cf) 1번 끝나면 끝



// @ async, await
// async : promise사용됌
async function getName() {
    // return 'hyunju';
    return Promise.resolve('taemin');
    // throw new Error('err...');
}

getName().then((name) => {
    console.log(name);
}).catch((err) => {
    console.log(err);
})

// await : async 함수 내부에서만 사용
async function showName2() {
    const result = await getName('minhyun');    //await은 getName의 결과 반환될때까지 기다림 -> so, 1초 후 시작
    console.log(result);
}
showName2();


async function order() {
    try {   //에러없으면 try-catch문 안써줘도됌
        const result1 = await f1();
        const result2 = await f2(result1);
        const result3 = await f3(result2);
        // const result = await Promise.all([f1(), f2(), f3()]); -- Promise.all도 가능
        console.log(result3);
    } catch (e) {   //에러처리해줘서 종료까지 정상적 진행(중간에 에러표시나긴함)
        console.log(e);
    }    
    console.log('종료');
}
order();



// @ Generator : 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
function* fn() {    // *을 사용
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    yield 3;
    return 'finish';
}
const a = fn();
// a.next(); : 가장 가까운 yield문 만날때까지 실행 후 데이터 객체 반환  (여러번할수록 밑으로 내려감)
//   {value: 1, done: false} : value는 만난 yield 오른쪽의 값(생략시 undefined) / done: 함수 종료 여부(true/false)
//   {value: 'finish', done: true} --끝났을때

// a.return('end'); : 중간에 실행 시 바로 끝남
//    {value: 'end', done: true}

// a.throw(new Error('err')); : try-catch문으로 위에 묶어줬을 때 catch문 실행됌
//    {value: undefined, done: true}


// iterable: Symbol.iterator 메서드(o). Symbol.iterator 메서드는 iterator 반환해야함
// iterator: next 메서드(o). next 메서드는 value와 done 속성가진 객체 반환해야함. 작업끝나면 done은 true가 됌
const arr = [1,2,3,4,5];    //문자열도 가능
const it = arr[Symbol.iterator](); //undefined  --배열은 Symbol.iterator 메서드를 가지고 있음
it.next(); //{value: 1, done: false} --반복할때마다 value2->3->결과.. 반환됌


// next()에 인수 전달
function* fn1() {
    const num1 = yield '첫번째 숫자 입력하세요';
    console.log(num1);

    const num2 = yield '두번째 숫자 입력하세요';
    console.log(num2);

    return num1 + num2;
}
const b = fn2();
b.next(); //{value: '첫번째 숫자 입력하세요', done: false}
b.next(2); //{value: '두번째 숫자 입력하세요', done: false}
b.next(4); //{value: 6, done: true}


// Generator: 값을 미리 만들어 두지 않음
function* fn3() {
    let index = 0;
    while(ture) {
        yield index++;
    }
}
const c = fn3();
c.next(); //{value: 1, done: false} -> 반복시 value계속증가


// yield* 이용
function* gen1(){
    yield 'h';
    yield 'i';
}

function* gen2(){
    yield 'oh,';
    yield* gen1(); //gen1호출
    yield '!';
}
console.log(...gen2()); //oh, hi! //done이 true가 될때까지


// Generator는 다른작업하다가 다시 돌아와서 next()해주면 진행멈춘부분부터 이어서 실행