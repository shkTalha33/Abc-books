import React, {  createContext, useContext, useReducer } from 'react'
  
const cartContext = createContext()

export default function CartContextProvider(props) {
    const getCart = () =>{
        let cartVal = JSON.parse(localStorage.getItem("cart"))
        if (cartVal === [] || cartVal == null) {
            cartVal = []
        }

         return cartVal 


    }
    
      const initialState = {
        cart: getCart(),
      };
    
      const setCart = (newCart) => {
        localStorage.setItem("cart", JSON.stringify(newCart));
      };
    
      const reducer = (state, action) => {
        switch (action.type) {
          case "ADD_TO_CART":
            let newItem = { ...action.payload, quantity: 1 };
            let existingItemIndex = state.cart.findIndex(
              (item) => newItem.id === item.id
            );
    
            if (existingItemIndex !== -1) {
              let updatedCart = [...state.cart];
              updatedCart[existingItemIndex].quantity += 1;
    
              setCart(updatedCart);
    
              return {
                ...state,
                cart: updatedCart,
              };
            }
    
            let newCart = [...state.cart, newItem];
    
            setCart(newCart);
    
            return {
              ...state,
              cart: newCart,
            };
      case "SET_DECREMENT":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
  
      case "SET_INCREMENT":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload && item.quantity < 10
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
            default:
               state
        }
    }
    const [state, dispatch] = useReducer(reducer,initialState)
  const getCartItems = (document) => {
       dispatch({type:"ADD_TO_CART",payload:document})
  }
  return (
    <>
        <cartContext.Provider value={{...state,dispatch,getCartItems}}>
            {props.children}
        </cartContext.Provider>
    </>
  )
}
export const useCartContext = () => useContext(cartContext)
