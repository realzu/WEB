import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from './index';
import './App.css';
import { Dispatch } from 'redux';

let 박스 :JSX.Element = <div>ㅁㄴㅇㄹㄴ</div>;  //JSX타입) :JSX.Element/IntrinsicElements

function App() {

  let [user, setUser] = useState('kim') //useState()안의타입은 자동할당

  // const 꺼내온거 = useSelector( (state :RootState) => state); //리덕스의 state 가져오기 //:{count :number} -> RootState
  const dispatch :Dispatch = useDispatch(); //state 수정요청 문법

  return (
    <div>
      <div>
        { 박스 }
        <h4>Hello</h4>
        <Profile name="태민" age='25'></Profile>
      </div>

      <div className='App'>
        {/* {꺼내온거.count} */}
        <button onClick={()=>{dispatch({type :'증가'})}}>버튼</button>
      </div>
    </div>
  );
}
function Profile(props :{name :string, age :string}) :JSX.Element { //Component 만들 때 return타입
  return (
    <div>{props.name}입니다</div>
  );
}

export default App;
