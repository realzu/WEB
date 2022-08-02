import React, { useState } from 'react';
import './App.css';

let 박스 :JSX.Element = <div>ㅁㄴㅇㄹㄴ</div>;  //JSX타입) :JSX.Element/IntrinsicElements

function App() {

  let [user, setUser] = useState('kim') //useState()안의타입은 자동할당

  return (
    <div>
      { 박스 }
      <h4>Hello</h4>
      <Profile name="태민" age='25'></Profile>
    </div>
  );
}
function Profile(props :{name :string, age :string}) :JSX.Element { //Component 만들 때 return타입
  return (
    <div>{props.name}입니다</div>
  );
}

export default App;
