// tuple type (array)
let dog :[string, boolean];
dog = ['dog', true];

function 함수(...x :[string, number]){
  console.log(x);
}

함수('kim', 123);

const arr1 = [1, 2, 3];
const arr2 :[number, number, ...number[]] = [4, 5, ...arr1];

type Food = [string, number, ...boolean[]];
const food :Food  = ['동서녹차', 4000, true, false, true, true, false, true];


// Generic - 파라미터로 타입 입력 (확장성. 매번 다른타입)
function 함수2<MyType>(x :MyType[]) :MyType {
  return x[0];
}

let tmp1 = 함수2<number>([2, 4]);
let tmp2 = 함수2<string>(['2', '4']);
console.log(tmp1);
console.log(tmp2);

export {}