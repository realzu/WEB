/* eslint-disable */
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail(props) {

    let {id} = useParams(); //유저가 URL파라미터에 입력한 값 가져오기 (:id의 값 가져옴)
    let 찾은상품 = props.shoes.find((x) => x.id == id) //★find.  x(콜백함수)는 array자료들. return에 조건식(->그럼 조건식에 맞는값 반환) (array자료.id == url에 입력한 번호)
    
    let [alert, setAlert] = useState(true) //1.UI 상태 저장할 state만들고

    let [tab, setTab] = useState(0);
    
    let [write,setWrite] = useState(0);
    let [tf,setTf] = useState(true);

    useEffect(()=> {
        let a = setTimeout(()=> { setAlert(false) }, 2000)
        return () => {  //useEffect 동작 전에 실행
            clearTimeout(a) //타이머 제거
        }
    }, [])

    useEffect(()=> {
        isNaN(write) == false ? setTf(true) : setTf(false)
    },[write])
    
    return (
        <div className="container">
            {   //★ {} 로 열고 JSX사용 --2.state 따라 UI 어떻게보일지 작성
                alert == true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null
            }

            <div className="row">
                <div className="col-md-6">
                <img src={'https://codingapple1.github.io/shop/shoes' + (찾은상품.id + 1) + '.jpg'} width="100%" />
                </div>
                <div className="col-md-6">
                    { tf == true ? null : <p>숫자만 입력하세요</p> }
                    <input type='text' onChange={(e) => { setWrite(e.target.value) }} />
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">{/* defaultActiveKey : 기본으로 눌려있을버튼 */}
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={()=>setTab(0)}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={()=>setTab(1)}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={()=>setTab(2)}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab}/>

        </div>
    )
}

function TabContent({tab}){
    return (<div className="start end">{/* end클래스 부착 */}
            { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab] }
        </div>) //배열중 tab번째 내용만 꺼냄        
}

export default Detail;