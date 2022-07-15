// 변수
let grade = 'F';

	grade = 'A+';

const PI = 3.14;



// 자료형
const name = "Hyunju";
const msg = `My name is ${name}`;
const msg1 = `오늘은 ${14+1}일`;
// console.log(msg1)

const x = 1/0;
// console.log(x); //Infinity

const y = name/2;
// console.log(y); -- Nan = Not a number

/* null = 존재하지 않는 값
undefined = 값이 할당되지 않음 */
let a;
// console.log(a); undefined
let user = null;

// typeof
const brand = 'cup';

// console.log(typeof 3);
// console.log(typeof brand);
// console.log(typeof true);
// console.log(typeof 'hi');
// console.log(typeof null);
// console.log(typeof undefined);



// 대화상자
/* alert 알려줌, prompt 입력받음, confirm 확인받음 */
// const answer = prompt('이름을 입력하세요.');
// alert('환영합니다, ' + answer + '님');
// alert(`환영합니다, ${answer}님`);
// prompt('예약일을 입력하세요', '2022-07-');
// const isAdult = confirm('당신은 성인입니까?');   --확인,취소
/* prompt 답 -> 문자형, '취소'누르면 null 할당 */


// 형변환
// 명시적 형변환
// console.log(String(3));
// console.log(Number('1234'));
// console.log(Number(true), Number(false)); //1, 0
// console.log(Boolean(123), Boolean('hi')) //true
// console.log(Boolean(0), Boolean(""), Boolean(null), Boolean(undefined), Boolean(NaN)) //false

// console.log(Number(null)) //0
// console.log(Number(undefined)) //Nan



// 연산자
const i = 1;
const j = '1';
// console.log(i === j) //false
/* 
== : 동등연산자 (JS가 알아서 형변환)
=== : 일치연산자 (타입까지 비교)
*/

/* 논리연산자
or는 첫번째 true를 발견하는 즉시 평가를 멈춤
and는 첫번째 false를 발견하는 즉시 평가를 멈춤
-> 확률이 가장 낮은 것들을 앞에 배치하여 시간 줄이기 (=성능최적화 높)
*/
//and가 or보다 우선순위 높다
const gender = 'F';
const level = 3;
const isAdult = true;

// if((gender === 'M' && level === 3) || isAdult){ -- 사실상 괄호 순서와 같음. ||우선하려면 ()덧붙이기
if(gender === 'M' && level === 3 || isAdult){   //&&먼저 확인 후 -> || 확인
    console.log('통과');
}else{
    console.log('실패');
}
