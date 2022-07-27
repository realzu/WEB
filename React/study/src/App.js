/* eslint-disable */
// Lint 끄는 기능 (warning)

import React, { useState } from 'react';
import './App.css';

function App() {
  // let post = '강남 우동 맛집';  //서버에서 가져왔다 가정

  // 자료 잠깐 저장할 때 state: import {useState} // useState(보관할자료) -> let[작명(state에보관한자료), 작명(state변경도와주는함수)]
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']); //배열 가능

  // state 쓰는 이유: 일반변수는 갑자기 변경되면 html에 자동으로 반영안되지만, state쓰던 html은 자동 재렌더링! (=페이지 안에서 자주 바뀌는 것들은 state)

  let [하트, 하트변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [tnum, setTnum] = useState(0);
  let [입력값, 입력값변경] = useState('');

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

      {/* <div className='list'>
        <h4 onClick={() => {
          if (modal == true) {
            setModal(false)
          }else{
            setModal(true)
          }
        }}>{ 글제목[2] }<span onClick={() => { 하트변경(하트+1) }}>💗</span> {하트} </h4>
        <p>7월 25일 발행</p>
      </div> */}
      {/* onClick은 함수(함수명or함수문법) 넣어야 */}
      {/* state 변경법: state변경함수(새로운state)   //등호x */}

      {
        글제목.map(function(a, i){   //실제 블로그글개수만큼 html생성 -> 글제목(=state) 배열이니 가능
          return (  
            <div className='list' key={i}> {/* 반복문html은 key={html마다 다른숫자} 추가해야 */}
              <h4 onClick={()=>{ setModal(true); setTnum(i) }}>{ 글제목[i] }  {/* {a}도 가능 */}
              <span onClick={(e) => { 
                e.stopPropagation(); //상위html로 퍼지는 이벤트버블링 막기
                let heart = [...하트];  //array자료형은 항상 복사★
                heart[i] = heart[i] + 1
                하트변경(heart)
              }}>💗</span> {하트[i]} </h4>
              <p>7월 25일 발행</p>
              <button onClick={()=> {
                // 글제목변경(글제목[i].pop())
                let post = [...글제목];
                post.splice(i, 1);
                글제목변경(post);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e)=>{ 
        입력값변경(e.target.value); //state변경은 늦게처리됌 (비동기)
        // console.log(입력값);
      }}/>{/* e는 이벤트객체. 발생하는이벤트와 관련된 여러기능 담김 // e.target = 이벤트발생한html태그 +value: 입력한값 */}
      <button onClick={() => {
        let post = [...글제목];
        post.unshift(입력값);
        글제목변경(post)
        }}>추가</button>

      { // html 작성 공간이라 if,for..(x) -> 삼항연산자          
        modal == true ? <Modal color={'skyblue'} tnum={tnum} 글제목={글제목} 글제목변경={글제목변경}/> : null   //color="oragne"와 같이 props는 일반문자도 전송가능 //null은 비어있는 html용으로 자주 사용
      }

      {/* <Modal2/> -- class컴포넌트*/}

    </div>
  );
}

function Modal(props){ //Modal 쓴게 컴포넌트 (대문자로 시작)
  return (
      <div className='modal' style={{background: props.color}}>
        <h4>{props.글제목[props.tnum]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
          let title = [...props.글제목];
          title[0] = "여자코트 추천";
          props.글제목변경(title)
        }}>글수정</button>
      </div>
  )
} // * return 안에 html 병렬 기입하려면
// 큰태그로 감싸줌 - 의미없는 <div></div>대신 <></>사용가능. 이걸로 묶어줄수있


// class 참고 --옛문법(이젠 function)
/*
class Modal2 extends React.Component { //class=변수,함수보관함 //constructor+super+render 넣기
  constructor(props){
    super(props)
    this.state = {  //state생성
      name : 'hj',
      age : 25
    }
  }
  render(){
    return (
      <div>안녕 {this.state.age} {this.props}
        <button onClick={()=>{
          this.setState({age:21}) //state수정
        }}>버튼</button>
      </div>
    )
  }
}
 */

export default App;