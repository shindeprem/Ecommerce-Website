import React, { createContext, useReducer } from "react";
import {Link,Route,Routes} from 'react-router-dom'
import './App.css'
import reducer from "./components/AddToCartSlice/AddToCart";
import MainPage from "./pages/Main/mainPage";
import ProductListing from "./pages/products-listing/ProductsListing";
import ProductsLayout from "./pages/Products-Layout/ProductsLayout";
import Filters from "./components/Filters/filters";
import ProductPage from "./components/Product-Page/ProductPage";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import UserCart from "./components/UserCart/UserCart";
import ProductCard from "./components/Product-Card/Product-Card";

export const CartContext = createContext('');

const products = []

const initialState = {
    item:products,
    id:null,
    totalAmount:25600,
    totalItems:0,
    quantity:1,
}


const App =()=>{

    // Add context here


    const [state,dispatch] = useReducer(reducer,initialState)

    const clearCart = () => {
        return dispatch({ type: "clear-cart" });
    };

    const removeItem = (id) => {
        return dispatch({
            type: "Remove-Item",
            payload: id,
        });
    };

  const increment = (id) => {
    return dispatch({
      type: "increment",
      payload: id,
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "decrement",
      payload: id,
    });
  };

  const addItem = (id,name,price) =>{
    return dispatch({
        type:'add-to-cart',
        payload:{
            id:id,
            name:name,
            price:price,
        }
    })
  }

    return(
        <>
        <CartContext.Provider value={{...state,addItem,clearCart,increment,decrement,removeItem}}>
          <Routes>
              <Route path="/" element={<ProductsLayout/>}>
                  <Route index element={<MainPage/>}/>
                  <Route path="product-listing" element={<ProductListing/>}/>
                  <Route path="product/:id" element={<ProductPage/>}/>
                  <Route path="/products/cart" element={<UserCart/>}/>
              </Route>
              <Route path="/auth/signin" element={<SignIn/>}/>
              <Route path="/auth/signup" element={<SignUp/>}/>
          </Routes>
        </CartContext.Provider>
        </>
    )
}
export default App;