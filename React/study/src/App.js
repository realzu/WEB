// -- CodingApple

/* eslint-disable */
// import './App.css';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import bg from './img/bg.png';
// import { createContext, lazy, Suspense, useEffect, useState, useTransition, useDeferredValue } from 'react';
// import data from './data';
// import { Link, Outlet, Route, Router, Routes, useNavigate } from 'react-router-dom';
// import Detail from './routes/Detail';
// import axios from 'axios';
// // import Cart from './routes/Cart';
// import { useQuery } from '@tanstack/react-query';

// // export let Context1 = createContext()

// const Cart = lazy(() => import('./routes/Cart.js')); 

// function App() {

//   let [shoes, setShoes] = useState(data);
//   // let [재고] = useState([10, 11, 12])
//   let [click, setClick] = useState(2);

//   let navigate = useNavigate(); //페이지 이동 도와줌

//   let result = useQuery(['user'], ()=>
//     axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
//       return a.data
//     }),
//     { staleTime : 2000 }//2초안엔 refetch안됌
//   )//서버에서 유저이름 가져와 보여주기 : react-query이용해 ajax요청

//   // let [isPending, startTransition] = useTransition()  //[변수,함수]
//   // let state = useDeferredValue(state) //또는 변수

//   useEffect(()=>{
//     localStorage.setItem('watched', JSON.stringify([]))
//   }, [])

//   return (
//     <div className='App'>
//       <Navbar bg="light" variant="light">
//         <Container>
//           <Navbar.Brand href="#home">RealShop</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
//             <Nav.Link onClick={()=>{ navigate('/cart') }}>Cart</Nav.Link> {/* 함수 실행하면 페이지 이동 */}
//           </Nav>
//           <Nav className='ms-auto'>
//             {/* { result.isLoading ? '로딩중' : result.data.name} */}
//             { result.isLoading && '로딩중' }
//             { result.error && '에러발생' }
//             { result.data && result.data.name }
//           </Nav>
//         </Container>
//       </Navbar>

//       {/* 라우터로 페이지 나누는법: path(경로), element(보여줄html) */}
//       <Routes>
//         <Route path='/' element={
//           <>
//             <div className='main-bg' style={{backgroundImage : 'url(' + bg + ')'}}>{/* 이미지넣기) JS는 +기호 안에 넣기 */}
//             </div>
//             <div className="container">
//               <div className="row">
//                 { shoes.map((a, i)=> { //★배열.map(값, 인덱스)
//                     return <Card shoes={shoes[i]} i={i} key={i} /> //★부모->자식:shoes넘길수있잖
//                   })}          
//               </div>
//               {
//                 click == 4 ? null :
//                 <button onClick={() => {
//                   axios.get(`https://codingapple1.github.io/shop/data${click}.json`)
//                     .then((result)=> { 
//                       alert('로딩중입니다..')
//                       let item = [...shoes, ...result.data]; //★concat도 가능하지만.. (push는 더 비효율적)                    
//                       setShoes(item);
//                       setClick(click+1);
//                     }).catch(() =>{
//                       console.log('실패해씀')
//                     })
//                 }}>더보기</button>
//               }
//             </div>
//           </>
//         } />

//         <Route path='/detail/:id' element={<Detail shoes={shoes}/>} /> {/* :id/abc/:def 식으로 여러개(섞어서도) 가능 */}

//         {/* <Suspense fallback={ <div>로딩중..</div> }> */}
//           <Route path='/cart' element={<Cart />}/>
//         {/* </Suspense> */}

//         <Route path='/about' element={<About/>}>
//           <Route path='member' element={<div>여긴 멤버</div>} />
//           <Route path='location' element={<About/>} />
//         </Route> {/* Nested Routes: <Route path='/about/member' element={<About/>} /> 와 같음*/}
        
//         <Route path='/event' element={<Event/>}>
//           <Route path='one' element={<p>첫 주문 시 양배추즙 서비스</p>}/>
//           <Route path='two' element={<p>생일기념 쿠폰받기</p>}/>
//         </Route>
        
//         <Route path='*' element={<div>없는 페이지( (๑•̀ㅂ•́)وつ Bye</div>} />{/* 404페이지) *하면 이외의 모든경로 */}
//       </Routes>      

//     </div>
//   );
// }

// function Card(props) {  //★props로 받음!
//   return (
//     <div className="col-md-4">
//         <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%" />
//         {/* <img src={process.env.PUBLIC_URL + '/logo192.png'} width="80%" /> --public폴더이미지쓰는 권장방식(배포 시 문제없음) */}
//         <h4>{props.shoes.title}</h4>
//         <p>{props.shoes.price}</p>
//     </div>
//   )
// }

// function About(){
//   return (
//     <div>
//       <h4>회사정보!</h4>
//       <Outlet></Outlet>{/* Outlet태그의 위치가 곧, Nested Routes의 element 위치 */}
//     </div>
//   )
// }

// function Event(){
//   return (
//     <div>
//       <h4>오늘의 이벤트</h4>
//       <Outlet />
//     </div>
//   )
// }

// export default App;



// - jest

// import logo from './logo.svg';
// import './App2.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




// -- React Query
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import "./App2.css";
import { Posts } from "./react-query/Posts";

const queryClient = new QueryClient();

function App() {
  return (
    // provide React Query client to App
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Blog &apos;em Ipsum</h1>
        <Posts />
      </div>
      <ReactQueryDevtools /> {/* 개발자도구는 빌드 시 더나은 패키지 관리 위해 하위패키지에서 가져옴 */}
    </QueryClientProvider>
  );
}

export default App;