import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/authSlice/index"

const store = configureStore({
    reducer: {
        auth: authReducer
    },
})

export default store;