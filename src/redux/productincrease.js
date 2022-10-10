import { createSlice } from "@reduxjs/toolkit"


const productsincdec=createSlice({
    name:"cart",
    initialState:{items:[],totalquantity:0},
    reducers:{
        productincrease(state,action)
        {
           const newitem=action.payload;
           const existing=state.items.find(item=>item.id===newitem.id)
           
           state.totalquantity++;
           if(!existing){
            state.items.push({id:newitem.id,price:newitem.price,title:newitem.title,quantity: 1,totalprice:newitem.price})
           }
           else{
            existing.quantity++;
            existing.totalprice=existing.totalprice+newitem.price;
           }
        },
        productdecrease(state,action)
        {
            const olditem=action.payload;
            const existing=state.items.find((item)=>item.id===olditem)
            
            state.totalquantity--;
            if(existing.quantity===1)
            {
                state.items=state.items.filter((item)=>item.id !== olditem);
            }
            else{
                existing.quantity--;
                existing.totalprice=existing.totalprice-existing.price;
            }
        }
    }
})

export const productAction=productsincdec.actions;
export default productsincdec.reducer;