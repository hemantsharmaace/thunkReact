import fakeApiStore from "../../apis/fakeApiStore";
import { ActionTypes } from "../constants/action-types"

export const fetchProducts =  () =>{

    return async  function(dispatch) {
        const response = await fakeApiStore.get("/products"); 
        dispatch({
            type : ActionTypes.FETCH_PRODUCTS,
            payload:response.data
        })
    } 
}

export const fetchProduct =  (id) =>{ 
    return async  function(dispatch) {
        const response = await fakeApiStore.get(`/products/${id}`); 
        dispatch({
            type : ActionTypes.SELECTED_PRODUCTS,
            payload:response.data
        })
    } 
}

// export const setProducts = (products) =>{

//     return {
//         type : ActionTypes.SET_PRODUCTS,
//         payload:products
//     }

// }


// export const selectedProducts = (products) =>{

//     return {
//         type : ActionTypes.SELECTED_PRODUCTS,
//         payload:products
//     }

// }

export const removeSelectedProducts = () =>{

    return {
        type : ActionTypes.REMOVE_SELECTED_PRODUCTS,
    }

}

// export const setProducts = (products) =>{

//     return {
//         type : ActionTypes.SET_PRODUCTS
//         payload:products
//     }

// }