import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART,IncreaseCart,DecreaseCart  } from "../actionTypes";



export const addToCart = (item) =>{
    return{
        type : ADD_TO_CART ,
        payload:item,
    };
};


export const incresecart =(itemName)=>{
    return{
        type: IncreaseCart,
        payload:itemName,
    }
};

export const decreasecart =(itemName)=>{
    return{
        type: DecreaseCart,
        payload:itemName,
    }
};