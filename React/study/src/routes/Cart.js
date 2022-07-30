import { memo, useMemo, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../store";
import { changeName, increase } from "../store/userSlice";

function Cart(){
    let state = useSelector((state)=> state )
    let dispatch = useDispatch()

    return (
        <div>
            {state.user.name} {state.user.age} 의 장바구니
            <button onClick={()=> { dispatch(increase(10)) }}>버튼</button>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {//★map은 {}안에!
                        state.cart.map((item, i) => 
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.count}</td>
                                <td>
                                    <button onClick={() => {
                                        dispatch(addCount(item.id))
                                    }}>+</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart;