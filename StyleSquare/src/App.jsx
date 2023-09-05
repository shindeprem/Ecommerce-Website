import React from "react";
import {Link,Route,Routes} from 'react-router-dom'
import './App.css'
import MainPage from "./pages/Main/mainPage";
import ProductListing from "./pages/products-listing/ProductsListing";
import ProductsLayout from "./pages/Products-Layout/ProductsLayout";
import Filters from "./components/Filters/filters";
import ProductPage from "./components/Product-Page/ProductPage";
import SignIn from "./components/SignIn/SignIn";

const App =()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<ProductsLayout/>}>
                <Route index element={<MainPage/>}/>
                <Route path="product-listing" element={<ProductListing/>}/>
                <Route path="product/:id" element={<ProductPage/>}/>
            </Route>
            <Route path="/signin" element={<SignIn/>}/>
        </Routes>
        </>
    )
}
export default App;