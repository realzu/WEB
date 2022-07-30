import { createSlice } from "@reduxjs/toolkit"

// Cart.js에서 호출하므로 가서 경로 수정도 해야함

let user = createSlice({
    name : 'user',
    initialState : { name : 'hyunju', age : 25 },
    reducers : {
        changeName(state){ //state: 기존state
            // return state + ' Jin' //또는 return 'hyunju Jin'
            state.name = 'taemin'
        },
        increase(state, action){
            state.age += action.payload
        }
    }
})
export let { changeName, increase } = user.actions //state변경함수들 남음(object형식) --마찬가지 Destructuring 

export default user;