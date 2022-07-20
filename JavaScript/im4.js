// @ 배열 메소드 2
// arr.sort() : 배열 재정렬, 배열 자체가 변경되니 주의
let arr = [1,4,5,2,3];
arr.sort(); //[1,2,3,4,5] --알파벳도 순서대로

arr = [27,13,8,5];
arr.sort(); //[13,27,5,8] -- 문자열기준이라 첫번째자리를 기준으로 옴!

arr.sort((a,b) => { //순서대로 a,b에 들어감 (인수로 정렬 로직을 담은 함수를 받음)
    return a-b; // a-b가 양수면 자리 교체, 음수면 그대로
}); //lodash 라이브러리 참고


// arr.reduce() : 인수로 함수를 받음
// (누적 계산값, 현재값) => { return 계산값 };
// 배열의 모든 수 합치기
// let result = 0
// arr.forEach((num) => {
//     result += num;
// }); 얘네 대신에 reduce로 가능
let result = arr.reduce((prev, cur) => {
    return prev + cur;
}, 0);  //0이 아닌 100이면 누적 100부터 시작

let userList = [
    {name : 'Mike', age:30},
    {name : 'Tom', age:10},
    {name : 'Jane', age:27},
]

result = userList.reduce((prev, cur) => {
    if (cur.age > 19) {
        prev.push(cur.name);
    }
    return prev;
}, []);



// @나머지 매개변수, 전개 구문(Rest prameters, Spread syntax)
// 인수 전달
function showName(name){ //매개변수 갯수 제한x. 에러안뜸. but출력은 처음껄로
    console.log(name);
}

showName('Mike'); //Mike
showName('Mike','Hj'); //Mike
showName(); //undefined


/* arguments
함수로 넘어온 모든 인수에 접근
함수내에서 이용가능한 지역변수
length / index
Array 형태의 객체   -- 배열의 내장 메서드 없음(forEach, map)
*/
function showName1(name){
    console.log(arguments.length);
    console.log(arguments[1]); //hj
}
showName1('Mike','hj');


/* 나머지 매개변수 (es6환경에선 가급적 권장) : 입력 순서 항상 마지막에 */
function showName2(...names){ // 매개변수 갯수 상관x
    console.log(names);
}
showName2(); // []  --undefined(X)
showName2('hj'); // ['hj']
showName2('mike', 'hj'); // ['mike', 'hj']

// user 객체 만들어주는 생성자 함수
function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('hj', 25, 'react', 'js');
const user2 = new User('tm', 30, 'html');


/* 전개 구문 (Spread syntax) : 배열 */
let arr1 = [1,2,3];
let arr2 = [4,5,6];

arr2.reverse().forEach((num) => { //reverse안하면
    arr1.unshift(num);  //unshift에 의해 6,5,4,1,2,3으로 나옴
});
// 이걸 밑의 줄로 바로 가능

result = [...arr1, ...arr2]; //[1,2,3,4,5,6]
result = [0, ...arr1, ...arr2, 7,8,9]; //[0,1,2,3,4,5,6,7,8,9] --arr.push/splice/concat보다 간편



// 전개 구문 : 복제
client = {name:'hj', age:25};
client1 = {...client};

client1.name = 'taemin'; //별개로 변경가능



