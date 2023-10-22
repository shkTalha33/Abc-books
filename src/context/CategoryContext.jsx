import React, { createContext, useContext, useState,useReducer,useEffect} from 'react'
import { collection, getDocs } from "firebase/firestore";
import { firestore } from '../config/FirebaseConfig';



const categoryContext =  createContext()


export default function CategoryContextProvider(props) {



    const initailState = {
        all_Products : [],
        filter_Products:[],
        filters:{
          category:[],
          rating:null,
          price:0,
          max:0,
          min:0,

        }
    }
    const reducer = (state,action) =>{
        switch (action.type) {
            case "SET_PRODUCTS":
              let maximumPrice = action.payload.products.map((doc)=> doc.price)
             let  maxPrice = maximumPrice.reduce((accumulator,curVal)=>{
                return Math.max(accumulator,curVal)
             },0)          
           return {...state,all_Products:action.payload.products,filter_Products:action.payload.products,filters:{...state.filters,max:maxPrice,price:maxPrice}}


           case "FILTERATION_METHODS":
            let {name,value }= action.payload
            return {...state,filters:{...state.filters,[name]:value}}


            case "SET_PRODUCT_ORDER":
             let {filter_Products} = state
            let order = action.payload.order
            let sortedProducts;

            if (order === "high") {
              sortedProducts = [...filter_Products].sort((a, b) => b.price - a.price);
            } else if (order === "low") {
              sortedProducts = [...filter_Products].sort((a, b) => a.price - b.price);
            } else if (order === "a-z") {
              sortedProducts = [...filter_Products].sort((a, b) => a.book.localeCompare(b.book));
            } else if (order === "z-a") {
              sortedProducts = [...filter_Products].sort((a, b) => b.book.localeCompare(a.book));
            } else {
              sortedProducts = [...filter_Products];
            }
           return{...state,filter_Products:sortedProducts}

         case  "FILTRATION_OF_PRODUCTS":
             let {all_Products} = state
             let tempProducts = [...all_Products]
             let {category,price,rating} = state.filters
  
           if (category.length !== 0) {
            tempProducts = tempProducts.filter((prod)=>{           
           return  category.includes(prod.category)
           
           } )
          
           }
           if (price) {
             tempProducts = tempProducts.filter((prod)=>{           
               return   prod.price <= price
              })
            }
              if (rating) {
               tempProducts = tempProducts.filter((prod) => {
                return prod.rating >= rating && prod.rating < rating + 1;
               });
             }

           
           return {...state,filter_Products:tempProducts}
            default:
               return state
        }
    }
    const [state, dispatch] = useReducer(reducer,initailState)

   


    const getProducts = async() => {
        try {
          const querySnapshot = await getDocs(collection(firestore, "books"));
          let products=[]
          querySnapshot.forEach((doc) => {
            let data = doc.data()
            products.push(data)
            });
            dispatch({type:"SET_PRODUCTS", payload:{products}})
    } catch (error) {
          
        }
    }
    
      useEffect(() => {
        getProducts()
      }, [])

  return (
    <>
         <categoryContext.Provider value={{...state,dispatch}}>
            {props.children}
         </categoryContext.Provider>
    </>
  )
}

export const useCategoryContext = () =>  useContext(categoryContext)
