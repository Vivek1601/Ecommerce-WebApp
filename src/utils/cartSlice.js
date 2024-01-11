import { createSlice } from "@reduxjs/toolkit";


const cartSlice =  createSlice({
  name: "cart",
  initialState : {
    items : [],
  },
  reducers : {
    setCart: (state, action) => {
      // Set the cart items in the state
      state.items = action.payload;
    },
    // addItem : (state,action)=>{
    //   state.items.push(action.payload);
    //   // localStorage.setItem("cart", JSON.stringify(state.items));
    // },
    removeItem : (state) =>{
      state.items.pop();
    },
    clearCart : (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    }
  }
})

export const {setCart,addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;


