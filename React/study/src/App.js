/* eslint-disable */
// Lint 끄는 기능 (warning)

import { useState } from 'react';
import './App.css';

function App() {

  // let post = '강남 우동 맛집';  //서버에서 가져왔다 가정

  // 자료 잠깐 저장할 때 state : import {useState} -> useState(보관할자료) -> let[작명(state에보관한자료), 작명(state변경도와주는함수)]
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']); //배열 가능

  // state 쓰는 이유: 일반변수는 갑자기 변경되면 html에 자동으로 반영안되지만, state쓰던 html은 자동 재렌더링! (=페이지 안에서 자주 바뀌는 것들은 state)

  let [하트, 하트변경] = useState(0);
  let [modal, setModal] = useState(false);

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
        </button>

        <button onClick={() => {
          let abc = [...글제목];  //항상 copy!!
          글제목변경(abc.sort());
        }}>가나다순정렬</button>

        <div className='list'>
          <h4>{ 글제목[0] } <span onClick={() => { 하트변경(하트+1) }}>💗</span> {하트} </h4>{/* onClick은 함수(함수명or함수문법) 넣어야 */}
          {/* state 변경법: state변경함수(새로운state)   //등호x */}
          <p>7월 25일 발행</p>
        </div>
        <div className='list'>
          <h4>{ 글제목[1] }</h4>{/* 배열이니 변수에도 인덱스 처리 */}
          <p>7월 25일 발행</p>
        </div>
        <div className='list'>
          <h4 onClick={() => {
            if (modal == true) {
              setModal(false)
            }else{
              setModal(true)
            }
          }}>{ 글제목[2] }</h4>
          <p>7월 25일 발행</p>
        </div>

        { // html 작성 공간이라 if..(x) -> 삼항연산자          
          modal == true ? <Modal/> : null   //null은 비어있는 html용으로 자주 사용
        }        

    </div>
  );
}

function Modal(){ //Modal 쓴게 컴포넌트 (대문자로 시작)
  return (
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
} // * return 안에 html 병렬 기입하려면
// 큰태그로 감싸줌 - 의미없는 <div></div>대신 <></>사용가능. 이걸로 묶어줄수있


export default App;