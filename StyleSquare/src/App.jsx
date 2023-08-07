import React from "react";
import {Link,Route,Routes} from 'react-router-dom'
import './App.css'
import MainPage from "./pages/Main/mainPage";
import ProductListing from "./pages/products-listing/ProductsListing";
import ProductsLayout from "./pages/Products-Layout/ProductsLayout";

const App =()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<ProductsLayout/>}>
                <Route index element={<MainPage/>}/>
                <Route path="product-listing" element={<ProductListing/>}/>
            </Route>
        </Routes>
        </>
    )
}
export default App;