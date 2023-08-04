import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  products: [],
  loading: false,
  error: "",
  totlalPrice: 0,
  checkOut: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const items=state.products.find((item)=>item.id===action.payload.id)

        if(items){
            items.quantity++
        } else{
            state.products.push({...action.payload,quantity:1})
        }
    },
    decrement :(state,action)=>{
      const item=state.products.find((item)=>item.id===action.payload)

      if(item){
        if(item.quantity===1){
          item.quantity=1
        }else{
          item.quantity--
        }
      }
    },

    incerement:(state,action)=>{
      const {id}=action.payload

      const product=state.products.find((item)=>item.id===id)

      if(product){
        product.quantity+=1
      }
    },
    checkOut:(state,action)=>{
      state.products=[]
      state.totlalPrice=0
      state.checkOut=true
    }
  }
});




export default productsSlice.reducer;

export const { addToCart ,decrement ,incerement , checkOut} = productsSlice.actions;
