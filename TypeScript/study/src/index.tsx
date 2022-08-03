import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

/* 
const 초기값 :{count :number} = { count: 0 };    //모든 컴포넌트가 공유할 state

function reducer(state = 초기값, action :{type :string}) { //미리 정의한 state 수정방법
    if (action.type === '증가') {
    return { count : state.count + 1 }
    } else if (action.type === '감소'){
    return { count : state.count - 1 }
    } else {
    // return initialState
    }
}

// const store = createStore(reducer)

// store의 타입 미리 export 해두기 
export type RootState = ReturnType<typeof store.getState> //store변수의 타입이 자동으로 나옴
*/

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
