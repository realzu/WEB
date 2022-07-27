import React, { useState } from 'react';
import './App.css';

// let 박스 :JSX.IntrinsicElements['div'] = <div>ㅁㄴㅇㄹㄴ</div>;  //JSX표현하는타입) :JSX.Element/IntrinsicElements --얜 에러나는걸..
let 박스 :JSX.Element = <div>ㅁㄴㅇㄹㄴ</div>;  //JSX표현하는타입) :JSX.Element/IntrinsicElements

function App() {

  let [user, setUser] = useState('kim') //useState타입은 자동으로 설정됌

  return (
    <div>
      { 박스 }
      <h4>Hello</h4>
      <Profile name="태민" age='25'></Profile>
    </div>
  );
}
function Profile(props :{name :string, age :string}) :JSX.Element { //Component 만들 때 타입지정: return타입
  return (
    <div>{props.name}입니다</div>
  );
}


export default App;
