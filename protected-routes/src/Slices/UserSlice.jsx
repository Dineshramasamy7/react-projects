import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user:null
}
const UserSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user = action.payload
        },
        removeUser:(state,action)=>{
            state.user = null
        },
    }
})
export const {setUser,removeUser} = UserSlice.actions;
export default UserSlice.reducer;