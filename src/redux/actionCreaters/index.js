import { ADD_TO_CART,ADD_TO_CART2, REMOVE_FROM_CART, CLEAR_CART,IncreaseCart,DecreaseCart  } from "../actionTypes";



export const addToCart = (item) =>{
    return{
        type : ADD_TO_CART ,     
        payload:item,
    };
};

export const addToCart2 = (item) =>{
    return{      
        type : ADD_TO_CART2,
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