import { createSlice } from "@reduxjs/toolkit";



const wishlistSlice = createSlice({
    name : "wishlist",
    initialState : {
        items : [],
    },
    reducers : {
        setItemW: (state, action) => {
            // Set the cart items in the state
            state.items = action.payload;
        },
        // addItemW : (state,action)=>{
            //     state.items.push(action.payload);
            // localStorage.setItem("wishlist", JSON.stringify(state.items));
        // },
        removeItemW : (state,action) => {
            const idToRemove = action.payload.itemId;
            state.items = state.items.filter((item) => item.id !== idToRemove);
            localStorage.removeItem("wishlist", JSON.stringify(state.items));
        },
        
    }
})

export const {setItemW,addItemW,removeItemW} = wishlistSlice.actions; 
export default wishlistSlice.reducer;
