// @ 문자열 메소드 (String methods)
// 여러 줄
let desc = 'Nice\nto meet\nyou';

// desc = `
// Nice
// to meet
// you`;

desc.length; // length : 문자열 길이

desc[2]; // [] : 특정 위치에 접근

desc.toUpperCase();
desc.toLowerCase();

// 문자 찾기
desc.indexOf('to'); //문자위치찾기. 0부터 셈. 공백도 셈
desc.indexOf('z'); //없으면 -1
if(desc.indexOf('Nice') > -1){
    console.log('to가 포함된 문장입니다'); //첫번째자리는 0이라 false처리되므로 주의
}
desc.includes('to'); //true -- 위치가 아닌 t/f여부

// str.slice(시작점, 끝)
desc = 'abcdefg';
desc.slice(2); //인덱스2부터
desc.slice(0, 5); //0부터 4까지
desc.slice(2, -2); //2부터 뒤에서 (ㄹㅇ)2번째까지 -- 음수면 끝에서부터 셈

// str.substring(n, m) : n과 m사이의 문자열 (n, m바꿔도 동작). 음수는 o으로 인식
desc.substring(5, 2); //cde

// str.substr(n ,m) : n부터 시작. m개 가져옴
desc.substr(-4, 2); //de

// str.trim() : 앞 뒤 공백 제거 (중간말고)
desc = ' hi! ';
desc.trim();

// str.repeat(n) : n번 반복
desc.repeat(3);

// 문자열 비교 (대문자<소문자, 알파벳순)
'a' < 'c' //true
'abc'.codePointAt(1); // string중에 n번째 아스키코드값
'abc'.fromCodePoint(97); //'a' (vscode에 안뜸)

// console.log('abc'.codePointAt(1));


// @ 배열 메소드1
let arr = [1, 2, 3, 4, 5]

// arr.splice(n, m) : n부터. m개의 요소 지움
arr.splice(1, 2); //[1, 4, 5]

// arr.splice(n, m, x) : 특정 요소 지우고 '추가'
arr.splice(1, 3, 100, 200); // [1, 100, 200, 5]
arr.splice(1, 0, 100, 200); //0이면 변경없이 1뒤에 값 추가

let result = arr.splice(1, 2);
console.log(result); //[2,3] 값넣어 반환 시에는 삭제된 요소 반환

// arr.slice(n, m) : n부터 m까지 반환
arr.slice(1, 4); //[2, 3, 4]
let arr2 = arr.slice(); //()괄호에 없으면 복사

// arr.concat(arr2, arr3); : 합쳐서 새배열 반환
arr = [1, 2];
arr.concat([3,4], [5, 6]); // [1,2,3,4,5,6]
arr.concat([3,4 ], 5, 6); // [1,2,3,4,5,6]

// arr.forEach(fn) : 배열 반복
// users.forEach((item, index, arr) => {
    //     ...// })
let users = ['taemin', 'hyunju', 'minhyun'];
users.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`);
});

arr = [1,2,3,4,5,1,2,3]
arr.indexOf(3) // 2 -- 찾는 인덱스 번호
arr.indexOf(3, 3) //7 -- 2번째위치는 찾을인덱스시작번호
arr.lastIndexOf(3); //끝에서부터 찾기

// arr.includes() : 포함하는지 확인
arr.includes(2); //true

// arr.find(fn) --t,f / arr.findlndex(fn)--인덱스 반환  (없으면 undefined)




// ---
// @ 클로저 (Closure)
let one;
one = 1;

function addOne(num) {
    console.log(one + num);
}

addOne(5);


function makeAdder(x) {
    return function(y) {
        return x + y;
    }
}

const add3 = makeAdder(3);
console.log(add3(2)); //5


function makeCounter() {
    let num = 0;

    return function() {
        return num ++;
    };
}
let counter = makeCounter();

console.log(counter()); //0
console.log(counter()); //1
console.log(counter()); //2