import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "../Redux/fetchare/createSlice"



const store=configureStore({
    reducer:{items:productsSlice}
})


export default store