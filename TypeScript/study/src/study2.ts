// "no-unused-vars": "off",
// "@typescript-eslint/no-unused-vars" : ["error"]

// type alias: 별칭
type Animal = string | number | undefined;
let 동물 :Animal = 'cat';

type AnimalType = { name :string, age :number}     // object
let 동물1 :AnimalType = { name : 'kim', age : 20}

// const : 바꿀수없음(등호로 재할당 막음) 
const 출생지역 = 'seoul';
const 출생지역1 = { region : 'seoul'};
출생지역1.region = 'busan' //but, const로 담은 object 수정 가능

// 위의 내용 막는 방법
type Boyfriend = {
    readonly name : string // readonly: 읽기전용(자료수정x)
}
const 남친 :Boyfriend = {
    name : '민현'
}
// 남친.name = '태민' --불가!
// 타입스크립트 에러는 에디터&터미널에서만 O. 실제 변환된 JS파일은 에러X


export {}