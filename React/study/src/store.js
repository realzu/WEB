import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'

// createSlice 함수길면 파일 따로 -> <userSlice.js>

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1},
    ],
    reducers : {
        addCount(state, action){
            let 번호 = state.findIndex((item)=>{ return item.id === action.payload })  //★ findIndex찾는인덱스번호반환 (return이 조건식)
            state[번호].count++
        },
        addItem(state, action){
            state.push(action.payload)
        }
    }
})
export let {addCount, addItem} = cart.actions

export default configureStore({
    reducer: {
        user : user.reducer,
        cart : cart.reducer
    }
}) 