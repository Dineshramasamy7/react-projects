import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/UserSlice";

const Store = configureStore({
    reducer:{
        userInfo: userReducer
    }
})
export default Store;