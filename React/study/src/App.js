/* eslint-disable */
// Lint 끄는 기능 (warning)

import { useState } from 'react';
import './App.css';

function App() {

  // let post = '강남 우동 맛집';  //서버에서 가져왔다 가정

  // 자료 잠깐 저장할 때 state : import {useState} -> useState(보관할자료) -> let[작명(state에보관한자료), 작명(state변경도와주는함수)]
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']); //배열 가능

  // cf) Destructuring 문법
  // let num = [1, 2]; //array안의 값들을 빼줌
  // let [a, c] = [1, 2];

  // state 쓰는 이유: 일반변수는 갑자기 변경되면 html에 자동으로 반영안되지만, state쓰던 html은 자동 재렌더링! (=페이지 안에서 자주 바뀌는 것들은 state)

  let [하트, 하트변경] = useState(0);

  // function 함수(){
  //   console.log(1);
  // }

  return (
    <div className="App">{/* JSX : .js파일에서 쓰는 html 대용품 */}
        <div className='black-nav'> {/* class는 className */}
          {/* <h4 style={{color : 'red', fontSize : '16px'}}>블로그임</h4> style={{스타일명:'값}} */}
          <h4>ReactBlog</h4>
        </div>
        {/* <h4>{post}</h4> 데이터바인딩: 변수넣을땐 {중괄호} */}

        <button onClick={() => {
          let copy = [...글제목]; {/* array/object 다룰 때 원본은 보존하는게 좋음. '글제목'의 화살표만 복사됨(화살표가 같으면 ==비교할때 true나옴) //...은 괄호를벗겼다가 다시씌우는거라 새로운화살표 */}
          copy[0] = '여자코트 추천';
          글제목변경(copy);
          }}>글수정
          {/* state변경함수 특징 : 기존과 신규 비교해서 같으면(==) 변경안함 */}
          {/* let arr = [1,2,3]; array/object 특징 : 변수에 '화살표'(어딨는지)만 저장된것 -> =을 통해 넣어봤자 array만수정했지 화살표는 수정안됐으니 -> '글제목'을 가르키는건 같아서 기존/신규를 같다고생각함 */}
          {/* 즉, state가 array/object면 독립적 카피본을 만들어서 수정해야(shallow copy) */}
        </button>

        <button onClick={() => {
          let abc = [...글제목];  //항상 copy!!
          글제목변경(abc.sort());
        }}>가나다순정렬</button>

        <div className='list'>
          <h4>{ 글제목[0] } <span onClick={() => { 하트변경(하트+1) }}>💗</span> {하트} </h4>{/* onClick은 함수(함수명or함수문법) 넣어야 */}
          {/* state 변경법: state변경함수(새로운state)   //등호x */}
          {/* 함수 생성 예시 */}
          {/* onClick={function(){ console.log(1)}} */}
          {/* onClick={ () => { console.log(1)}} */} {/* () => {} */}
          <p>7월 25일 발행</p>
        </div>
        <div className='list'>
          <h4>{ 글제목[1] }</h4>{/* 배열이니 변수에도 인덱스 처리 */}
          <p>7월 25일 발행</p>
        </div>
        <div className='list'>
          <h4>{ 글제목[2] }</h4>
          <p>7월 25일 발행</p>
        </div>

        {/* 함수명 호출 둘다 가능 */}
        {/* <Modal></Modal> */}
        <Modal/>
    </div>
  );
}

// * 컴포넌트 만드는 법
// 1. function 만들고 (위의 function바깥에)
// 2. return () 안에 html 담기
// 3. <함수명></함수명> 쓰기
function Modal(){ //Modal 쓴게 컴포넌트 (대문자로 시작)
  return (
    // <>
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    //   <div></div>
    // </>
  )
}
// * return 안에 html 병렬 기입하려면
// 큰태그로 감싸줌 - 의미없는 <div></div>대신 <></>사용가능. 이걸로 묶어줄수있

// * 어떤걸 컴포넌트로 만드면 좋을까
// 1. 반복적인 html 축약할 때
// 2. 큰 페이지들
// 3. 자주 변경되는것들

// * 컴포넌트 단점
// state 가져다쓸때 문제 : A함수의 변수는 B함수에서 맘대로 사용불가

// 컴포넌트 만드는 문법2
const Modal1 = () => {
  return (
    <div></div>
  )
}

export default App;
