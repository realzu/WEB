// Map
var person = new Map();

// 자료의 연관성 표현 (-> 화살표 사용: A자료는 B자료와 연결돼있따)
person.set('name', 'Kim'); // 자료 2개 연결
person.set('age', 20);
person.set(1, 20);
// Object자료형의 자료명은 글자만. Map은 상관x

person.get('age'); // 20 - Map에서 자료 꺼내기
person.delete('age'); // 삭제
person.size // 자료갯수

for (let key of person.keys()){
    console.log(key);
}

var people = new Map([
    ['name', 'kim'],
    ['age', 20],
])


// Set: 중복자료 비허용
var 출석부 = ['john', 'tom', 'tom'];

var 출석부2 = new Set(출석부); // ['john', 'tom']
출석부2.add('sally');
출석부2.delete('sally');
출석부2.has('sally'); // false
출석부2.size

// Set <-> Array: Quiz
const tmp = new Set(출석부);
tmp = [...tmp];