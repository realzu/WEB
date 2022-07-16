// @ 변수 -- var
// console.log(name); //undefined
var name = 'hj';

// console.log(name); //let, const -- 가능


// 스코프 (scope)
const age = 20;
if (age>19) {
    var txt = '성인'; //let, const는 해당 블럭 나오는 순간 사용불가
}
// console.log(txt); 

function add(num1, num2){
    var result = num1 + num2; //var는 function 나오는 순간 사용불가
}



// @ 생성자 함수 -- for 객체 리터럴 생성 (비슷한 객체 여러 개 만들 때)
function User(name, age){   //주로 함수명 첫글자 대문자
    // 알고리즘 순서1) this = {} //빈 객체 할당

    this.name = name; //속성 추가
    this.age = age;
    this.sayName = function(){
        console.log(this.name); //여기서 this는 밑에 user1에서 호출했다면 user1이 됌
    }

    // 알고리즘 순서2) return this;
}

let user1 = new User('hj', 25); //new를 안붙이면 단순히 함수 실행되니, 생성자 함수는 new 붙여줘야함!
user1.sayName();