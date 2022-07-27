/* eslint-disable */
function note() {
    /*
    cf) Destructuring 문법
    let num = [1, 2]; //array안의 값들을 빼줌
    let [a, c] = [1, 2];
    */


    /* state
    state 변경함수 특징 : 기존과 신규 비교해서 같으면(==) 변경안함 
    let arr = [1,2,3]; array/object 특징 : 변수에 '화살표'(어딨는지)만 저장된것 -> =을 통해 넣어봤자 array만수정했지 화살표는 수정안됐으니 -> '글제목'을 가르키는건 같아서 기존/신규를 같다고생각함
    즉, state가 array/object면 독립적 카피본을 만들어서 수정해야(shallow copy)
    state만드는 곳은 사용하는 컴포넌트 중 최상위 컴포넌트에

    함수 생성 예시
        onClick={function(){ console.log(1)}}
        onClick={ () => { console.log(1)}}      // () => {}
    */


    /*
    * 컴포넌트 만드는 법
    1. function 만들고 (위의 function바깥에)
    2. return () 안에 html 담기
    3. <함수명></함수명> 쓰기

    * 어떤걸 컴포넌트로 만드면 좋을까
    1. 반복적인 html 축약할 때
    2. 큰 페이지들
    3. 자주 변경되는것들

    * 컴포넌트 단점
    state 가져다쓸때 문제 : A함수의 변수는 B함수에서 맘대로 사용불가
    */

    // * 컴포넌트 만드는 문법2
    const Modal = () => {
        return (
            <div></div>
        )
    }

    //  함수명 호출 방법2개 <Modal></Modal> 또는 <Modal/>


    /* 7) 동적인 UI 만드는 step    -- Modal
    1. html css로 미리 디자인 완성
    2. UI의 현재 상태를 state로 저장
    3. state에 따라 UI가 어떻게 보일지 작성
    */


    /* 8) map
    1. 왼쪽의 array 자료 갯수만큼 함수안의 코드 실행해줌
    2. 함수의 파라미터는 array 안에 있던 자료
    3. return안의 값은 array로 담아줌
    */
    [1,2,3].map(function(a, i){    // a는 array안에 있던 데이터  // i는 반복문돌때마다 0부터 1씩 증가하는 정수
        // console.log(a) //1 - 2 - 3
        return '1235'
    }) //map은 배열뒤에. map(콜백함수)


    /* props 부모->자식
    1. <자식컴포넌트 작명={state명}/>
    2. props 파라미터 등록 후 {props.작명} 사용
    자식->부모, 자식->자식 (X)
     */
}

export default note;